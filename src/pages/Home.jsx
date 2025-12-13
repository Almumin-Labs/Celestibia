import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
    ArrowRight, CheckCircle2, Cloud, Code, Database,
    Lock, Monitor, Cpu, Server, Settings, Users,
    Zap, BarChart, Shield, Terminal, Globe, Target, Clock,
    Search, PenTool, Code2, Bug, Rocket, RefreshCw, FileText, Layout, ShieldCheck, CloudLightning, Headphones, HelpingHand,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import EngagementModels from "@/components/EngagementModels";

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    const [activeTab, setActiveTab] = useState('who');
    return (
        <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    >
                        <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient overlay to blend video into the dark background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/50 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h1
                            variants={fadeIn}
                            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/50"
                        >
                            Innovative Cloud Solutions <br />
                            <span className="text-blue-500">for a Connected World</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                        >
                            Transforming ideas into impactful digital solutions with precision, speed, and scalability.
                        </motion.p>

                        <motion.div
                            variants={fadeIn}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-lg px-8 py-6 rounded-full">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                                View Services
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section - GitHub Universe Aesthetic */}
            <section className="py-32 relative bg-black overflow-hidden selection:bg-green-500/30">
                {/* Universe Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                    {/* Stars/Grid overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        {/* Left Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-8 sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                    About <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                                        Celestibia
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg max-w-xs">
                                    Exploring the universe of code, cloud, and creativity.
                                </p>
                            </motion.div>

                            <div className="space-y-3">
                                {[
                                    { id: 'who', label: 'Who We Are', icon: Users },
                                    { id: 'beliefs', label: 'Our Philosophy', icon: CheckCircle2 },
                                    { id: 'whatwedo', label: 'Our Expertise', icon: Code }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="w-full group relative flex items-center justify-between px-6 py-5 rounded-2xl transition-all duration-300 overflow-hidden"
                                    >
                                        {/* Active Tab Background - Glowing Pill */}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTabGlow"
                                                className="absolute inset-0 bg-white/5 border border-white/10 shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)] backdrop-blur-sm rounded-2xl"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        {/* Hover Effect for non-active */}
                                        {activeTab !== tab.id && (
                                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-2xl" />
                                        )}

                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className={`p-2 rounded-lg transition-colors duration-300 ${activeTab === tab.id ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                                                <tab.icon className="h-5 w-5" />
                                            </div>
                                            <span className={`text-lg font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                                {tab.label}
                                            </span>
                                        </div>

                                        <ArrowRight className={`h-5 w-5 relative z-10 transition-all duration-300 ${activeTab === tab.id ? 'text-green-400 translate-x-0 opacity-100' : 'text-gray-500 -translate-x-4 opacity-0 group-hover:opacity-50'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Content Area - Glassmorphism Card */}
                        <div className="lg:col-span-8">
                            <div className="relative group">
                                {/* Glowing Gradient Border */}
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/50 via-emerald-500/50 to-blue-500/50 rounded-3xl opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-700" />

                                <div className="relative bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[600px] overflow-hidden">
                                    {/* Inner Grid Pattern */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="relative z-10 h-full flex flex-col"
                                        >
                                            {activeTab === 'who' && (
                                                <div className="space-y-10">
                                                    <div>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100px" }}
                                                            className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-6"
                                                        />
                                                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                                            Building the <br />
                                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Future of Digital</span>
                                                        </h3>
                                                    </div>

                                                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                                                        <p className="border-l-2 border-white/10 pl-6">
                                                            Where innovation meets precision, and ideas transform into impactful digital solutions.
                                                        </p>
                                                        <p>
                                                            At Celestibia Solutions, we are driven by a passion for empowering businesses through smart technology, seamless design, and scalable engineering. We blend creativity with technical excellence to deliver software solutions that are not just functional, but future-ready.
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                                                            <div className="text-sm text-gray-400">Projects Delivered</div>
                                                        </div>
                                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                                                            <div className="text-sm text-gray-400">Client Satisfaction</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'beliefs' && (
                                                <div className="space-y-8">
                                                    <div>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100px" }}
                                                            className="h-1 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full mb-6"
                                                        />
                                                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Core Beliefs</h3>
                                                    </div>

                                                    <div className="grid gap-4">
                                                        {[
                                                            { title: "Simplicity", desc: "Technology should simplify business, not complicate it." },
                                                            { title: "Scalability", desc: "Solutions must grow as you grow, without friction." },
                                                            { title: "Innovation", desc: "Staying ahead means constantly reimagining what's possible." },
                                                            { title: "Impact", desc: "Client success is the only metric that truly matters." }
                                                        ].map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                whileHover={{ scale: 1.02, x: 10 }}
                                                                className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                                            >
                                                                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                                                    <CheckCircle2 className="h-6 w-6 text-purple-400" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                                                    <p className="text-gray-400">{item.desc}</p>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'whatwedo' && (
                                                <div className="space-y-8">
                                                    <div>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100px" }}
                                                            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mb-6"
                                                        />
                                                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Expertise</h3>
                                                    </div>

                                                    <div className="grid gap-4">
                                                        {[
                                                            { text: "Custom Software Development", icon: Code, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                                                            { text: "Cloud & DevOps Solutions", icon: Cloud, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
                                                            { text: "Web & Mobile App Engineering", icon: Monitor, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                                                            { text: "Automation & Process Optimization", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                                                            { text: "Secure, Reliable Systems", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" }
                                                        ].map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                whileHover={{ scale: 1.02, x: 10 }}
                                                                className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group"
                                                            >
                                                                <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center ${item.border} border group-hover:scale-110 transition-transform duration-300`}>
                                                                    <item.icon className={`h-6 w-6 ${item.color}`} />
                                                                </div>
                                                                <span className="text-xl text-gray-200 font-medium group-hover:text-white transition-colors">{item.text}</span>
                                                                <ArrowRight className="h-5 w-5 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated Resources & Engagement Models */}
            <section className="py-32 relative bg-black overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Engagement Models Grid */}
                        <div className="order-2 lg:order-1">
                            <EngagementModels />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="text-left mb-10 lg:mb-0 order-1 lg:order-2 lg:pt-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                            >
                                Dedicated Resources & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    On-Demand Expertise
                                </span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-gray-400 leading-relaxed"
                            >
                                Scale your team instantly with our pool of certified, battle-tested cloud and software professionals.
                                Whether you're looking to accelerate delivery, fill a skill gap, or need short-term help — we've got you covered.
                            </motion.p>
                        </div>
                    </div>


                </div>
            </section>

            {/* Software Development Lifecycle Section */}
            <section className="py-32 relative bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
                        >
                            End-to-End Engineering
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Software Development</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            From ideation to deployment, we develop robust, scalable, and high-performance software solutions tailored to your business needs.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

                        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {[
                                { step: "01", title: "Analysis", desc: "Requirement Analysis & Goal Alignment", icon: Search },
                                { step: "02", title: "Design", desc: "UI/UX & System Architecture", icon: PenTool },
                                { step: "03", title: "Develop", desc: "Frontend & Backend Engineering", icon: Code2 },
                                { step: "04", title: "Testing", desc: "QA, Automation & Performance", icon: Bug },
                                { step: "05", title: "Deploy", desc: "CI/CD & Cloud Release", icon: Rocket },
                                { step: "06", title: "Maintain", desc: "Support & Updates", icon: RefreshCw }
                            ].map((item, index) => (
                                <li key={index} className="list-none min-h-[14rem]">
                                    <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-[#0a0a0a]">
                                        <GlowingEffect
                                            blur={0}
                                            borderWidth={3}
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                        />
                                        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#0a0a0a] border border-white/5">
                                            <div className="relative flex flex-1 flex-col items-center text-center gap-3">
                                                <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                                                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="text-xs font-mono text-green-500 mb-2">Step {item.step}</div>
                                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Detailed Breakdown Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                        {[
                            { title: "Requirement Analysis", desc: "Understanding your business needs and aligning technical goals.", icon: FileText },
                            { title: "UI/UX Design", desc: "Creating intuitive, user-centric interfaces for better engagement.", icon: Layout },
                            { title: "Custom Development", desc: "Scalable backend & frontend systems built using modern frameworks.", icon: Terminal },
                            { title: "Quality Assurance", desc: "Manual and automated testing to ensure performance and reliability.", icon: ShieldCheck },
                            { title: "Deployment & Release", desc: "CI/CD-enabled rollouts for fast and error-free deployment.", icon: CloudLightning },
                            { title: "Support & Maintenance", desc: "Continuous improvement, monitoring, and updates.", icon: Headphones }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="mt-1">
                                    <item.icon className="h-6 w-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Partners & Certifications */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Handshake Icon in Circle */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative h-20 w-20 bg-white/5 rounded-full border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                                <HelpingHand className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-6">Partners & Certifications</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        Recognized for technical excellence and certified expertise across major cloud platforms.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* AWS */}
                        <div className="flex flex-col items-center gap-6 group">
                            <div className="relative h-40 w-40 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-8 transition-all duration-300 group-hover:border-[#FF9900]/50 group-hover:bg-white/10">
                                <div className="absolute inset-0 rounded-full bg-[#FF9900]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                    alt="AWS"
                                    className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-1">AWS</h3>
                                <p className="text-sm text-gray-400">Select Consulting Partner</p>
                            </div>
                        </div>

                        {/* Azure */}
                        <div className="flex flex-col items-center gap-6 group">
                            <div className="relative h-40 w-40 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-8 transition-all duration-300 group-hover:border-[#0078D4]/50 group-hover:bg-white/10">
                                <div className="absolute inset-0 rounded-full bg-[#0078D4]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                                    alt="Microsoft Azure"
                                    className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-1">Microsoft Azure</h3>
                                <p className="text-sm text-gray-400">Solutions Partner</p>
                            </div>
                        </div>

                        {/* GCP */}
                        <div className="flex flex-col items-center gap-6 group">
                            <div className="relative h-40 w-40 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-8 transition-all duration-300 group-hover:border-[#4285F4]/50 group-hover:bg-white/10">
                                <div className="absolute inset-0 rounded-full bg-[#4285F4]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                                    alt="Google Cloud"
                                    className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-1">Google Cloud</h3>
                                <p className="text-sm text-gray-400">Certified Partner</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500">© 2024 Celestibia Solutions. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;
