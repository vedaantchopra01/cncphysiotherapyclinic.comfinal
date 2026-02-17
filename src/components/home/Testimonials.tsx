"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
    {
        name: "Rajesh Kumar",
        treatment: "Slip Disc Recovery",
        rating: 5,
        text: "I was suffering from severe slip disc pain for 6 months. After just 10 sessions at CnC Physiotherapy, I am 90% pain-free. Dr. Rashika is truly an expert.",
    },
    {
        name: "Sunita Sharma",
        treatment: "Knee Replacement Rehab",
        rating: 5,
        text: "Excellent post-surgery rehabilitation. The staff is very caring and professional. Highly recommended for any orthopedic issues.",
    },
    {
        name: "Amit Patel",
        treatment: "Sports Injury",
        rating: 5,
        text: "Best sports physio clinic in Noida. Got back to playing cricket within 4 weeks of my ligament injury. Thanks to Dr. Vivek.",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-[1]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-[1]" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">
                        Patient Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6">
                        Stories of Recovery
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="bg-white text-primary p-3 rounded-full">
                                    <Quote className="h-8 w-8" />
                                </div>
                            </div>

                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(reviews[current].rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                                &quot;{reviews[current].text}&quot;
                            </blockquote>

                            <div>
                                <cite className="not-italic text-lg font-bold block mb-1">
                                    {reviews[current].name}
                                </cite>
                                <span className="text-blue-100 text-sm">
                                    {reviews[current].treatment}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Button size="icon" variant="ghost" onClick={prev} className="hover:bg-white/20 text-white hover:text-white rounded-full">
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={next} className="hover:bg-white/20 text-white hover:text-white rounded-full">
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
