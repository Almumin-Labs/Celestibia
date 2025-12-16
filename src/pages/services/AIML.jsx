import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, MessageSquare, Image, FileText, TrendingUp, Activity, Database } from 'lucide-react';

const AIML = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const aiServices = [
        {
            icon: MessageSquare,
            title: "AI-Powered Chatbots",
            description: "Custom intelligent virtual assistants for customer support, internal tools, and lead generation — integrated with OpenAI, Dialogflow, or Rasa."
        },
        {
            icon: Brain,
            title: "Generative AI Solutions",
            description: "Implementation of models like GPT, DALL-E, and Claude for content generation, summarization, translation, and automation."
        },
        {
            icon: Cpu,
            title: "Machine Learning Model Development",
            description: "Supervised and unsupervised model training for predictions, classification, recommendation systems, and more."
        },
        {
            icon: Activity,
            title: "AI Integration Services",
            description: "Embedding AI into existing applications, CRMs, ERPs, or customer workflows."
        },
        {
            icon: Image,
            title: "Computer Vision",
            description: "Image recognition, object detection, and OCR using TensorFlow, OpenCV, and PyTorch."
        },
        {
            icon: FileText,
            title: "Natural Language Processing",
            description: "Sentiment analysis, named entity recognition, text classification, and summarization."
        },
        {
            icon: Database,
            title: "MLOps & Model Deployment",
            description: "Data pipelines, model deployment, and monitoring using MLFlow, Airflow, and SageMaker."
        },
        {
            icon: TrendingUp,
            title: "AI/ML Strategy Consulting",
            description: "Advisory on use cases, feasibility, and roadmap to adopt AI in your enterprise."
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
                            AI & Machine
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                Learning
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Empower your business with intelligent solutions. We build, deploy, and scale state-of-the-art AI and ML models tailored to your goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our AI & ML Capabilities</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aiServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group"
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Embrace the AI Revolution</h2>
                    <p className="text-xl mb-8 text-purple-100">Ready to transform your ideas into intelligent solutions?</p>
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AIML;
