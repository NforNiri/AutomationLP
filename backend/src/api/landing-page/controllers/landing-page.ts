
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
    async find(ctx) {
        strapi.log.info('🔍 Landing Page Controller HIT!');
        try {
            // Build proper populate object for deep population
            const entity = await strapi.documents('api::landing-page.landing-page').findFirst({
                populate: {
                    hero: { populate: '*' },
                    socialProof: { populate: { clients: { populate: { logo: { populate: '*' } } } } },
                    useCases: { populate: { cases: { populate: { illustration: { populate: '*' } } } } },
                    painPoints: { populate: { points: { populate: { customIcon: { populate: '*' } } } } },
                    whyUs: { populate: { features: { populate: '*' } } },
                    howItWorks: { populate: { steps: { populate: { image: { populate: '*' } } } } },
                    benefits: { populate: { stats: { populate: '*' } } },
                    pricing: { populate: { tiers: { populate: { features: { populate: '*' } } } } },
                    faq: { populate: { questions: { populate: '*' } } },
                    cta: { populate: '*' },
                },
            });

            strapi.log.info(`📄 Entity found: ${entity ? 'YES' : 'NO'}`);

            if (!entity) {
                return ctx.notFound('Landing page not found in DB');
            }

            return { data: { ...entity, _debug: "Controller Active v2" } };
        } catch (error) {
            strapi.log.error('❌ Controller Error:', error);
            return ctx.internalServerError(error);
        }
    }
}));
