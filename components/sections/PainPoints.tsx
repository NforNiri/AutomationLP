"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Check } from "lucide-react";
import { PainPointsSection } from "@/types";

const defaultData: PainPointsSection = {
    title: "You are the bottleneck.",
    subtitle: "Your manual processes are slowing down your growth.",
    points: [
        {
            id: 1,
            question: "Do you hate data entry?",
            solution: "We automate it completely. No more copy-pasting between spreadsheets.",
        },
        {
            id: 2,
            question: "Leads going cold?",
            solution: "Instant AI responses ensure you never miss a potential client again.",
        },
        {
            id: 3,
            question: "Drowning in emails?",
            solution: "Our systems categorize, draft, and even reply to routine emails for you.",
        },
        {
            id: 4,
            question: "Messy CRM data?",
            solution: "We clean and standardize your data automatically as it comes in.",
        },
    ],
};

export function PainPoints({ data }: { data?: PainPointsSection }) {
    const { title, subtitle, points } = data || defaultData;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title.split("bottleneck")[0]} <span className="text-red-500">bottleneck</span>.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((item) => (
                        <PainPointCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PainPointCard({ item }: { item: { question: string; solution: string } }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className="relative h-64 cursor-pointer perspective-1000"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)} // Mobile support
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden w-full h-full bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 text-red-500">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.question}
                    </h3>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden w-full h-full bg-core-blue/90 backdrop-blur-lg border border-blue-400 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white">
                        <Check className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-white">
                        {item.solution}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
