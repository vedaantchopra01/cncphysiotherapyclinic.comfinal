"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const doctors = [
    { name: "Dr Rashika Bhatia", role: "Sr. Physiotherapist", exp: "8+ Years", color: "bg-blue-100 text-blue-700" },
    { name: "Dr Rahul Verma", role: "Orthopedic Specialist", exp: "12+ Years", color: "bg-emerald-100 text-emerald-700" },
    { name: "Dr Kunal Arora", role: "Spine Specialist", exp: "10+ Years", color: "bg-purple-100 text-purple-700" },
    { name: "Dr Sumit", role: "Physiotherapist", exp: "5+ Years", color: "bg-blue-100 text-blue-700" },
    { name: "Dr Vivek Sharma", role: "Sports Injury Expert", exp: "9+ Years", color: "bg-orange-100 text-orange-700" },
    { name: "Dr Rohit", role: "Physiotherapist", exp: "4+ Years", color: "bg-blue-100 text-blue-700" },
    { name: "Dr Abhishek Jain", role: "Joint Replacement", exp: "15+ Years", color: "bg-teal-100 text-teal-700" },
    { name: "Dr Sahajpreet", role: "Physiotherapist", exp: "3+ Years", color: "bg-blue-100 text-blue-700" },
];

export function Doctors() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Experts</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mt-2">
                            Meet Our Specialists
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                            Highly qualified doctors and therapists dedicated to your recovery.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {doctors.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[280px] md:min-w-[320px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 snap-center group hover:border-primary/30 transition-all"
                        >
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-gradient-to-t from-slate-900/50 to-transparent">
                                    Image
                                </div>
                                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-bold">4.9</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${doc.color}`}>
                                        {doc.role}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {doc.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Experience: <span className="text-slate-700 dark:text-slate-300 font-medium">{doc.exp}</span>
                                </p>

                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    <Link href="/book-appointment" className="w-full">
                                        <Button size="sm" className="w-full gap-2">
                                            <Calendar className="h-3.5 w-3.5" /> Book
                                        </Button>
                                    </Link>
                                    <Link
                                        href={`https://wa.me/919217807401?text=${encodeURIComponent(`Hi, I want to connect with ${doc.name} and check availability.`)}`}
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <Button size="sm" variant="outline" className="w-full gap-2 text-green-600 hover:text-green-700 hover:bg-green-50">
                                            <MessageCircle className="h-3.5 w-3.5" /> Chat
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
