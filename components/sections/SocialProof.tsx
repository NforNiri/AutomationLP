"use client";

import Image from "next/image";
import { SocialProofSection } from "@/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Helper to get image URL from Strapi media object or static path
function getImageUrl(logo?: string | { url?: string }): string | null {
    if (!logo) return null;

    // If it's already a string (static path or full URL), return it
    if (typeof logo === 'string') {
        // If it starts with http, it's already a full URL
        if (logo.startsWith('http')) return logo;
        // If it starts with /, it's a Strapi path, prepend STRAPI_URL
        if (logo.startsWith('/')) return `${STRAPI_URL}${logo}`;
        // Otherwise it's a relative static path
        return logo;
    }

    // If it's a Strapi media object, extract the URL
    if (logo && typeof logo === 'object' && logo.url) {
        return logo.url.startsWith('http') ? logo.url : `${STRAPI_URL}${logo.url}`;
    }

    return null;
}

// Helper to generate logo path from client name
function generateLogoPath(clientName: string): string {
    // Convert client name to filename format: "TechFlow Systems" -> "techflow-systems.png"
    const filename = clientName.toLowerCase().replace(/\s+/g, '-');
    return `/images/logos/${filename}.png`;
}

const defaultData: SocialProofSection = {
    title: "Trusted by businesses like yours",
    clients: [
        { name: "TechFlow Systems", logo: "/images/logos/techflow-systems.png" },
        { name: "Apex Logistics", logo: "/images/logos/apex-logistics.png" },
        { name: "Modern Realty", logo: "/images/logos/modern-realty.png" },
        { name: "Growth Partners", logo: "/images/logos/growth-partners.png" },
        { name: "Elevate Commerce", logo: "/images/logos/elevate-commerce.png" },
        { name: "DataSphere", logo: "/images/logos/datasphere.png" },
    ],
};

export function SocialProof({ data }: { data?: SocialProofSection }) {
    const { title, clients } = data || defaultData;

    return (
        <section className="py-12 border-b border-slate-800 bg-void-navy/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-wider">
                    {title}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {clients.map((client, index) => {
                        // Try to get logo URL from Strapi, otherwise generate from name
                        const logoUrl = getImageUrl(client.logo) || generateLogoPath(client.name);

                        return (
                            <div
                                key={client.name || index}
                                className="flex items-center justify-center p-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logoUrl}
                                    alt={client.name}
                                    width={120}
                                    height={40}
                                    className="object-contain h-10 w-auto"
                                    unoptimized
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
