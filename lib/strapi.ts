import qs from "qs";
import { LandingPageData } from "@/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

export async function getStrapiData(): Promise<LandingPageData | null> {
    try {
        // Check if URL is defined
        if (!STRAPI_URL) {
            console.warn("NEXT_PUBLIC_STRAPI_URL is not defined. Using fallback data.");
            return null;
        }

        const query = qs.stringify({
            populate: {
                hero: { populate: '*' },
                socialProof: { populate: { clients: { populate: { logo: { populate: '*' } } } } },
                useCases: { populate: { cases: { populate: { illustration: { populate: '*' } } } } },
                howItWorks: { populate: { steps: { populate: { image: { populate: '*' } } } } },
                painPoints: { populate: { points: { populate: { customIcon: { populate: '*' } } } } },
                whyUs: { populate: '*' },
                benefits: { populate: '*' },
                pricing: { populate: '*' },
                faq: { populate: '*' },
                cta: { populate: '*' },
            },
        }, {
            encodeValuesOnly: true,
        });

        const res = await fetch(`${STRAPI_URL}/api/landing-page?${query}`, {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            // Log detailed error if available
            const errorText = await res.text();
            console.error(`Failed to fetch Strapi data: ${res.status} ${res.statusText}`, errorText);
            return null;
        }

        const json = await res.json();
        console.log('Strapi response:', JSON.stringify(json).substring(0, 200));

        // Strapi v5 returns data directly, not wrapped in attributes
        return json.data || null;
    } catch (error) {
        console.error("Strapi connection error:", error);
        return null;
    }
}
