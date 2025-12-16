import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Container, Server, Cpu, Zap } from 'lucide-react';

const DevOpsSolutions = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

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
        },
        {
            icon: Cpu,
            title: "Environment Management",
            description: "Structured setup of isolated environments (Dev, UAT, Prod) with promotion pipelines and config separation for SDLC workflows."
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden pt-20">
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
                            DevOps
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Accelerate your software delivery with our end-to-end DevOps solutions, ensuring speed, reliability, and security.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DevOps Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020817]">
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
                                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group"
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
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-y border-white/10 backdrop-blur-md">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline your operations today</h2>
                    <p className="text-xl mb-8 text-purple-100">Contact us to implement cutting-edge DevOps practices.</p>
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DevOpsSolutions;
