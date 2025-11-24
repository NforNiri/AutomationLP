"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Code2, Rocket, LucideIcon } from "lucide-react";
import { HowItWorksSection } from "@/types";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
    "Search": Search,
    "Code2": Code2,
    "Rocket": Rocket,
};

const defaultData: HowItWorksSection = {
    title: "From Chaos to Code in 3 Steps",
    subtitle: "We handle the complexity. You get the results.",
    steps: [
        {
            id: "01",
            title: "The Audit",
            description: "We dive deep into your current workflow to identify bottlenecks and high-ROI automation opportunities.",
            icon: "Search",
        },
        {
            id: "02",
            title: "The Build",
            description: "Our engineers architect and code your custom solution, integrating directly with your existing stack.",
            icon: "Code2",
        },
        {
            id: "03",
            title: "The Launch",
            description: "We deploy your system, train your team, and provide ongoing monitoring to ensure peak performance.",
            icon: "Rocket",
        },
    ],
};

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

export function HowItWorks({ data }: { data?: HowItWorksSection }) {
    const { title, subtitle, steps } = data || defaultData;

    return (
        <section id="process" className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />

                    <div className="grid lg:grid-cols-3 gap-12">
                        {steps.map((step, index) => {
                            const Icon = iconMap[step.icon] || Search;
                            const imageUrl = getImageUrl(step.image);

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center"
                                >
                                    {imageUrl ? (
                                        <div className="w-full aspect-video relative mb-6 rounded-xl overflow-hidden shadow-sm">
                                            <Image
                                                src={imageUrl}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-core-blue dark:text-blue-400 shadow-inner">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    )}

                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-800">
                                        {step.id}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
