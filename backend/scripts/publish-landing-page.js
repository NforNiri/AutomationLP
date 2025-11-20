const { createStrapi } = require('@strapi/strapi');

async function publishLandingPage() {
    try {
        console.log('🚀 Starting publish script...');
        const strapi = await createStrapi({ distDir: './dist' }).load();

        const uid = 'api::landing-page.landing-page';

        // Find the entry
        const entry = await strapi.documents(uid).findFirst();

        if (!entry) {
            console.error('❌ Landing page entry not found!');
            process.exit(1);
        }

        console.log('Entry ID:', entry.documentId);
        console.log('Current publishedAt:', entry.publishedAt);

        // Force publish
        const published = await strapi.documents(uid).publish({
            documentId: entry.documentId,
        });

        console.log('✅ Entry published successfully!');
        console.log('New publishedAt:', published.publishedAt);

        // Verify it worked
        const verified = await strapi.documents(uid).findFirst();
        console.log('\n--- Verification ---');
        console.log('Verified publishedAt:', verified.publishedAt);
        console.log('Status:', verified.publishedAt ? 'PUBLISHED' : 'DRAFT');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

publishLandingPage();
