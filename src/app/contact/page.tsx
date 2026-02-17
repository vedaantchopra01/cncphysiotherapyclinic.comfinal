import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | CnC Physiotherapy & Spine Clinic",
    description: "Get in touch with CnC Physiotherapy for appointments and inquiries. Clinics in Noida and Ghaziabad.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Contact Information
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Have questions? We are here to help you. Reach out to us via phone, email, or visit our centers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                            <p className="text-slate-500 mb-4">Call us for appointments or queries.</p>
                            <div className="space-y-2">
                                <a href="tel:01203137252" className="block text-lg font-medium hover:text-primary">0120-3137252</a>
                                <a href="tel:919217807401" className="block text-lg font-medium hover:text-primary">+91 92178 07401</a>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                                <Mail className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-slate-500 mb-4">Send us your reports or queries.</p>
                            <a href="mailto:info@cncphysio.com" className="block text-lg font-medium hover:text-secondary">info@cncphysio.com</a>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                            <p className="text-slate-500 mb-4">Available 7 days a week.</p>
                            <p className="text-lg font-medium">9:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                    {/* Quick Msg Form (Simplified) */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none" placeholder="Inquiry about..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full h-12 text-lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
