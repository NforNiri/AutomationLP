"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Calendar } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/types";

const defaultData: HeroSection = {
    title: "Stop Losing Revenue to Manual Work",
    subtitle: "We build custom AI automation systems that handle your busywork—so you can focus on closing deals and growing your business.",
    ctaText: "Book Your Audit",
    ctaLink: "#contact",
    secondaryCtaText: "See How It Works",
    secondaryCtaLink: "#process",
    badgeText: "Accepting New Clients for Q4",
};

export function Hero({ data }: { data?: HeroSection }) {
    const { title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, badgeText } = data || defaultData;

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-core-blue dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            {badgeText}
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            {title.split("Manual Work")[0]} <span className="text-core-blue dark:text-electric-cyan">Manual Work</span>
                        </h1>

                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={ctaLink}
                                className="inline-flex justify-center items-center gap-2 bg-core-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href={secondaryCtaLink}
                                className="inline-flex justify-center items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 px-8 py-4 rounded-xl text-lg font-medium transition-all"
                            >
                                {secondaryCtaText}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Animated Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                            {/* Abstract Container */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl rotate-3 opacity-50 blur-2xl" />

                            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-center overflow-hidden">
                                {/* Animated Loop Simulation */}
                                <div className="space-y-6">
                                    {/* Step 1: Bot Action */}
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50"
                                    >
                                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                                            <Bot className="w-6 h-6 text-core-blue dark:text-blue-400" />
                                        </div>
                                        <div className="h-2 w-32 bg-blue-200 dark:bg-blue-800 rounded-full" />
                                    </motion.div>

                                    {/* Connector */}
                                    <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-700 mx-8" />

                                    {/* Step 2: Calendar Booking */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.02, 1],
                                            borderColor: ["rgba(34, 211, 238, 0)", "rgba(34, 211, 238, 0.5)", "rgba(34, 211, 238, 0)"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 border border-transparent"
                                    >
                                        <div className="p-2 bg-cyan-100 dark:bg-cyan-800 rounded-lg">
                                            <Calendar className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-cyan-200 dark:bg-cyan-800 rounded-full" />
                                            <div className="h-2 w-16 bg-cyan-100 dark:bg-cyan-900 rounded-full" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-8 right-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">System Active</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
