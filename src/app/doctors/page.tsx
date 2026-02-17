import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Specialists | CnC Physiotherapy",
    description: "Meet our focused team of physiotherapists and orthopedic consultants in Noida and Ghaziabad.",
};

const doctors = [
    { name: "Dr Rashika Bhatia", role: "Sr. Physiotherapist", exp: "8+ Years", specs: ["Back Pain", "Manual Therapy"], loc: ["Noida Sec 122"] },
    { name: "Dr Sumit", role: "Physiotherapist", exp: "5+ Years", specs: ["Sports Rehab", "Knee Pain"], loc: ["Noida Sec 17"] },
    { name: "Dr Rohit", role: "Physiotherapist", exp: "4+ Years", specs: ["Orthopedic Rehab"], loc: ["Ghaziabad"] },
    { name: "Dr Sahajpreet", role: "Physiotherapist", exp: "3+ Years", specs: ["Post Surgery", "Geriatric Care"], loc: ["Noida Ext"] },
    { name: "Dr Amit", role: "Physiotherapist", exp: "6+ Years", specs: ["Neuro Rehab", "Stroke"], loc: ["Noida Sec 122"] },
    { name: "Dr Shivani", role: "Physiotherapist", exp: "4+ Years", specs: ["Women's Health", "Antenatal"], loc: ["Noida Sec 17"] },
    { name: "Dr Anjali", role: "Physiotherapist", exp: "3+ Years", specs: ["Pediatric Physio"], loc: ["Ghaziabad"] },
    { name: "Dr Rahul Verma", role: "Orthopedic Specialist", exp: "12+ Years", specs: ["Bone Specialist", "Joints"], loc: ["Consultant"] },
    { name: "Dr Kunal Arora", role: "Spine Specialist", exp: "10+ Years", specs: ["Spine Surgery", "Disc Issues"], loc: ["Consultant"] },
    { name: "Dr Vivek Sharma", role: "Sports Injury Expert", exp: "9+ Years", specs: ["Ligament Injury", "Arthroscopy"], loc: ["Consultant"] },
    { name: "Dr Abhishek Jain", role: "Joint Replacement", exp: "15+ Years", specs: ["Knee Replacement", "Hip Issues"], loc: ["Consultant"] },
];

export default function DoctorsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Team</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Meet the Experts
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Highly qualified physiotherapists and specialist consultants dedicated to your well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group"
                        >
                            <div className="relative aspect-[4/5] bg-slate-200 dark:bg-slate-800">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    Doctor Image
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-950/90 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> 4.9
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{doc.role}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {doc.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                                    <span className="font-medium text-slate-700 dark:text-slate-300">{doc.exp}</span> Experience
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {doc.specs.map((spec, i) => (
                                        <span key={i} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <Link href="/book-appointment" className="w-full">
                                        <Button size="sm" className="w-full">Book</Button>
                                    </Link>
                                    <Button size="sm" variant="outline" className="w-full text-green-600 hover:text-green-700 hover:bg-green-50">
                                        WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
