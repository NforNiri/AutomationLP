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

        const res = await fetch(`${STRAPI_URL}/api/landing-page?populate=deep`, {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            // Log detailed error if available
            const errorText = await res.text();
            console.error(`Failed to fetch Strapi data: ${res.status} ${res.statusText}`, errorText);
            return null;
        }

        const json = await res.json();
        return json.data.attributes;
    } catch (error) {
        console.error("Strapi connection error:", error);
        return null;
    }
}
