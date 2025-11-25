const qs = require('qs');

async function checkData() {
    try {
        console.log('Fetching with token:', process.env.STRAPI_TOKEN ? 'Yes' : 'No');

        const query = qs.stringify({
            populate: {
                howItWorks: {
                    populate: {
                        steps: {
                            populate: 'image'
                        }
                    }
                },
                painPoints: {
                    populate: {
                        points: {
                            populate: 'customIcon'
                        }
                    }
                }
            },
        }, {
            encodeValuesOnly: true,
        });

        console.log('Query String:', query);

        const response = await fetch(`http://localhost:1337/api/landing-page?${query}`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
            }
        });

        if (!response.ok) {
            console.error('Fetch failed:', response.status, response.statusText);
            const text = await response.text();
            console.error(text);
            return;
        }

        const json = await response.json();

        if (!json.data) {
            console.log('No data returned');
            return;
        }

        console.log('--- How It Works Steps ---');
        const steps = json.data.howItWorks?.steps || [];
        steps.forEach(step => {
            console.log(`Step ${step.id}:`, JSON.stringify(step.image, null, 2));
        });

        console.log('\n--- Use Cases ---');
        const cases = json.data.useCases?.cases || [];
        cases.forEach(c => {
            console.log(`Case ${c.id}:`, JSON.stringify(c.illustration, null, 2));
        });

        console.log('\n--- Pain Points ---');
        const points = json.data.painPoints?.points || [];
        points.forEach(point => {
            console.log(`Point ${point.id}:`, JSON.stringify(point.customIcon, null, 2));
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

checkData();
