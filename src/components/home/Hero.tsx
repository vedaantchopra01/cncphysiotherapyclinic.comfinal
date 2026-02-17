"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star, Award, ShieldCheck, Clock, Activity } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const trustBadges = [
    { icon: Star, text: "5-Star Rated Clinic" },
    { icon: Award, text: "Advanced Equipment" },
    { icon: ShieldCheck, text: "Certified Experts" },
    { icon: Clock, text: "Same Day Relief" },
];

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // 3D Tilt Effect Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 -z-20" />

            {/* Animated blobs/shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Accepting New Patients</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
                        CnC Physiotherapy & <br />
                        <span className="text-primary">Spine Clinic</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        Restore Movement. Relieve Pain. Rebuild Life. <br />
                        Premium physiotherapy and spine care services in Noida & Ghaziabad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/book-appointment">
                            <Button size="lg" className="text-lg px-8 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <a href="https://wa.me/919217807401" target="_blank">
                            <Button size="lg" variant="outline" className="text-lg px-8 border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                                <MessageCircle className="mr-2 h-5 w-5 text-green-500" /> WhatsApp Now
                            </Button>
                        </a>
                    </div>

                    {/* Home Visit Badge */}
                    <div className="inline-block mt-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-sm font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                            <Activity className="h-4 w-4" /> Free Consultation at Home Available
                        </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex flex-col items-center text-center gap-2"
                            >
                                <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-primary">
                                    <badge.icon className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{badge.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Image/Visual Content 3D */}
                <div className="relative hidden lg:block perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform-gpu"
                    >
                        {/* Placeholder for Doctor/Patient Image */}
                        <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                            <span className="text-lg font-medium">Modern Physiotherapy Clinic</span>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-8 left-8 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-4"
                            style={{ translateZ: "50px" }}
                        >
                            <div className="bg-green-100 text-green-600 p-3 rounded-full">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Recovery Rate</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">98% Success</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Background Decor */}
                    <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-secondary/20 rounded-2xl -z-10" />
                </div>
            </div>
        </section>
    );
}
