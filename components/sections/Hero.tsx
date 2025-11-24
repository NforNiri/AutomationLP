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
                            {title.split("Manual Work")[0]} <span className="text-core-blue dark:text-electric-cyan"></span>
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
                            {/* Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

                            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl h-full overflow-visible">
                                {/* SVG Canvas for Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full z-[1]" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    {/* Line 1: Top Left Node to Center */}
                                    <motion.path
                                        d="M 15 15 Q 35 30 50 45"
                                        stroke="url(#gradient1)"
                                        strokeWidth="0.5"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    {/* Line 2: Top Right Node to Center */}
                                    <motion.path
                                        d="M 85 15 Q 65 30 50 45"
                                        stroke="url(#gradient2)"
                                        strokeWidth="0.5"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    {/* Line 3: Center to Main Bottom Node */}
                                    <motion.path
                                        d="M 50 55 L 50 70"
                                        stroke="url(#gradient3)"
                                        strokeWidth="0.6"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                                    />
                                    {/* Line 4: Main Bottom to Left Output */}
                                    <motion.path
                                        d="M 50 78 Q 30 84 15 88"
                                        stroke="url(#gradient4)"
                                        strokeWidth="0.4"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 2.8, repeat: Infinity, repeatDelay: 1.7 }}
                                    />
                                    {/* Line 5: Main Bottom to Right Output */}
                                    <motion.path
                                        d="M 50 78 Q 70 84 85 88"
                                        stroke="url(#gradient5)"
                                        strokeWidth="0.4"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 2.9, repeat: Infinity, repeatDelay: 1.7 }}
                                    />

                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                                        </linearGradient>
                                        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                                        </linearGradient>
                                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#d946ef" stopOpacity="1" />
                                        </linearGradient>
                                        <linearGradient id="gradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#d946ef" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                                        </linearGradient>
                                        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#d946ef" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Automation Nodes */}
                                <div className="relative z-[2]">
                                    {/* Top Row - Input Nodes */}
                                    <div className="flex justify-between mb-24">
                                        {/* Email Trigger Node */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                boxShadow: [
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                    "0 0 20px rgba(59, 130, 246, 0.6)",
                                                    "0 0 0px rgba(59, 130, 246, 0)"
                                                ]
                                            }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                                            className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <motion.div
                                                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        </motion.div>

                                        {/* Form Trigger Node */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                boxShadow: [
                                                    "0 0 0px rgba(6, 182, 212, 0)",
                                                    "0 0 20px rgba(6, 182, 212, 0.6)",
                                                    "0 0 0px rgba(6, 182, 212, 0)"
                                                ]
                                            }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                                            className="relative bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-xl shadow-lg"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <motion.div
                                                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Middle - AI Processing Node with Magic */}
                                    <div className="flex justify-center mb-16">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.15, 1],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{ duration: 3, delay: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
                                            className="relative"
                                        >
                                            {/* Magic Particles */}
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                                                    style={{
                                                        top: '50%',
                                                        left: '50%',
                                                    }}
                                                    animate={{
                                                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                                                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
                                                        opacity: [0, 1, 0],
                                                        scale: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay: 1.5 + (i * 0.1),
                                                        repeat: Infinity,
                                                        repeatDelay: 1
                                                    }}
                                                />
                                            ))}

                                            <div className="relative bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600 p-6 rounded-2xl shadow-2xl">
                                                <motion.div
                                                    animate={{
                                                        boxShadow: [
                                                            "0 0 20px rgba(139, 92, 246, 0.3)",
                                                            "0 0 40px rgba(139, 92, 246, 0.8)",
                                                            "0 0 20px rgba(139, 92, 246, 0.3)"
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10"
                                                >
                                                    <Bot className="w-8 h-8 text-white" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Bottom Row - Output Nodes */}
                                    <div className="space-y-8">
                                        {/* Main Output Node - Calendar */}
                                        <div className="flex justify-center">
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: [0, 1, 1, 1],
                                                    opacity: [0, 1, 1, 1],
                                                }}
                                                transition={{ duration: 0.5, delay: 2.2, repeat: Infinity, repeatDelay: 2 }}
                                                className="relative"
                                            >
                                                <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 p-5 rounded-xl shadow-xl">
                                                    <div className="flex items-center gap-3">
                                                        <Calendar className="w-7 h-7 text-white" />
                                                        <div className="space-y-1">
                                                            <div className="h-2 w-20 bg-white/70 rounded-full" />
                                                            <div className="h-2 w-14 bg-white/50 rounded-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: [0, 1.2, 1] }}
                                                    transition={{ duration: 0.4, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
                                                    className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg"
                                                >
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Secondary Output Nodes Row */}
                                        <div className="flex justify-between px-2">
                                            {/* Email Notification Node */}
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: [0, 0, 1],
                                                    opacity: [0, 0, 1],
                                                }}
                                                transition={{ duration: 0.4, delay: 2.8, repeat: Infinity, repeatDelay: 2 }}
                                                className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg shadow-lg"
                                            >
                                                <div className="w-8 h-8 flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                    </svg>
                                                </div>
                                            </motion.div>

                                            {/* CRM Update Node */}
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: [0, 0, 1],
                                                    opacity: [0, 0, 1],
                                                }}
                                                transition={{ duration: 0.4, delay: 2.9, repeat: Infinity, repeatDelay: 2 }}
                                                className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-lg shadow-lg"
                                            >
                                                <div className="w-8 h-8 flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                    </svg>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <motion.div
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600 shadow-lg z-[3]"
                                >
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            className="w-2 h-2 bg-emerald-400 rounded-full"
                                            animate={{ scale: [1, 1.4, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                        <span className="text-xs font-semibold text-slate-200">Automating</span>
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
