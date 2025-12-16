import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Database, Layers, Shield, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    const services = [
        {
            icon: Cloud,
            title: "Cloud Infrastructure",
            tagline: "Scale with confidence",
            description: "Managed cloud services, migration, and optimization across AWS, Azure, and GCP.",
            link: "/services/cloud",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-500/10 to-cyan-500/10",
            features: ["Migration", "Management", "Cost Opt", "Security"]
        },
        {
            icon: Layers,
            title: "DevOps Solutions",
            tagline: "Accelerate delivery",
            description: "End-to-end DevOps automation, CI/CD pipelines, and Kubernetes management.",
            link: "/services/devops",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-500/10 to-pink-500/10",
            features: ["CI/CD", "Kubernetes", "IaC", "Monitoring"]
        },
        {
            icon: Database,
            title: "Data Engineering",
            tagline: "Turn data into value",
            description: "Robust data pipelines, warehousing, and analytics infrastructure.",
            link: "/services/data-engineering",
            gradient: "from-green-400 to-emerald-500",
            bgGradient: "from-green-500/10 to-emerald-500/10",
            features: ["Pipelines", "Warehousing", "Real-time", "Governance"]
        },
        {
            icon: Sparkles,
            title: "AI & Machine Learning",
            tagline: "Intelligent future",
            description: "Custom AI solutions, predictive modeling, and generative AI integration.",
            link: "/services/ai-ml",
            gradient: "from-violet-500 to-fuchsia-500",
            bgGradient: "from-violet-500/10 to-fuchsia-500/10",
            features: ["GenAI", "ML Models", "Chatbots", "Computer Vision"]
        },
        {
            icon: Layers,
            title: "Application Services",
            tagline: "Modernize legacy",
            description: "App modernization, microservices architecture, and performance monitoring.",
            link: "/services/application",
            gradient: "from-orange-400 to-red-500",
            bgGradient: "from-orange-500/10 to-red-500/10",
            features: ["Modernization", "Microservices", "Performance", "Security"]
        },
        {
            icon: Shield,
            title: "Security Services",
            tagline: "Zero trust security",
            description: "Comprehensive security assessments, VAPT, and DevSecOps integration.",
            link: "/services/security",
            gradient: "from-red-400 to-rose-500",
            bgGradient: "from-red-500/10 to-rose-500/10",
            features: ["Cloud Security", "VAPT", "Compliances", "Monitoring"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Animated Background Grid */}
                {/* Content */}

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
                        >
                            <Sparkles className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-gray-300">Services that grow with you</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                            <span className="block">We don't just build</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                We build better
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Technology that feels human. Solutions that actually solve problems.
                            <br />
                            <span className="text-gray-500">Let's create something amazing together.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Floating gradient orbs */}
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={service.link} className="block group h-full">
                                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10 h-full hover:border-gray-700 transition-all duration-500 overflow-hidden">
                                        {/* Animated gradient on hover */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                            initial={false}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                transition={{ duration: 0.5 }}
                                                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} mb-6 border border-gray-800`}
                                            >
                                                <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                                            </motion.div>

                                            {/* Tagline */}
                                            <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                                {service.tagline}
                                            </p>

                                            {/* Title */}
                                            <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                                        <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                                <span>Learn more</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${service.bgGradient} rounded-tr-full opacity-20`} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Why partner with us?
                        </h2>
                        <p className="text-gray-400 text-lg">Because your success is our mission</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real humans, real expertise",
                                description: "No bots. No scripts. Just experienced engineers who genuinely care about solving your problems. Industry-certified and battle-tested across thousands of deployments.",
                                delay: 0
                            },
                            {
                                title: "We've been there",
                                description: "50+ successful projects later, we know what works. More importantly, we know what doesn't. Learn from our experience and avoid the costly mistakes.",
                                delay: 0.2
                            },
                            {
                                title: "Always in your corner",
                                description: "24/7 support isn't just a promise - it's a guarantee. Your 3 AM emergency is our top priority. We monitor, respond, and resolve issues before they impact your business.",
                                delay: 0.4
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
                            >
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to build something incredible?
                        </h2>
                        <p className="text-xl mb-10 text-blue-100">
                            Let's have a conversation about your challenges. No sales pitch, just honest advice.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
                                >
                                    Let's talk
                                </motion.button>
                            </Link>
                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                                >
                                    Learn about us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
