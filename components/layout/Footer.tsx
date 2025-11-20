"use client";

import * as React from "react";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-core-blue rounded-md flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-sm" />
                            </div>
                            <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                                The Nexus Node
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                            Demystifying AI for SMBs. We build the operational backbone for modern businesses.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-core-blue transition-colors">About</Link></li>
                            <li><Link href="#services" className="hover:text-core-blue transition-colors">Services</Link></li>
                            <li><Link href="#results" className="hover:text-core-blue transition-colors">Case Studies</Link></li>
                            <li><Link href="#contact" className="hover:text-core-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white dark:bg-slate-900 rounded-full text-slate-500 hover:text-core-blue transition-colors shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white dark:bg-slate-900 rounded-full text-slate-500 hover:text-core-blue transition-colors shadow-sm">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © {new Date().getFullYear()} Code and Core Automations. All rights reserved.
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1">
                        Made with Intelligence
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
