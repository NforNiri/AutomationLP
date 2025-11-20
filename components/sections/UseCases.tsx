"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Truck, ShoppingBag, MessageSquare, Clock, CheckCircle2, LucideIcon } from "lucide-react";
import { UseCasesSection } from "@/types";

const iconMap: Record<string, LucideIcon> = {
    "Building2": Building2,
    "Truck": Truck,
    "ShoppingBag": ShoppingBag,
    "MessageSquare": MessageSquare,
};

const defaultData: UseCasesSection = {
    title: "Built for Your Industry",
    subtitle: "We design specific automation architectures for high-touch industries.",
    cases: [
        {
            id: "real-estate",
            label: "Real Estate",
            icon: "Building2",
            title: "Lead Response Automation",
            description: "Instantly engage leads from Zillow, Realtor.com, and your website. Qualify them via SMS and book appointments automatically.",
            stat: "30s Response Time",
        },
        {
            id: "logistics",
            label: "Logistics",
            icon: "Truck",
            title: "Dispatch & Tracking",
            description: "Automate driver notifications, route updates, and customer delivery alerts. Reduce manual check-in calls by 90%.",
            stat: "90% Less Admin",
        },
        {
            id: "ecommerce",
            label: "E-commerce",
            icon: "ShoppingBag",
            title: "Customer Support AI",
            description: "Handle returns, order status inquiries, and product questions 24/7 without hiring more support staff.",
            stat: "24/7 Coverage",
        },
    ],
};

export function UseCases({ data }: { data?: UseCasesSection }) {
    const { title, subtitle, cases } = data || defaultData;
    const [activeTab, setActiveTab] = React.useState(cases[0]?.id);

    if (!cases || cases.length === 0) return null;

    return (
        <section id="services" className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title.split("Your Industry")[0]} <span className="text-core-blue dark:text-electric-cyan">Your Industry</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Tabs Navigation */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {cases.map((tab) => {
                            const Icon = iconMap[tab.icon] || MessageSquare;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${isActive
                                        ? "bg-white dark:bg-slate-800 shadow-lg border-l-4 border-core-blue"
                                        : "hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                                        }`}
                                >
                                    <div
                                        className={`p-2 rounded-lg ${isActive
                                            ? "bg-blue-100 dark:bg-blue-900/30 text-core-blue"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                                            }`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className={`font-semibold ${isActive ? "text-slate-900 dark:text-white" : ""}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700 h-full relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {cases.map((tab) => (
                                    activeTab === tab.id && (
                                        <motion.div
                                            key={tab.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col justify-center"
                                        >
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    Verified Scenario
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                                {tab.title}
                                            </h3>

                                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                                {tab.description}
                                            </p>

                                            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                                        <Clock className="w-6 h-6 text-core-blue" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400">Impact</p>
                                                        <p className="text-xl font-bold text-slate-900 dark:text-white">{tab.stat}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
