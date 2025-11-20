const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const populateQuery = ctx.query.populate;
            const populate = populateQuery === 'deep' ? 'deep' : '*';

            const entity = await strapi.documents('api::landing-page.landing-page').findFirst({
                populate: populate,
            });

            if (!entity) {
                return ctx.notFound('Landing page not found');
            }

            return { data: entity };
        } catch (error) {
            strapi.log.error('Error fetching landing page:', error);
            return ctx.badRequest('Failed to fetch landing page');
        }
    },
}));
