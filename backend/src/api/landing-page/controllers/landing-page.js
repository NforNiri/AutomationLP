const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
    async find(ctx) {
        strapi.log.info('🔍 Landing Page Controller HIT!');
        try {
            const entity = await strapi.documents('api::landing-page.landing-page').findFirst({
                populate: ctx.query.populate || '*',
            });

            strapi.log.info(`📄 Entity found: ${entity ? 'YES' : 'NO'}`);

            if (!entity) {
                return ctx.notFound('Landing page not found in DB');
            }

            return { data: entity };
        } catch (error) {
            strapi.log.error('❌ Controller Error:', error);
            return ctx.internalServerError(error);
        }
    }
}));
