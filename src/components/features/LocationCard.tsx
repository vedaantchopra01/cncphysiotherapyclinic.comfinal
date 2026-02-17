"use client";

import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationCardProps {
    name: string;
    address: string;
    mapEmbedUrl: string;
    phone: string;
    directionsUrl: string;
}

export function LocationCard({ name, address, mapEmbedUrl, phone, directionsUrl }: LocationCardProps) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row">
            {/* Map Section */}
            <div className="lg:w-1/2 h-64 lg:h-auto bg-slate-100 dark:bg-slate-800 relative">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-6">
                <div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                        {name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        {address}
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href={`tel:${phone}`} className="hover:text-primary transition-colors">{phone}</a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
                    </div>
                </div>

                <div className="pt-2">
                    <Button
                        className="w-full sm:w-auto gap-2"
                        onClick={() => window.open(directionsUrl, '_blank')}
                    >
                        <Navigation className="h-4 w-4" /> Get Directions
                    </Button>
                </div>
            </div>
        </div>
    );
}
