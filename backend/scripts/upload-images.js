/**
 * Upload images to Strapi Media Library
 * Run with: STRAPI_TOKEN=your_token node scripts/upload-images.js
 */

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';

if (!STRAPI_TOKEN) {
    console.error('❌ STRAPI_TOKEN environment variable is required.');
    console.log('Run: STRAPI_TOKEN=your_token_here node scripts/upload-images.js');
    process.exit(1);
}

async function uploadImage(filePath, fileName) {
    try {
        const form = new FormData();
        form.append('files', fs.createReadStream(filePath), fileName);

        const response = await axios.post(`${STRAPI_URL}/api/upload`, form, {
            headers: {
                'Authorization': `Bearer ${STRAPI_TOKEN}`,
                ...form.getHeaders()
            }
        });

        const result = response.data;
        console.log(`✅ Uploaded: ${fileName} (ID: ${result[0]?.id})`);
        return result[0];
    } catch (error) {
        console.error(`❌ Error uploading ${fileName}:`, error.response?.data || error.message);
        return null;
    }
}

async function uploadAllLogos() {
    console.log('🚀 Starting image upload to Strapi...\n');

    // --- 1. Upload Client Logos ---
    const logosDir = path.join(__dirname, '../../public/images/logos');
    const logoFiles = [
        'techflow-systems.png',
        'apex-logistics.png',
        'modern-realty.png',
        'growth-partners.png',
        'elevate-commerce.png',
        'datasphere.png'
    ];

    const uploadedImages = {};

    for (const file of logoFiles) {
        const filePath = path.join(logosDir, file);
        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️  File not found: ${file}`);
            continue;
        }

        const result = await uploadImage(filePath, file);
        if (result) {
            const key = file.replace('.png', '').replace(/-/g, '_');
            uploadedImages[key] = result.id;
        }
    }

    console.log('\n📋 Client Logos Upload Summary:');
    console.log(JSON.stringify(uploadedImages, null, 2));

    // --- 2. Link Images to Content ---
    console.log('\n🔗 Linking images to Landing Page content...');

    try {
        // Fetch current data
        const getResponse = await fetch(`${STRAPI_URL}/api/landing-page?populate=deep`, {
            headers: { 'Authorization': `Bearer ${STRAPI_TOKEN}` }
        });

        if (!getResponse.ok) throw new Error('Failed to fetch landing page data');
        const currentData = await getResponse.json();

        // --- Link Client Logos ---
        const socialProof = currentData.data.socialProof;
        let updatedClientsCount = 0;

        const updatedClients = socialProof.clients.map(client => {
            const key = client.name.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
            const imageId = uploadedImages[key];

            if (imageId) {
                console.log(`   - Linking logo for ${client.name} (Image ID: ${imageId})`);
                updatedClientsCount++;
                return { ...client, logo: imageId };
            }
            return client;
        });

        // --- Upload and Link Use Case Images ---
        console.log('\n🖼️  Processing Use Case illustrations...');
        const useCaseDir = path.join(__dirname, '../../public/images/use-cases');
        // We expect these files to exist now (created as placeholders if needed)
        const useCaseFiles = ['real-estate.png', 'logistics.png', 'ecommerce.png'];

        const useCases = currentData.data.useCases.cases;
        let updatedUseCasesCount = 0;

        // We need to process use cases sequentially to update the data structure
        const updatedUseCases = [...useCases];

        for (const file of useCaseFiles) {
            const filePath = path.join(useCaseDir, file);
            if (fs.existsSync(filePath)) {
                const result = await uploadImage(filePath, `use-case-${file}`);
                if (result) {
                    // Match file to label
                    let label = file.replace('.png', '').replace(/-/g, ' ');
                    if (label === 'ecommerce') label = 'E-commerce';
                    if (label === 'real estate') label = 'Real Estate';
                    if (label === 'logistics') label = 'Logistics';

                    const targetIndex = updatedUseCases.findIndex(c => c.label === label);

                    if (targetIndex !== -1) {
                        console.log(`   - Linking illustration for ${updatedUseCases[targetIndex].label} (Image ID: ${result.id})`);
                        updatedUseCases[targetIndex] = { ...updatedUseCases[targetIndex], illustration: result.id };
                        updatedUseCasesCount++;
                    } else {
                        console.log(`   ⚠️ Could not find matching Use Case for file: ${file} (Label: ${label})`);
                    }
                }
            }
        }

        // --- Upload and Link How It Works Images ---
        console.log('\n🖼️  Processing How It Works visualizations...');
        const howItWorksDir = path.join(__dirname, '../../public/images/how-it-works');
        const howItWorksFiles = ['step-1.png', 'step-2.png', 'step-3.png'];

        const howItWorksSteps = currentData.data.howItWorks.steps;
        let updatedHowItWorksCount = 0;
        const updatedSteps = [...howItWorksSteps];

        for (const file of howItWorksFiles) {
            const filePath = path.join(howItWorksDir, file);
            if (fs.existsSync(filePath)) {
                const result = await uploadImage(filePath, `process-${file}`);
                if (result) {
                    // Match file to step ID
                    // "step-1.png" -> ID "01"
                    // "step-2.png" -> ID "02"
                    // "step-3.png" -> ID "03"
                    const stepNum = file.replace('step-', '').replace('.png', '');
                    const stepId = `0${stepNum}`;

                    const targetIndex = updatedSteps.findIndex(s => s.id === stepId);

                    if (targetIndex !== -1) {
                        console.log(`   - Linking visualization for Step ${stepId} (Image ID: ${result.id})`);
                        updatedSteps[targetIndex] = { ...updatedSteps[targetIndex], image: result.id };
                        updatedHowItWorksCount++;
                    } else {
                        console.log(`   ⚠️ Could not find matching Step for file: ${file} (ID: ${stepId})`);
                    }
                }
            }
        }

        // --- Upload and Link Pain Points Icons ---
        console.log('\n🖼️  Processing Pain Points icons...');
        const painPointsDir = path.join(__dirname, '../../public/images/pain-points');
        const painPointsFiles = ['icon-1.png', 'icon-2.png', 'icon-3.png', 'icon-4.png'];

        const painPoints = currentData.data.painPoints.points;
        let updatedPainPointsCount = 0;
        const updatedPoints = [...painPoints];

        for (const file of painPointsFiles) {
            const filePath = path.join(painPointsDir, file);
            if (fs.existsSync(filePath)) {
                const result = await uploadImage(filePath, `pain-point-${file}`);
                if (result) {
                    // Match file to point ID
                    // "icon-1.png" -> ID 1
                    // "icon-2.png" -> ID 2
                    // ...
                    const pointId = parseInt(file.replace('icon-', '').replace('.png', ''));

                    const targetIndex = updatedPoints.findIndex(p => p.id === pointId);

                    if (targetIndex !== -1) {
                        console.log(`   - Linking icon for Point ${pointId} (Image ID: ${result.id})`);
                        updatedPoints[targetIndex] = { ...updatedPoints[targetIndex], customIcon: result.id };
                        updatedPainPointsCount++;
                    } else {
                        console.log(`   ⚠️ Could not find matching Point for file: ${file} (ID: ${pointId})`);
                    }
                }
            }
        }

        // --- Save All Updates ---
        if (updatedClientsCount > 0 || updatedUseCasesCount > 0 || updatedHowItWorksCount > 0 || updatedPainPointsCount > 0) {
            console.log('\n💾 Saving updates to Strapi...');
            const updateResponse = await fetch(`${STRAPI_URL}/api/landing-page`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${STRAPI_TOKEN}`
                },
                body: JSON.stringify({
                    data: {
                        socialProof: {
                            ...socialProof,
                            clients: updatedClients
                        },
                        useCases: {
                            ...currentData.data.useCases,
                            cases: updatedUseCases
                        },
                        howItWorks: {
                            ...currentData.data.howItWorks,
                            steps: updatedSteps
                        },
                        painPoints: {
                            ...currentData.data.painPoints,
                            points: updatedPoints
                        }
                    }
                })
            });

            if (!updateResponse.ok) {
                const errorText = await updateResponse.text();
                throw new Error(`Failed to update landing page: ${errorText}`);
            }
            console.log('✅ Successfully updated Landing Page data!');
        } else {
            console.log('⚠️ No updates needed.');
        }

    } catch (error) {
        console.error('❌ Error linking images:', error.message);
    }

    return uploadedImages;
}

uploadAllLogos();
