const { createStrapi } = require('@strapi/strapi');

async function checkRoutes() {
    try {
        console.log('🔍 Checking Registered Routes...\n');
        const strapi = await createStrapi({ distDir: './dist' }).load();

        console.log('Available routes:');
        const routes = strapi.server.router.stack
            .map(r => r.path)
            .filter(p => p && p.includes('landing-page'));

        console.log('Landing page routes:', routes);

        // Also check all API routes
        const apiRoutes = strapi.server.router.stack
            .map(r => r.path)
            .filter(p => p && p.includes('/api/'));

        console.log('\nAll /api/ routes:');
        apiRoutes.forEach(r => console.log('  -', r));

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

checkRoutes();
