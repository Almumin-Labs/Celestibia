import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2, Code, Cloud, Monitor, Settings, Shield,
    Terminal, Cpu, ArrowRight, Play, Star, Zap, Globe
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const About = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const tools = [
        "AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Jenkins",
        "GitLab", "Ansible", "Prometheus", "Grafana", "Splunk", "Datadog",
        "Python", "React", "Node.js", "PostgreSQL", "MongoDB"
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20 font-sans">

            {/* Hero Section - Matching Reference Design */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="space-y-8"
                    >
                        {/* Headline */}
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                            Transform ideas into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impactful Solutions</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl leading-relaxed max-w-xl text-gray-300">
                            Welcome to Celestibia Solutions. We blend creativity with technical excellence to deliver software solutions that are not just functional, but future-ready.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button className="h-14 px-8 rounded-full bg-white hover:bg-gray-100 text-black text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="h-14 px-8 rounded-full border-gray-700 hover:bg-gray-800 text-white text-lg font-medium transition-all">
                                Watch Video <Play className="ml-2 h-5 w-5 fill-current" />
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-100">Trusted by 50+ Companies</p>
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Graphic (Cards Composition) */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {/* Background Decorative Elements */}
                        <div className="absolute inset-0 border border-dashed border-gray-700 rounded-[3rem]" />
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 h-8 w-8 text-gray-700">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10z" /></svg>
                        </div>

                        {/* Main Dashboard Card */}
                        <div className="relative z-10 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 p-6 w-full max-w-md transform transition-transform hover:scale-[1.02] duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">System Status</h3>
                                <Button size="sm" variant="outline" className="rounded-lg text-xs h-8 px-3 border-gray-700 text-gray-300 hover:bg-gray-800">Details</Button>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-white">99.9%</span>
                                    <span className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-bold">+5%</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-1">Operational Uptime</p>
                            </div>

                            {/* List Items */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                                        <span className="text-sm font-medium text-gray-400">Cloud Uptime</span>
                                    </div>
                                    <span className="text-sm font-bold text-white">100% <span className="text-green-500 text-xs ml-1">+12.6%</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                                        <span className="text-sm font-medium text-gray-400">Response Time</span>
                                    </div>
                                    <span className="text-sm font-bold text-white">45ms <span className="text-red-500 text-xs ml-1">-4.2%</span></span>
                                </div>
                            </div>

                            {/* Line Chart */}
                            <div className="relative h-32 w-full overflow-hidden">
                                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20 V100 H0 Z"
                                        fill="url(#chartGradient)"
                                    />
                                    <path
                                        d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,70 C250,70 250,20 300,20"
                                        fill="none"
                                        stroke="#10B981"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                {/* X-Axis Labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-500 px-2">
                                    <span>11:00</span>
                                    <span>14:00</span>
                                    <span>17:00</span>
                                    <span>20:00</span>
                                </div>
                            </div>

                        </div>

                        {/* Floating Card 1: Projects */}
                        <div className="absolute top-10 right-0 lg:-right-8 bg-gray-900 p-5 rounded-2xl shadow-xl border border-gray-800 w-48 animate-bounce-slow">
                            <div className="flex items-center justify-between mb-2">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Code className="h-5 w-5" /></div>
                                <span className="text-green-400 text-xs font-bold">+38%</span>
                            </div>
                            <div className="text-2xl font-bold text-white">50+</div>
                            <div className="text-xs text-gray-400">Projects Delivered</div>
                        </div>


                    </div>
                </div>
            </section >

            {/* Mission Section - Dark Theme */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Driven by Passion, <br />Powered by Technology</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At Celestibia Solutions, we are driven by a passion for empowering businesses through smart technology, seamless design, and scalable engineering. We blend creativity with technical excellence to deliver software solutions that are not just functional, but future-ready.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our team of expert developers, problem-solvers, and strategists work closely with clients to turn challenges into opportunities. Whether it's building intuitive web and mobile applications, modernizing legacy systems, enhancing cloud capabilities, or automating workflows.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Code, title: "Clean Code", desc: "Scalable Architecture" },
                                { icon: Cloud, title: "Cloud Native", desc: "AWS, Azure, GCP" },
                                { icon: Shield, title: "Secure", desc: "Enterprise Grade" },
                                { icon: Zap, title: "Fast", desc: "High Performance" }
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <GlowingEffect
                                        blur={0}
                                        borderWidth={2}
                                        spread={80}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <div className="relative bg-black p-6 rounded-2xl shadow-sm border border-gray-800 hover:shadow-md hover:border-gray-700 transition-all">
                                        <item.icon className="h-8 w-8 text-blue-400 mb-4" />
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Believe - Dark Theme */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Believe</h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Technology should simplify business",
                            "Solutions must scale with growth",
                            "Innovation is key to staying ahead",
                            "Client success is our ultimate achievement"
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group">
                                <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-400">
                                    <CheckCircle2 className="h-8 w-8" />
                                </div>
                                <p className="text-lg font-medium text-gray-200 leading-snug">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do - Dark Theme */}
            <section className="py-24 bg-gray-900 border-y border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
                        <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Custom Software Development", icon: Code, color: "text-blue-400", bg: "bg-blue-500/10" },
                            { title: "Cloud & DevOps Solutions", icon: Cloud, color: "text-sky-400", bg: "bg-sky-500/10" },
                            { title: "Web & Mobile App Engineering", icon: Monitor, color: "text-indigo-400", bg: "bg-indigo-500/10" },
                            { title: "Automation & Process Optimization", icon: Settings, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                            { title: "Secure, Reliable Systems", icon: Shield, color: "text-green-400", bg: "bg-green-500/10" },
                            { title: "High-Performance Architecture", icon: Cpu, color: "text-red-400", bg: "bg-red-500/10" }
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <GlowingEffect
                                    blur={0}
                                    borderWidth={2}
                                    spread={80}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative flex items-start gap-6 p-6 rounded-2xl bg-black border border-gray-800 hover:shadow-lg hover:border-gray-700 transition-all duration-300 group">
                                    <div className={`flex-shrink-0 h-14 w-14 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`h-7 w-7 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-400">Delivering excellence with precision and modern tech stacks.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* DevOps Tools Animation - Dark Theme */}
            <section className="py-24 overflow-hidden bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powering Your Infrastructure</h2>
                    <p className="text-gray-400">We work with the best-in-class DevOps and Cloud tools.</p>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="flex">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center pr-16">
                            {tools.map((tool, index) => (
                                <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors">
                                    <Terminal className="h-5 w-5 text-gray-500" />
                                    <span className="text-xl font-bold text-gray-200">{tool}</span>
                                </div>
                            ))}
                        </div>
                        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center pr-16">
                            {tools.map((tool, index) => (
                                <div key={`dup-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors">
                                    <Terminal className="h-5 w-5 text-gray-500" />
                                    <span className="text-xl font-bold text-gray-200">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                </div>
            </section>



            {/* Footer - Dark Theme */}
            <footer className="py-12 border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">© 2024 Celestibia Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div >
    );
};

export default About;
