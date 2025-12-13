import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart, Brain, Cpu, Activity, TrendingUp, MessageSquare, Image, FileText } from 'lucide-react';

const DataAI = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const dataEngineering = [
        {
            icon: Database,
            title: "Data Pipeline Development",
            description: "ETL/ELT pipelines using Apache Airflow, DBT, Spark, Glue, and more."
        },
        {
            icon: BarChart,
            title: "Data Warehousing",
            description: "Design and implementation using Snowflake, Redshift, BigQuery, and Azure Synapse."
        },
        {
            icon: Activity,
            title: "Real-Time Data Processing",
            description: "Kafka, Flink, and Kinesis for streaming analytics."
        },
        {
            icon: Database,
            title: "Data Lakes",
            description: "Scalable storage with Lakehouse architecture (Delta Lake, Iceberg)."
        },
        {
            icon: FileText,
            title: "Data Governance & Quality",
            description: "Cataloging, lineage, and validation tools like Great Expectations and DataHub."
        }
    ];

    const dataScience = [
        {
            icon: TrendingUp,
            title: "Predictive Modeling",
            description: "Build machine learning models for forecasting, classification, and recommendation systems."
        },
        {
            icon: BarChart,
            title: "Business Intelligence",
            description: "Custom dashboards using Power BI, Tableau, and Looker."
        },
        {
            icon: Activity,
            title: "Statistical Analysis",
            description: "Hypothesis testing, regression analysis, and data storytelling."
        },
        {
            icon: Database,
            title: "Data Strategy Consulting",
            description: "Architecture, tooling, and capability roadmap for enterprise data success."
        }
    ];

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
            title: "Data Engineering & Model Ops",
            description: "Data pipelines, model deployment, and monitoring using MLFlow, Airflow, and SageMaker."
        },
        {
            icon: TrendingUp,
            title: "AI/ML Strategy Consulting",
            description: "Advisory on use cases, feasibility, and roadmap to adopt AI in your enterprise."
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
                            Data Engineering &
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                AI/ML Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Turn raw data into valuable insights and intelligent actions. We help organizations build
                            modern data platforms and unlock the power of analytics and AI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Data Engineering */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Data Engineering</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dataEngineering.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Science & Analytics */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Data Science & Analytics</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {dataScience.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group"
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

            {/* AI & ML Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">AI & ML Services</h2>
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
                                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group"
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to unlock the power of data and AI?</h2>
                    <p className="text-xl mb-8 text-green-100">Contact us to transform your data into intelligent insights.</p>
                    <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DataAI;
