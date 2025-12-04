// @ts-nocheck
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::landing-page.landing-page', ({ strapi }) => ({
    async find(params) {
        const entity = await strapi.documents('api::landing-page.landing-page').findFirst({
            ...params,
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
            }
        });
        return { ...entity, _debug_service: "Service Active" };
    }
}));
