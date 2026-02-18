import { AppointmentForm } from "@/components/features/AppointmentForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | CnC Physiotherapy",
  description: "Schedule your physiotherapy session online. Quick booking for all our centers.",
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="space-y-8 pt-6">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">
              Start Your Journey to <br />
              <span className="text-primary">Pain-Free Living.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Don&apos;t let pain hold you back. Schedule an appointment with our expert physiotherapists today. We offer flexible timings and personalized care plans.
            </p>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-4 font-heading text-slate-900 dark:text-white">Why Choose CnC?</h3>
              <ul className="space-y-3">
                {[
                  "Experienced Specialists",
                  "Advanced Technology",
                  "Personalized 1-on-1 Attention",
                  "Hygienic Clinics",
                  "Affordable Treatment Plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative z-10">
            <AppointmentForm />
          </div>

        </div>
      </div>
    </div>
  );
}
