"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do you offer home visit physiotherapy?",
        answer: "Yes, we provide home physiotherapy services for elderly patients and those with severe mobility issues. Our expert physiotherapists carry necessary equipment for effective treatment at home."
    },
    {
        question: "How long is a typical session?",
        answer: "A standard physiotherapy session lasts between 45 to 60 minutes, depending on the condition and treatment plan required."
    },
    {
        question: "Do I need a doctor's referral?",
        answer: "No, you do not strictly need a referral. Our qualified physiotherapists can assess your condition and begin treatment. However, if you have recent X-rays or MRI reports, please bring them along."
    },
    {
        question: "Are you open on Sundays?",
        answer: "Yes, our clinics are operational on Sundays by appointment. Please call ahead to schedule your visit."
    },
    {
        question: "Do you treat post-surgery cases?",
        answer: "Absolutely. We specialize in post-operative rehabilitation for knee replacement, hip replacement, ligament surgeries (ACL), and spine surgeries."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-4">
                        Common queries about our services and treatments.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
                        >
                            <div className="p-6 flex items-center justify-between gap-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {faq.question}
                                </h3>
                                <div className={cn("p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors", openIndex === index ? "text-primary bg-primary/10" : "text-slate-500")}>
                                    {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                                            {faq.answer}
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
