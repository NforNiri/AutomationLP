"use client";

import { Building2, Truck, ShoppingBag, ArrowRight, LucideIcon } from "lucide-react";
import { UseCasesSection } from "@/types";
import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Helper to get image URL from Strapi media object or static path
function getImageUrl(image?: string | { url?: string }): string | null {
    if (!image) return null;

    // If it's already a string (static path or full URL), return it
    if (typeof image === 'string') {
        if (image.startsWith('http')) return image;
        if (image.startsWith('/')) return `${STRAPI_URL}${image}`;
        return image;
    }

    // If it's a Strapi media object, extract the URL
    if (image && typeof image === 'object' && image.url) {
        return image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
    }

    return null;
}

// Helper to generate static image path from label
function generateImagePath(label: string): string {
    const filename = label.toLowerCase().replace(/\s+/g, '-');
    return `/images/use-cases/${filename}.png`;
}

const iconMap: Record<string, LucideIcon> = {
    Home: Building2,
    Truck: Truck,
    ShoppingCart: ShoppingBag,
};

const defaultData: UseCasesSection = {
    title: "Built for Your Industry",
    subtitle: "See how businesses like yours are saving hours every day",
    cases: [
        {
            id: "real-estate",
            label: "Real Estate",
            title: "Automated Lead Qualification",
            description: "Voice AI calls prospects, answers questions, and books viewings—while you focus on closings.",
            stat: "12+ hours saved per week",
            icon: "Home"
        },
        {
            id: "logistics",
            label: "Logistics",
            title: "Smart Dispatch System",
            description: "AI routes deliveries, updates customers, and handles driver coordination automatically.",
            stat: "30% faster deliveries",
            icon: "Truck"
        },
        {
            id: "ecommerce",
            label: "E-commerce",
            title: "Order Management Bot",
            description: "Automate order confirmations, shipping updates, and customer inquiries across channels.",
            stat: "85% support automation",
            icon: "ShoppingCart"
        }
    ]
};

export function UseCases({ data }: { data?: UseCasesSection }) {
    const { title, subtitle, cases } = data || defaultData;

    return (
        <section id="use-cases" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((useCase) => {
                        const Icon = iconMap[useCase.icon] || Building2;

                        // Check if we have an image (either from Strapi or static fallback)
                        const strapiImage = (useCase as any).illustration;
                        // Try Strapi URL first, then fall back to local static path based on label
                        const imageUrl = getImageUrl(strapiImage) || generateImagePath(useCase.label);

                        return (
                            <div
                                key={useCase.id || useCase.label}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon className="w-24 h-24 text-core-blue" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-core-blue dark:text-blue-400" />
                                    </div>

                                    {imageUrl && (
                                        <div className="mb-6 rounded-xl overflow-hidden aspect-video relative">
                                            <Image
                                                src={imageUrl}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-xs font-medium text-slate-600 dark:text-slate-300 mb-4">
                                        {useCase.label}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {useCase.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                                        {useCase.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        {useCase.stat}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
