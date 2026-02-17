import { Activity, UserCheck, Stethoscope, HeartPulse, Brain, Home, Syringe, Move, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | CnC Physiotherapy & Spine Clinic",
    description: "Comprehensive physiotherapy treatments including Back Pain, Slip Disc, Cervical Pain, and Sports Injury Rehab.",
};

const services = [
    { title: "Back Pain Treatment", icon: Activity, desc: "Specialized physiotherapy for chronic back pain, lumbar spondylosis, and postural issues.", details: "Our back pain treatment protocol involves manual therapy, core strengthening, and ergonomic advice to prevent recurrence." },
    { title: "Slip Disc Treatment", icon: Move, desc: "Non-surgical spinal decompression to relieve pressure on herniated discs.", details: "We use advanced traction and mobilization techniques to reduce disc compression and alleviate nerve impingement." },
    { title: "Cervical Pain", icon: UserCheck, desc: "Treatment for neck pain, stiffness, and cervical spondylitis.", details: "Manual therapy and posture correction exercises are used to restore neck mobility and reduce pain." },
    { title: "Knee Pain Therapy", icon: Activity, desc: "Effective rehab for arthritis, ligament injuries, and meniscus tears.", details: "Focus on strengthening quadriceps and improving joint mechanics to reduce load on the knee." },
    { title: "Sports Injury Rehab", icon: Activity, desc: "Expert recovery programs for athletes to return to sport safely.", details: "ACL reconstruction rehab, rotator cuff injuries, and ankle sprains treated with sport-specific protocols." },
    { title: "Dry Needling", icon: Syringe, desc: "Minimally invasive technique to release muscle trigger points.", details: "Looking for instant relief from muscle knots? Dry needling effectively targets deep muscle tension." },
    { title: "Cupping Therapy", icon: Flame, desc: "Ancient therapy to improve blood circulation and reduce inflammation.", details: "Suction cups are used to mobilize blood flow and promote healing in stiff muscle areas." },
    { title: "Sciatica Treatment", icon: Activity, desc: "Targeted exercises to relieve sciatic nerve compression and pain.", details: "Nerve gliding exercises and spinal mobilization to reduce radiating leg pain." },
    { title: "Post Surgery Rehab", icon: Stethoscope, desc: "Comprehensive rehabilitation after orthopedic surgeries.", details: "Structured protocols for joint replacements and fracture fixations to restore full function." },
    { title: "Neurological Rehab", icon: Brain, desc: "Care for Stroke, Parkinson's, and other neurological conditions.", details: "Neuro-developmental techniques (NDT) to improve balance, coordination, and motor control." },
    { title: "Home Visit Physiotherapy", icon: Home, desc: "Professional physiotherapy services at the comfort of your home.", details: "Ideal for bedridden patients or those with severe mobility restrictions." },
    { title: "Spine Rehabilitation", icon: Activity, desc: "Holistic care for all spine-related disorders and deformities.", details: "Correction of scoliosis, kyphosis, and other spinal alignment issues through exercise therapy." },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Specialized Treatments
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        We combined advanced technology with manual therapy to deliver the best results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group"
                        >
                            <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                                {service.desc}
                            </p>
                            <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                                {service.details}
                            </p>

                            <Link href="/book-appointment">
                                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 font-semibold gap-2">
                                    Book Session <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
