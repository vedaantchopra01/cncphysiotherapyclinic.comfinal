"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("This is a demo login. No backend connected yet.");
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-20 pb-20 flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="w-full max-w-md p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    <div className="p-8 text-center bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 transform -translate-x-10 -translate-y-10" />

                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold font-heading mb-2">Welcome Back</h1>
                            <p className="text-slate-400 text-sm">Patient Portal Login</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium pl-1">Email or Phone</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="patient@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium pl-1">Password</label>
                                    <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                                    <input
                                        type="password"
                                        required
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <Button type="submit" disabled={loading} className="w-full h-12 text-lg mt-2">
                                {loading ? "Verifying..." : "Secure Login"} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-slate-500">
                            New Patient? <Link href="/book-appointment" className="text-primary font-bold hover:underline">Register Here</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
