import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        title: "5 Exercises to Relieve Lower Back Pain at Home",
        excerpt: "Discover simple yet effective exercises you can do daily to manage and reduce chronic lower back pain.",
        date: "Oct 15, 2023",
        category: "Back Pain",
        image: "/images/blog/back-pain.jpg"
    },
    {
        title: "Understanding Sciatica: Symptoms and Treatment",
        excerpt: "Learn about the causes of sciatica and how physiotherapy can help alleviate the sharp shooting pain.",
        date: "Oct 02, 2023",
        category: "Sciatica",
        image: "/images/blog/sciatica.jpg"
    },
    {
        title: "Recovering from ACL Surgery: A Complete Guide",
        excerpt: "A step-by-step guide on what to expect during your rehabilitation journey after ACL reconstruction.",
        date: "Sep 20, 2023",
        category: "Sports Injury",
        image: "/images/blog/acl-rehab.jpg"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Health Insights</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-4">
                        Latest Articles & Tips
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Expert advice on pain management, recovery, and healthy living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all group"
                        >
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
                                {/* Placeholder for Blog Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    Blog Thumbnail
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-950/90 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                    <Calendar className="h-3 w-3" />
                                    {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Button variant="link" className="p-0 h-auto text-primary hover:no-underline gap-2">
                                    Read More <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
