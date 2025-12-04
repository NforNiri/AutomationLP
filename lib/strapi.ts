import qs from "qs";
import { LandingPageData } from "@/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

export async function getStrapiData(): Promise<LandingPageData | null> {
    try {
        const query = qs.stringify({
            populate: "deep",
        });

        const url = `${STRAPI_URL}/api/landing-page?${query}`;
        console.log("Fetching Strapi data from:", url);

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            cache: "no-store", // Ensure fresh data for debugging
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
