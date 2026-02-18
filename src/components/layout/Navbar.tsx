"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-2 dark:bg-slate-950/90"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            {/* Placeholder Icon or Logo Image */}
                            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
                                C
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={cn("text-xl font-bold font-heading leading-none", isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white lg:text-slate-900")}>
                                CnC <span className="text-primary">Physio</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                Physiotherapy & Spine Clinic
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative group",
                                    pathname === link.href
                                        ? "text-primary"
                                        : isScrolled
                                            ? "text-slate-600 dark:text-slate-300"
                                            : "text-slate-700 dark:text-slate-200" // adjust for hero overlay visibility if hero is dark/image
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="https://cncphysioclinic.plusphysio.com" target="_blank">
                            <Button variant="ghost" size="sm">Login</Button>
                        </Link>
                        <a href="tel:01203137252" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
                            <Phone className="h-4 w-4" />
                            <span>0120-3137252</span>
                        </a>
                        <Link href="/book-appointment">
                            <Button size="sm" className="gap-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                <Calendar className="h-4 w-4" />
                                Book Appointment
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 lg:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-slate-800 dark:text-slate-100 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-8 flex flex-col gap-4">
                                <Button className="w-full justify-center gap-2 text-lg py-6">
                                    <Calendar className="h-5 w-5" /> Book Appointment
                                </Button>
                                <a href="tel:01203137252" className="flex items-center justify-center gap-2 text-lg font-medium text-slate-600">
                                    <Phone className="h-5 w-5" /> Call: 0120-3137252
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
