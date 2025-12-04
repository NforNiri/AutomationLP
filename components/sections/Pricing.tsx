"use client";

import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/types";

const defaultData: PricingSection = {
    title: "Simple, Transparent Pricing",
    subtitle: "No hidden fees. No long-term contracts. Just results.",
    tiers: [
        {
            name: "Starter",
            price: "$2,500",
            description: "Perfect for small businesses looking to automate a single core workflow.",
            features: [
                { text: "1 Custom Automation Workflow" },
                { text: "Weekly Maintenance Check" },
                { text: "Email Support" },
                { text: "Basic Analytics Dashboard" },
            ],
            cta: "Get Started",
            highlight: false,
        },
        {
            name: "Growth",
            price: "$5,000",
            description: "For scaling teams that need comprehensive system integration.",
            features: [
                { text: "3 Custom Automation Workflows" },
                { text: "Daily System Monitoring" },
                { text: "Priority Slack Support" },
                { text: "Advanced Analytics & Reporting" },
                { text: "CRM Integration" },
            ],
            cta: "Most Popular",
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full-scale digital transformation for complex organizations.",
            features: [
                { text: "Unlimited Workflows" },
                { text: "24/7 Real-time Monitoring" },
                { text: "Dedicated Account Manager" },
                { text: "Custom AI Model Training" },
                { text: "SLA Guarantees" },
            ],
            cta: "Contact Sales",
            highlight: false,
        },
    ],
};

export function Pricing({ data }: { data?: PricingSection }) {
    const { title, subtitle, tiers } = data || defaultData;

    return (
        <section id="pricing" className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${tier.highlight
                                ? "bg-white dark:bg-slate-800 shadow-2xl border-2 border-core-blue z-10"
                                : "bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#4169E1] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg z-20 border-[6px] border-[#0B1120]">
                                    Best Value
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline justify-center gap-1 mb-4">
                                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                        {tier.price}
                                    </span>
                                    {tier.price !== "Custom" && (
                                        <span className="text-slate-500 dark:text-slate-400">/mo</span>
                                    )}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 p-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl font-semibold transition-all mt-auto ${tier.highlight
                                    ? "bg-core-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white"
                                    }`}
                            >
                                {tier.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
