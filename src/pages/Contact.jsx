import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black text-white pt-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Let's Build
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Something Amazing
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Have a project in mind? We'd love to hear about it.
                            Drop us a message and let's start the conversation.
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800"
                        >
                            <h2 className="text-3xl font-bold mb-6">Request a Demo</h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12"
                                >
                                    <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-gray-400 text-center">
                                        We've received your message and will get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Tell us about your project
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Share your ideas, challenges, or questions..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all"
                                    >
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Whether you're looking to modernize your infrastructure, build a new application,
                                    or need expert guidance on your cloud journey, we're here to help.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Email Us</h4>
                                            <p className="text-gray-400 text-sm">contact@celestibia.com</p>
                                            <p className="text-gray-400 text-sm">support@celestibia.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Call Us</h4>
                                            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                                            <p className="text-gray-400 text-sm">Mon-Fri, 9am-6pm EST</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Visit Us</h4>
                                            <p className="text-gray-400 text-sm">123 Tech Avenue</p>
                                            <p className="text-gray-400 text-sm">San Francisco, CA 94105</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-800">
                                <h4 className="text-lg font-bold mb-6">Why Choose Us?</h4>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                                        <div className="text-sm text-gray-400">Projects Delivered</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                                        <div className="text-sm text-gray-400">Support Available</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-orange-400 mb-1">5+</div>
                                        <div className="text-sm text-gray-400">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">© 2024 Celestibia Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
