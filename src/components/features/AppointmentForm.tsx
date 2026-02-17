"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, MessageCircle, MapPin, User, Phone, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  location: string;
  time: string;
  problem: string;
};

export function AppointmentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp Message
    const message = `*New Appointment Request*
    
*Name:* ${data.name}
*Phone:* ${data.phone}
*Location:* ${data.location}
*Preferred Time:* ${data.time}
*Problem:* ${data.problem}

Please confirm availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919217807401?text=${encodedMessage}`;
    
    // Simulate submission delay then redirect
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-800"
    >
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
          Book Your Session
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Fill the form below or chat on WhatsApp for instant booking.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <User className="h-4 w-4 text-primary" /> Full Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> Phone Number
            </label>
            <input
              {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="9876543210"
            />
            {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Preferred Time
            </label>
            <select
              {...register("time", { required: "Time is required" })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Time</option>
              <option value="Morning">Morning (9am - 12pm)</option>
              <option value="Afternoon">Afternoon (12pm - 4pm)</option>
              <option value="Evening">Evening (4pm - 8pm)</option>
            </select>
            {errors.time && <span className="text-xs text-red-500">{errors.time.message}</span>}
          </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Preferred Location
            </label>
            <select
              {...register("location", { required: "Location is required" })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Clinic Location</option>
              <option value="Sector 122, Noida">Sector 122, Noida</option>
              <option value="Sector 17, Noida">Sector 17, Noida (BHEL)</option>
              <option value="Chiranjiv Vihar, Ghaziabad">Chiranjiv Vihar, Ghaziabad</option>
              <option value="Cherry County, Noida Ext">Cherry County, Noida Extension</option>
            </select>
            {errors.location && <span className="text-xs text-red-500">{errors.location.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" /> Describe Problem
          </label>
          <textarea
            {...register("problem", { required: "Please describe your problem" })}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="e.g. Lower back pain for 2 weeks..."
          />
          {errors.problem && <span className="text-xs text-red-500">{errors.problem.message}</span>}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-[1.01] transition-all"
        >
           {isSubmitting ? "Processing..." : (
             <span className="flex items-center gap-2">
               <MessageCircle className="h-5 w-5" /> Book via WhatsApp
             </span>
           )}
        </Button>
      </form>
    </motion.div>
  );
}
