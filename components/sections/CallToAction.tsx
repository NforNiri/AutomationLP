"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/types";

const defaultData: CTASection = {
    title: "Ready to Automate Your Growth?",
    subtitle: "Stop drowning in busywork. Start scaling your business with intelligent automation.",
    buttonText: "Book Your Free Audit",
    buttonLink: "#contact",
};

export function CallToAction({ data }: { data?: CTASection }) {
    const { title, subtitle, buttonText, buttonLink } = data || defaultData;

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-core-blue to-cyan-500 dark:from-blue-900 dark:to-cyan-900 z-0" />

            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
                    {subtitle}
                </p>

                <Link
                    href={buttonLink}
                    className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300 group"
                >
                    {buttonText}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="mt-6 text-sm text-blue-100 opacity-80">
                    No commitment required. 100% free strategy session.
                </p>
            </div>
        </section>
    );
}
