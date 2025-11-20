"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { WhyUsSection } from "@/types";

const defaultData: WhyUsSection = {
    title: "Why Choose Code & Core?",
    subtitle: "Stop renting generic tools. Start owning your infrastructure.",
    features: [
        {
            name: "Customization",
            generic: "Limited to what the tool allows",
            us: "100% tailored to your workflow",
        },
        {
            name: "Integration Depth",
            generic: "Surface-level (Zapier/Make wrappers)",
            us: "Deep API integration & database access",
        },
        {
            name: "Maintenance",
            generic: "You fix it when it breaks",
            us: "Fully managed & monitored by us",
        },
        {
            name: "Data Ownership",
            generic: "Locked in their ecosystem",
            us: "You own your data & code",
        },
        {
            name: "ROI",
            generic: "Monthly subscription drain",
            us: "Asset that builds value over time",
        },
    ],
};

export function WhyUs({ data }: { data?: WhyUsSection }) {
    const { title, subtitle, features } = data || defaultData;

    return (
        <section className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {subtitle}
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[768px] w-full">
                        <div className="grid grid-cols-3 gap-4 mb-4 px-4">
                            <div className="font-bold text-slate-400 uppercase tracking-wider text-sm">Feature</div>
                            <div className="font-bold text-slate-400 uppercase tracking-wider text-sm text-center">Generic SaaS Wrappers</div>
                            <div className="font-bold text-core-blue uppercase tracking-wider text-sm text-center">Code & Core Architecture</div>
                        </div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-4 items-center p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
                                >
                                    <div className="font-semibold text-slate-700 dark:text-slate-200">
                                        {feature.name}
                                    </div>

                                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-center">
                                        <X className="w-5 h-5 text-red-400" />
                                        <span>{feature.generic}</span>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 text-white font-medium text-center bg-slate-800/50 py-3 px-4 rounded-lg shadow-sm border border-slate-700">
                                        <Check className="w-5 h-5 text-core-blue" />
                                        <span>{feature.us}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
