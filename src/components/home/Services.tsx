"use client";

import { motion } from "framer-motion";
import { Activity, UserCheck, Stethoscope, HeartPulse, Brain, Home, Syringe, Move, Flame /* Cupping substitute */ } from "lucide-react";

// Placeholder icons mapping
const services = [
    { title: "Back Pain Treatment", icon: Activity, desc: "Expert care for chronic and acute back pain." },
    { title: "Slip Disc Treatment", icon: Move, desc: "Non-surgical spinal decompression therapy." },
    { title: "Cervical Pain", icon: UserCheck, desc: "Relief from neck pain and stiffness." },
    { title: "Knee Pain Therapy", icon: Activity, desc: "Advanced rehab for arthritis and injuries." },
    { title: "Sports Injury Rehab", icon: Activity, desc: "Get back to the game faster and stronger." },
    { title: "Dry Needling", icon: Syringe, desc: "Release trigger points and muscle tension." },
    { title: "Cupping Therapy", icon: Flame, desc: "Improve blood flow and reduce inflammation." },
    { title: "Sciatica Treatment", icon: Activity, desc: "Targeted therapy for nerve pain relief." },
    { title: "Post Surgery Rehab", icon: Stethoscope, desc: "Comprehensive recovery programs." },
    { title: "Neurological Rehab", icon: Brain, desc: "Stroke, Parmesan's, and nerve disorders." },
    { title: "Home Visit", icon: Home, desc: "Professional physiotherapy at your doorstep." },
    { title: "Spine Rehabilitation", icon: Activity, desc: "Specialized care for spinal health." },
];

export function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Comprehensive Physiotherapy Solutions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        We offer a wide range of specialized treatments tailored to your specific condition and recovery goals.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group cursor-pointer"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
