const { createStrapi } = require('@strapi/strapi');

async function verify() {
    try {
        console.log('🔍 Final Verification Script...\n');
        const strapi = await createStrapi({ distDir: './dist' }).load();

        const uid = 'api::landing-page.landing-page';

        // Check schema
        const schema = strapi.contentTypes[uid];
        console.log('1. SCHEMA CHECK:');
        console.log('   Draft & Publish enabled?', schema.options.draftAndPublish);

        // Check data
        console.log('\n2. DATA CHECK:');
        const entry = await strapi.documents(uid).findFirst();
        console.log('   Entry exists?', !!entry);
        if (entry) {
            console.log('   Document ID:', entry.documentId);
            console.log('   Has hero data?', !!entry.hero);
        }

        // Check permissions
        console.log('\n3. PERMISSIONS CHECK:');
        const publicRole = await strapi.documents('plugin::users-permissions.role').findFirst({
            filters: { type: 'public' },
            populate: ['permissions']
        });

        if (publicRole) {
            const landingPagePerms = publicRole.permissions.filter(p =>
                p.action.includes('landing-page')
            );
            console.log('   Public permissions for landing-page:');
            landingPagePerms.forEach(p => console.log('   -', p.action));

            const hasFindPerm = landingPagePerms.some(p => p.action === 'api::landing-page.landing-page.find');
            console.log('   Has FIND permission?', hasFindPerm);
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

verify();
