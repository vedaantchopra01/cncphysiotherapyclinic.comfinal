import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | CnC Physiotherapy & Spine Clinic",
    description: "Learn about CnC Physiotherapy, our mission, and our expert team of physiotherapists in Noida.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">About CnC Physiotherapy</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-6">
                            Leading Physiotherapy & <br />Spine Clinic in Noida
                        </h1>
                    </div>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-400">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 mb-8">
                            CnC Physiotherapy & Spine Clinic is a premier healthcare facility dedicated to restoring movement and improving the quality of life for our patients.
                        </p>
                        <p className="mb-6">
                            Established with a vision to provide world-class physiotherapy services, we specialize in treating orthopedic conditions, neurological disorders, sports injuries, and post-surgical rehabilitation. Our clinics are equipped with state-of-the-art technology and staffed by highly experienced professionals.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Our Mission</h3>
                        <p className="mb-8">
                            To provide personalized, evidence-based, and compassionate care to every patient, helping them return to their active lives as quickly and safely as possible.
                        </p>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm my-12">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 mt-0">Why Choose Us?</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                {[
                                    "Experienced Team of Doctors",
                                    "Advanced Electrotherapy Equipment",
                                    "Manual Therapy Experts",
                                    "Hygienic & Sanitized Clinics",
                                    "Affordable Treatment Plans",
                                    "Convenient Locations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/book-appointment">
                                <Button size="lg" className="px-8 text-lg rounded-full">Book Your Appointment</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
