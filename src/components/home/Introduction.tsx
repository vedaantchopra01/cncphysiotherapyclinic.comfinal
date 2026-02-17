"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Introduction() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for About Image */}
                            <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                <span className="text-slate-400 font-medium">Clone/Clinic Image</span>
                            </div>
                        </div>
                        {/* Decorative dots/pattern */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            About Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white">
                            Welcome to CnC Physiotherapy & Spine Clinic
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            We are a dedicated team of physiotherapy experts committed to restoring your movement and improving your quality of life. Using advanced techniques and personalized care, we treat the root cause of your pain, not just the symptoms.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {[
                                "Experienced & Certified Therapists",
                                "Advanced Pain Management Equipment",
                                "Personalized Treatment Plans",
                                "Hygienic & Comfortable Environment"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button variant="outline" className="gap-2">
                                    Read More About Us <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
