const { createStrapi } = require('@strapi/strapi');

async function verifyDb() {
    try {
        // Initialize Strapi
        const app = await createStrapi({ distDir: './dist' }).load();

        console.log('Strapi loaded. Querying Entity Service...');

        const landingPage = await app.entityService.findMany('api::landing-page.landing-page', {
            populate: {
                howItWorks: {
                    populate: {
                        steps: {
                            populate: {
                                image: true
                            }
                        }
                    }
                },
                painPoints: {
                    populate: {
                        points: {
                            populate: {
                                customIcon: true
                            }
                        }
                    }
                }
            }
        });

        console.log('--- How It Works (DB) ---');
        if (landingPage.howItWorks?.steps) {
            landingPage.howItWorks.steps.forEach(step => {
                console.log(`Step ${step.id}: Image ID = ${step.image?.id}, URL = ${step.image?.url}`);
            });
        }

        console.log('\n--- Pain Points (DB) ---');
        if (landingPage.painPoints?.points) {
            landingPage.painPoints.points.forEach(point => {
                console.log(`Point ${point.id}: Icon ID = ${point.customIcon?.id}, URL = ${point.customIcon?.url}`);
            });
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

verifyDb();
