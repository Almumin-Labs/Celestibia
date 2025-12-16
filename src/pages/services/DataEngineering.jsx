import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart, Activity, FileText, TrendingUp } from 'lucide-react';

const DataEngineering = () => {
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
                            Data
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                                Engineering
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Turn raw data into valuable insights. We help organizations build modern data platforms and unlock the power of their data.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Data Engineering */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Data Engineering Services</h2>
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
                                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group"
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
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
                                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group"
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

            {/* CTA Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-y border-white/10 backdrop-blur-md">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Build a data-driven future</h2>
                    <p className="text-xl mb-8 text-green-100">Partner with us to engineer robust data systems.</p>
                    <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DataEngineering;
