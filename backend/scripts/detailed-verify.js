const { createStrapi } = require('@strapi/strapi');

async function verify() {
    try {
        console.log('🔍 Detailed Verification Script...\n');
        const strapi = await createStrapi({ distDir: './dist' }).load();

        const uid = 'api::landing-page.landing-page';

        // Try different ways to fetch the data
        console.log('1. BASIC QUERY (no populate):');
        const basic = await strapi.documents(uid).findFirst();
        console.log('   Entry exists?', !!basic);
        console.log('   Document ID:', basic?.documentId);
        console.log('   Has hero (unpopulated)?', !!basic?.hero);

        console.log('\n2. QUERY WITH POPULATE:');
        const populated = await strapi.documents(uid).findFirst({
            populate: '*'
        });
        console.log('   Entry exists?', !!populated);
        console.log('   Has hero (populated)?', !!populated?.hero);
        console.log('   Hero data:', populated?.hero);

        console.log('\n3. QUERY WITH DEEP POPULATE:');
        const deep = await strapi.documents(uid).findFirst({
            populate: 'deep'
        });
        console.log('   Entry exists?', !!deep);
        console.log('   Has hero (deep)?', !!deep?.hero);
        if (deep?.hero) {
            console.log('   Hero title:', deep.hero.title);
        }

        console.log('\n4. RAW DATABASE CHECK:');
        const db = strapi.db.connection;
        const result = await db.raw('SELECT * FROM landing_pages LIMIT 1');
        console.log('   Rows found:', result.length || result[0]?.length || 0);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error(error);
        process.exit(1);
    }
}

verify();
