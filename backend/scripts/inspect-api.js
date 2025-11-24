
const { createStrapi } = require('@strapi/strapi');

async function inspectApi() {
    try {
        const strapi = createStrapi({ distDir: './dist' });
        await strapi.load();

        console.log('--- APIs ---');
        console.log(Object.keys(strapi.api));

        if (strapi.api['landing-page']) {
            console.log('--- Landing Page API ---');
            // Routes can be an object or a function
            console.log('Routes:', JSON.stringify(strapi.api['landing-page'].routes, null, 2));
            console.log('Controllers:', Object.keys(strapi.api['landing-page'].controllers));
        } else {
            console.log('❌ landing-page API NOT FOUND');
        }
    } catch (e) {
        console.error(e);
    } finally {
        process.exit(0);
    }
}
inspectApi();
