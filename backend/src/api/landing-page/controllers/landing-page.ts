
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
    async find(ctx) {
        strapi.log.info('🔍 Landing Page Controller HIT!');
        try {
            // Build proper populate object for deep population
            const entity = await strapi.documents('api::landing-page.landing-page').findFirst({
                populate: {
                    hero: true,
                    socialProof: { populate: { clients: true } },
                    useCases: { populate: { cases: true } },
                    painPoints: { populate: { points: true } },
                    whyUs: { populate: { features: true } },
                    howItWorks: { populate: { steps: true } },
                    benefits: { populate: { stats: true } },
                    pricing: { populate: { tiers: { populate: { features: true } } } },
                    faq: { populate: { questions: true } },
                    cta: true,
                },
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
