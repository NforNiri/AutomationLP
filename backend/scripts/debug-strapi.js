const { createStrapi } = require('@strapi/strapi');

async function debug() {
    try {
        console.log('--- Debugging Strapi ---');
        // Initialize Strapi v5
        const strapi = await createStrapi({ distDir: './dist' }).load();

        const uid = 'api::landing-page.landing-page';
        console.log(`\nChecking data for ${uid}...`);

        const entry = await strapi.documents(uid).findFirst();
        if (entry) {
            console.log('Entry Found. ID:', entry.documentId);
            console.log('Current Published At:', entry.publishedAt);

            if (!entry.publishedAt) {
                console.log('⚠️ Entry is NOT published. Publishing now...');
                await strapi.documents(uid).publish({
                    documentId: entry.documentId,
                });
                console.log('✅ Entry Published!');
            } else {
                console.log('✅ Entry is already published.');
            }
        } else {
            console.error(`\n❌ Entry NOT FOUND!`);
        }

        process.exit(0);
    } catch (error) {
        console.error('Debug Error:', error);
        process.exit(1);
    }
}

debug();
