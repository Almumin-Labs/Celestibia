import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Cpu, GitBranch, Container, Shield, Zap, Database, Network } from 'lucide-react';

const CloudDevOps = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cloudServices = [
        {
            icon: Server,
            title: "Cloud Infrastructure Managed Services",
            description: "Proactive management and monitoring of your cloud infrastructure, ensuring seamless performance and cost efficiency."
        },
        {
            icon: Cloud,
            title: "Cloud Migration",
            description: "Smooth, secure, and optimized migration of your workloads to the cloud, minimizing downtime and maximizing performance."
        },
        {
            icon: Network,
            title: "Cloud Architecture and Design",
            description: "Designing scalable, secure, and high-performance cloud architectures tailored to your business needs."
        },
        {
            icon: Shield,
            title: "Cloud Security and Governance",
            description: "Robust security and governance frameworks to safeguard your data and maintain compliance."
        },
        {
            icon: Zap,
            title: "Cost Optimization",
            description: "Identifying and eliminating inefficiencies to reduce cloud spend without compromising performance."
        },
        {
            icon: Database,
            title: "Disaster Recovery & Business Continuity",
            description: "Comprehensive solutions for data backup, disaster recovery, and business continuity on the cloud."
        },
        {
            icon: Cpu,
            title: "Environment Management",
            description: "Structured setup of isolated environments (Dev, UAT, Prod) with promotion pipelines and config separation for SDLC workflows."
        }
    ];

    const devopsServices = [
        {
            icon: Container,
            title: "Managed Kubernetes",
            description: "Seamless deployment, scaling, and management of Kubernetes clusters to ensure secure, high-availability containerized applications."
        },
        {
            icon: GitBranch,
            title: "DevOps as a Service",
            description: "Comprehensive DevOps lifecycle support — from CI/CD implementation and infrastructure automation to monitoring and optimization."
        },
        {
            icon: Zap,
            title: "Managed CI/CD Pipelines",
            description: "Design, implementation, and maintenance of automated CI/CD pipelines for faster, reliable, and consistent application releases."
        },
        {
            icon: Server,
            title: "Infrastructure Automation & Management",
            description: "Provisioning, scaling, and monitoring of cloud or hybrid infrastructure using Infrastructure as Code (IaC) for enhanced efficiency and reliability."
        },
        {
            icon: Cpu,
            title: "Custom Workflow Automation",
            description: "Automate repetitive tasks and integrate processes across your DevOps toolchain, tailored to fit your operational needs and reduce manual overhead."
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
                            Cloud & DevOps
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                                Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We provide a full suite of cloud services across major platforms like AWS, Azure, and GCP,
                            combined with end-to-end DevOps solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Cloud Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Core Cloud Services</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cloudServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DevOps Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">DevOps Services</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {devopsServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your cloud journey?</h2>
                    <p className="text-xl mb-8 text-blue-100">Contact us to learn how we can empower your business.</p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CloudDevOps;
