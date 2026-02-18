"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Founder() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-900">
                            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-medium text-lg">
                                Dr. Abhishek Chopra Image
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[180px]">
                            <p className="text-4xl font-bold font-heading mb-1">25+</p>
                            <p className="text-sm font-medium opacity-90">Years of Clinical Excellence</p>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Meet the Founder</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
                            Dr. Abhishek Chopra
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 italic">
                            &quot;From a single room clinic to 6 premier rehabilitation centers across NCR, our journey has been fueled by one mission: Pain-Free India.&quot;
                        </p>

                        <div className="prose prose-slate dark:prose-invert">
                            <p>
                                Dr. Abhishek Chopra is a visionary in the field of physiotherapy with over 25 years of extensive experience.  Formerly the **Head of Department at BHEL**, he has pioneered advanced manual therapy techniques and structural integration in North India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 dark:bg-slate-900 text-primary rounded-lg shrink-0"><GraduationCap className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Qualifications</h4>
                                    <p className="text-sm text-slate-500">MPT (Ortho), BPT, CMT</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 dark:bg-slate-900 text-primary rounded-lg shrink-0"><Briefcase className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Former HOD</h4>
                                    <p className="text-sm text-slate-500">BHEL Hospital</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 dark:bg-slate-900 text-primary rounded-lg shrink-0"><Award className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Awards</h4>
                                    <p className="text-sm text-slate-500">Best Physio in NCR (2023)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 dark:bg-slate-900 text-primary rounded-lg shrink-0"><TrendingUp className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Growth</h4>
                                    <p className="text-sm text-slate-500">6+ Centers in NCR</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="/doctors">
                                <Button variant="default" size="lg" className="rounded-full px-8">Read Full Profile</Button>
                            </Link>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
