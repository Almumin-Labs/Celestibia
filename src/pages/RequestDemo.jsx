import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const RequestDemo = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        interests: [],
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const interests = [
        "Cloud Migration", "DevOps Implementation", "AI/ML Solutions", 
        "Security Audit", "App Modernization", "Other"
    ];

    const toggleInterest = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#020817] text-white pt-24 pb-12 overflow-x-hidden relative">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Schedule Your Personalized Demo</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                        See Celestibia in 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ml-4">
                            Action
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience how our cutting-edge solutions can transform your business. 
                        Book a demo with our technical experts today.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Form Section */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                        >
                            {submitted ? (
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">You're All Set!</h3>
                                    <p className="text-gray-400 text-lg mb-8">
                                        We've received your request. One of our experts will be in touch shortly to schedule your demo.
                                    </p>
                                    <Button 
                                        onClick={() => setSubmitted(false)}
                                        variant="outline" 
                                        className="border-white/20 hover:bg-white/10"
                                    >
                                        Book Another Demo
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Job Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="CTO, Product Manager..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-300">I'm interested in...</label>
                                        <div className="flex flex-wrap gap-3">
                                            {interests.map((interest) => (
                                                <button
                                                    key={interest}
                                                    type="button"
                                                    onClick={() => toggleInterest(interest)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                                        formData.interests.includes(interest)
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                                                    }`}
                                                >
                                                    {interest}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Anything specific you'd like to see?</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                                    >
                                        Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Features/Info Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold mb-6">What to expect?</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Tailored Walkthrough",
                                        description: "A live demo customized to your specific industry and technical requirements."
                                    },
                                    {
                                        title: "Expert Consultation",
                                        description: "Direct access to our solution architects who can answer your toughest technical questions."
                                    },
                                    {
                                        title: "Implementation Strategy",
                                        description: "High-level roadmap discussion for potential integration and deployment."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-blue-400 font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 rounded-xl p-6"
                        >
                            <h4 className="font-bold text-white mb-2">Trusted by Industry Leaders</h4>
                            <p className="text-sm text-gray-400 mb-4">
                                Join hundreds of forward-thinking companies transforming their digital landscape with Celestibia.
                            </p>
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#020817]" />
                                ))}
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-[#020817] text-[10px] text-white">
                                    +50
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;
