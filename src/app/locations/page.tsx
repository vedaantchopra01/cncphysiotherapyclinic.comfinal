import { LocationCard } from "@/components/features/LocationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Clinic Locations | CnC Physiotherapy",
    description: "Visit our physiotherapy clinics in Sector 122 Noida, Sector 17 Noida, Ghaziabad, and Noida Extension.",
};

const locations = [
    {
        name: "CnC Physiotherapy - Sector 122",
        address: "B-Block Market, Sector 122, Noida, Uttar Pradesh 201301",
        phone: "0120-3137252",
        // Using generic नोएडा coords or specific if known. 
        // Ideally user provides exact embed URL.
        // I will use a generic search embed for these locations to ensure they work without specific Place IDs for now,
        // or approximating based on the addresses provided.
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.68336717342!2d77.3945!3d28.5793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%20110096!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=CnC+Physiotherapy+Sector+122+Noida"
    },
    {
        name: "BHEL Dispensary Center",
        address: "Sector 17, Noida, Uttar Pradesh 201301",
        phone: "0120-3137252",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.213!2d77.3!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzMwLjAiTiA3N8KwMTknMDAuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=BHEL+Dispensary+Sector+17+Noida"
    },
    {
        name: "Ghaziabad Clinic",
        address: "Chiranjiv Vihar, Ghaziabad, Uttar Pradesh",
        phone: "0120-3137252",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d77.45!3d28.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzAwLjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=CnC+Physiotherapy+Chiranjiv+Vihar+Ghaziabad"
    },
    {
        name: "Cherry County Clinic",
        address: "Cherry County, Noida Extension, Greater Noida West",
        phone: "0120-3137252",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504!2d77.42!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzMwLjAiTiA3N8KwMjUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
        directionsUrl: "https://www.google.com/maps/search/?api=1&query=CnC+Physiotherapy+Cherry+County+Noida+Extension"
    }
];

export default function LocationsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Presence</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Visit Our Clinics
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Conveniently located centers across Noida and Ghaziabad to serve you better.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {locations.map((loc, index) => (
                        <LocationCard key={index} {...loc} />
                    ))}
                </div>
            </div>
        </div>
    );
}
