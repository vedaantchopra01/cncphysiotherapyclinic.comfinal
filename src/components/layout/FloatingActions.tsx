"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/919217807401"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </motion.a>

            {/* Call Button */}
            <motion.a
                href="tel:01203137252"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative group"
                aria-label="Call Now"
            >
                <Phone className="h-6 w-6" />
                <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Call Now
                </span>
            </motion.a>
        </div>
    );
}
