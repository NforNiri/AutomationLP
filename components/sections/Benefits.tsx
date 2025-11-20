"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Zap, LucideIcon } from "lucide-react";
import { BenefitsSection } from "@/types";

const iconMap: Record<string, LucideIcon> = {
    "TrendingUp": TrendingUp,
    "Clock": Clock,
    "Shield": Shield,
    "Zap": Zap,
};

const defaultData: BenefitsSection = {
    title: "Outcomes, not just software.",
    subtitle: "We don't sell tools. We sell time, efficiency, and peace of mind.",
    stats: [
        {
            id: 1,
            value: "20+",
            label: "Hours Saved / Week",
            description: "Per employee, allowing your team to focus on high-value tasks.",
            icon: "Clock",
        },
        {
            id: 2,
            value: "300%",
            label: "ROI in 90 Days",
            description: "Our systems pay for themselves by reducing labor costs and increasing throughput.",
            icon: "TrendingUp",
        },
        {
            id: 3,
            value: "0",
            label: "Data Errors",
            description: "Eliminate human error from your critical data entry workflows.",
            icon: "Shield",
        },
        {
            id: 4,
            value: "24/7",
            label: "System Uptime",
            description: "Your automation runs while you sleep, ensuring business continuity.",
            icon: "Zap",
        },
    ],
};

export function Benefits({ data }: { data?: BenefitsSection }) {
    const { title, subtitle, stats } = data || defaultData;

    return (
        <section className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = iconMap[stat.icon] || TrendingUp;
                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-core-blue dark:text-electric-cyan" />
                                </div>

                                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                    {stat.value}
                                </h3>

                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
                                    {stat.label}
                                </p>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
