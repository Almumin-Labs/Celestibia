import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, FileSearch, Network, Users, CheckCircle } from 'lucide-react';

const SecurityServices = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cloudSecurity = [
        {
            icon: Shield,
            title: "Cloud Security Posture Assessment",
            description: "Identify misconfigurations in AWS, Azure, GCP with CIS Benchmarks & compliance mapping."
        },
        {
            icon: Network,
            title: "Security Architecture Design",
            description: "Zero Trust Architecture, Identity and Access Management (IAM), network segmentation and firewall policies."
        },
        {
            icon: Lock,
            title: "Identity and Access Management",
            description: "RBAC, ABAC policy design, SSO, MFA integration, and identity lifecycle management."
        },
        {
            icon: CheckCircle,
            title: "DevSecOps Integration",
            description: "Static and dynamic code analysis (SAST/DAST), shift-left security in CI/CD pipelines, container security (Trivy, Aqua, Prisma Cloud)."
        }
    ];

    const cybersecurity = [
        {
            icon: FileSearch,
            title: "Vulnerability Assessment & Penetration Testing",
            description: "Infrastructure, application, and cloud VAPT with black-box, white-box, and grey-box testing."
        },
        {
            icon: Eye,
            title: "Security Monitoring & Incident Response",
            description: "SIEM implementation (e.g., Splunk, ELK, AWS GuardDuty), 24/7 monitoring and threat detection, incident handling and forensic analysis."
        },
        {
            icon: AlertTriangle,
            title: "Managed Detection and Response",
            description: "Outsourced SOC for continuous monitoring and threat hunting with rapid response capabilities."
        },
        {
            icon: Users,
            title: "Third-Party Risk Management",
            description: "Vendor security assessments and supply chain security audits."
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
                            Security
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                                Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Security is at the core of everything we do. We provide comprehensive security solutions
                            covering both cloud and on-premise environments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cloud Security */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Cloud Security</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Identity and access management, data encryption, threat detection, and incident response.
                        </p>
                        <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cloudSecurity.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cybersecurity */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Cybersecurity</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Network security, endpoint protection, threat intelligence, and security posture management.
                        </p>
                        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cybersecurity.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group"
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

            {/* Key Features */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Comprehensive Security Coverage</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Proactive Threat Detection</h3>
                                        <p className="text-gray-400">24/7 monitoring with advanced threat intelligence</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Compliance & Governance</h3>
                                        <p className="text-gray-400">Meet industry standards and regulatory requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Rapid Incident Response</h3>
                                        <p className="text-gray-400">Expert team ready to handle security incidents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-2xl font-bold mb-6">Security First Approach</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We integrate security at every layer of your infrastructure, from cloud environments
                                to application code, ensuring comprehensive protection against evolving threats.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                    <span>Zero Trust Architecture</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                    <span>Multi-layered Defense</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                    <span>Continuous Compliance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your infrastructure?</h2>
                    <p className="text-xl mb-8 text-red-100">Contact us to fortify your security posture and protect your business.</p>
                    <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SecurityServices;
