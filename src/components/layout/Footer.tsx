import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold font-heading text-white">
                                CnC <span className="text-primary">Physiotherapy & Spine Clinic</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Restore Movement. Relieve Pain. Rebuild Life.
                            Premium physiotherapy and spine care services in Noida and Ghaziabad.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="https://instagram.com/cnc_physiotherapy" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Our Doctors", "Success Stories", "Contact Us", "Book Appointment"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {["Back Pain Treatment", "Cervical Pain", "Sports Injury Rehab", "Post Surgery Rehab", "Chiropractic Care", "Dry Needling"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/services"
                                        className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <p>Sector 122, Noida</p>
                                    <p>Cherry County, Noida Ext</p>
                                    <p>Sector 17, Noida</p>
                                    <p>Kavinagar, Ghaziabad</p>
                                    <p>Chiranjiv Vihar, Ghaziabad</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:01203137252" className="hover:text-white transition-colors">0120-3137252 (All Centers)</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:receptioncncphysio@gmail.com" className="hover:text-white transition-colors">receptioncncphysio@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} CnC Physiotherapy & Spine Clinic. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
