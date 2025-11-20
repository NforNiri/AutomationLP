"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQSection } from "@/types";

const defaultData: FAQSection = {
    title: "Common Questions",
    questions: [
        {
            question: "How is this different from Zapier?",
            answer: "Zapier is a connector tool. We build custom software architecture. While we may use Zapier for simple triggers, our core value is in writing custom code (Python/Node.js) that handles complex logic, database management, and error handling that Zapier simply cannot do.",
        },
        {
            question: "Do I own the code?",
            answer: "Yes. Unlike SaaS subscriptions where you rent the software, you own the automation systems we build for you. We provide full documentation and repository access upon handover.",
        },
        {
            question: "What if an API changes?",
            answer: "We offer ongoing maintenance packages to monitor and update your automations. If an API breaks, our monitoring systems alert us immediately, and we fix it—often before you even notice.",
        },
        {
            question: "How long does it take to build?",
            answer: "Most custom automation projects are deployed within 2-4 weeks. We start with a rapid audit and prototype phase so you can see value quickly.",
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We follow industry-standard security practices. We don't store your customer data on our servers; we build pipes that move data securely between your own accounts (e.g., your CRM to your Database).",
        },
    ],
};

export function FAQ({ data }: { data?: FAQSection }) {
    const { title, questions } = data || defaultData;
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-transparent relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">
                                    {item.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-core-blue text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
