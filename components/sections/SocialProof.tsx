"use client";

import * as React from "react";
import { SocialProofSection } from "@/types";

const defaultData: SocialProofSection = {
    title: "Trusted by businesses like yours",
    clients: [
        { name: "TechFlow Systems" },
        { name: "Apex Logistics" },
        { name: "Modern Realty" },
        { name: "Growth Partners" },
        { name: "Elevate Commerce" },
        { name: "DataSphere" },
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
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex items-center justify-center p-4 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                        >
                            <div className="h-8 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded px-4 bg-slate-50 dark:bg-slate-800/50 w-full">
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
