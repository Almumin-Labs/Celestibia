import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Shield, Layers, Activity, Eye, Bell, BarChart2, Gauge, DollarSign, Container, Target } from 'lucide-react';

const ApplicationServices = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const modernizationServices = [
        {
            icon: Shield,
            title: "Application Security and Compliance",
            description: "Protect your applications with advanced security practices and ensure compliance with industry standards."
        },
        {
            icon: Layers,
            title: "Monolith to Microservices Migration",
            description: "Break down monolithic applications into scalable, independent microservices."
        },
        {
            icon: RefreshCw,
            title: "Application Replatforming",
            description: "Replatform legacy applications to modern architectures for improved performance and cost efficiency."
        }
    ];

    const monitoringServices = [
        {
            icon: Activity,
            title: "Real-Time Monitoring",
            description: "Continuous tracking of application metrics, server health, API responsiveness, and user experience with minimal lag."
        },
        {
            icon: Eye,
            title: "End-to-End Observability",
            description: "Full-stack visibility into infrastructure, applications, containers, and services using tools like Prometheus, Grafana, ELK Stack, and OpenTelemetry."
        },
        {
            icon: Bell,
            title: "Intelligent Alerting & Incident Response",
            description: "Smart thresholding, anomaly detection, and automated alerts integrated with Slack, Opsgenie, or PagerDuty for rapid resolution."
        },
        {
            icon: Gauge,
            title: "User Experience Monitoring (APM)",
            description: "Deep insights into frontend/backend performance, load times, and error rates using Application Performance Monitoring (e.g., New Relic, Datadog, Dynatrace)."
        },
        {
            icon: BarChart2,
            title: "Log Aggregation & Analysis",
            description: "Centralized log management to troubleshoot faster, correlate events, and uncover hidden performance bottlenecks."
        },
        {
            icon: DollarSign,
            title: "Cloud Cost & Resource Optimization",
            description: "Monitor resource utilization and optimize cloud spend by identifying idle or underperforming instances and workloads."
        },
        {
            icon: Container,
            title: "Kubernetes & Container Monitoring",
            description: "Track pod health, CPU/memory usage, network I/O, and auto-healing triggers for containerized environments."
        },
        {
            icon: Target,
            title: "SLA & SLO Tracking",
            description: "Define and monitor Service Level Objectives (SLOs) to ensure you're meeting customer expectations and compliance standards."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Application
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                                Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            From legacy systems to cloud-native applications, we help you modernize your technology
                            stack for better scalability, performance, and agility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Application Modernization */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Application Modernization</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modernizationServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Monitoring */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Performance Monitoring</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Ensure optimal application performance and uptime with our proactive monitoring and performance optimization services.
                        </p>
                        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {monitoringServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your applications?</h2>
                    <p className="text-xl mb-8 text-orange-100">Contact us to enhance your application performance and reliability.</p>
                    <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ApplicationServices;
