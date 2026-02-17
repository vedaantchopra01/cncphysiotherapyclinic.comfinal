"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Activity, ArrowRight, Download, Dumbbell, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type AnalysisData = {
    age: number;
    weight: number;
    height: number;
    gender: string;
    activityLevel: string;
    goal: string;
    painArea: string;
};

export function BodyAnalysis() {
    const { register, handleSubmit, formState: { errors } } = useForm<AnalysisData>();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const calculateBMI = (weight: number, height: number) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    };

    const onSubmit = (data: AnalysisData) => {
        setLoading(true);

        // Simulate AI Analysis Delay
        setTimeout(() => {
            const bmi = calculateBMI(data.weight, data.height);
            const bmiNum = parseFloat(bmi);
            let status = "Healthy Weight";
            if (bmiNum < 18.5) status = "Underweight";
            if (bmiNum >= 25) status = "Overweight";
            if (bmiNum >= 30) status = "Obese";

            setResult({
                bmi,
                status,
                calories: data.gender === "male" ? 2500 : 2000,
                protein: data.weight * 1.5,
                water: 3,
                recommendation: `Based on your ${status} status and ${data.painArea} pain, we recommend a focused ${data.goal} plan with low-impact exercises.`,
                dietPlan: [
                    "Breakfast: Oatmeal with fruits & nuts",
                    "Lunch: Grilled chicken/paneer salad with quinoa",
                    "Snack: Greek yogurt or protein shake",
                    "Dinner: Steamed vegetables with lean fish/dal"
                ],
                exercises: [
                    "Core strengthening for back support",
                    "Gentle stretching for flexibility",
                    "Low-impact cardio (swimming/cycling)"
                ]
            });
            setLoading(false);
        }, 2000);
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900" id="body-analysis">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">AI Health Tools</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2">
                        Free Body Analysis & Diet Plan
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                        Get a personalized health report, BMI analysis, and diet recommendation instantly using our advanced AI algorithm.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Age</label>
                                    <input {...register("age", { required: true, min: 10, max: 100 })} type="number" className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary" placeholder="Years" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Gender</label>
                                    <select {...register("gender")} className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Height (cm)</label>
                                    <input {...register("height", { required: true })} type="number" className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary" placeholder="175" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Weight (kg)</label>
                                    <input {...register("weight", { required: true })} type="number" className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary" placeholder="70" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Pain / Problem Area</label>
                                <select {...register("painArea")} className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary">
                                    <option value="none">None / General Fitness</option>
                                    <option value="back">Back Pain</option>
                                    <option value="neck">Neck / Cervical Pain</option>
                                    <option value="knee">Knee Pain</option>
                                    <option value="shoulder">Shoulder Pain</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Goal</label>
                                <select {...register("goal")} className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary">
                                    <option value="weight_loss">Weight Loss</option>
                                    <option value="muscle_gain">Muscle Gain</option>
                                    <option value="pain_relief">Pain Relief</option>
                                    <option value="flexibility">Improve Flexibility</option>
                                </select>
                            </div>

                            <Button type="submit" disabled={loading} className="w-full h-14 text-lg bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all">
                                {loading ? "Analyzing Body Metrics..." : "Generate My Plan"}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Results Side */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-xl border border-green-100 dark:border-green-900/30 h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600" />

                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <p className="text-sm text-slate-500">Your BMI Score</p>
                                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{result.bmi}</h3>
                                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold mt-1 ${result.status === 'Healthy Weight' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {result.status}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-slate-500">Daily Calories</p>
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white">{result.calories} kcal</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                            <h4 className="font-bold flex items-center gap-2 mb-2 text-primary">
                                                <Activity className="h-5 w-5" /> Analysis
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {result.recommendation}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold flex items-center gap-2 mb-3 text-secondary">
                                                <Utensils className="h-5 w-5" /> Recommended Diet
                                            </h4>
                                            <ul className="space-y-2">
                                                {result.dietPlan.map((item: string, i: number) => (
                                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold flex items-center gap-2 mb-3 text-emerald-600">
                                                <Dumbbell className="h-5 w-5" /> Key Exercises
                                            </h4>
                                            <ul className="space-y-2">
                                                {result.exercises.map((item: string, i: number) => (
                                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <Button className="w-full mt-8 gap-2 bg-slate-900 text-white hover:bg-slate-800" onClick={() => alert("Downloading PDF...")}>
                                        <Download className="h-4 w-4" /> Download Complete Report (PDF)
                                    </Button>

                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800"
                                >
                                    <div className="h-20 w-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm mb-4">
                                        <Activity className="h-10 w-10 text-slate-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        Ready to Analyze
                                    </h3>
                                    <p className="text-slate-500 max-w-xs">
                                        Fill out the form to unlock your personalized health insights.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
