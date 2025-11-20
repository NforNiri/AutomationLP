const { createStrapi } = require('@strapi/strapi');

async function forcePublish() {
    try {
        console.log('🚀 Force publish script...');
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

        // Try direct update
        const updated = await strapi.documents(uid).update({
            documentId: entry.documentId,
            data: {
                publishedAt: new Date()
            }
        });

        console.log('✅ Direct update result:', updated.publishedAt);

        // Verify
        const verified = await strapi.documents(uid).findFirst();
        console.log('\n--- Verification ---');
        console.log('Published At:', verified.publishedAt);
        console.log('Status:', verified.publishedAt ? 'PUBLISHED' : 'DRAFT');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
        process.exit(1);
    }
}

forcePublish();
