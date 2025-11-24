
const { createStrapi } = require('@strapi/strapi');

async function listRoutes() {
    try {
        const strapi = createStrapi({ distDir: './dist' });
        await strapi.load();

        const routes = strapi.server.router.stack;

        console.log('--- Registered Routes ---');
        routes.forEach(layer => {
            if (layer.route) {
                const path = layer.route.path;
                const methods = Object.keys(layer.route.methods).join(', ').toUpperCase();
                if (path.includes('landing-page')) {
                    console.log(`${methods} ${path}`);
                }
            }
        });
        console.log('-------------------------');

    } catch (error) {
        console.error('Error listing routes:', error);
    } finally {
        process.exit(0);
    }
}

listRoutes();
