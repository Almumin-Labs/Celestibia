import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const caseStudies = [
        {
            title: "FinTech App Modernization & Compliance Automation",
            industry: "Financial Services & FinTech",
            client: "Digital Payments & Lending Platform (Middle East)",
            challenge: "A rapidly scaling FinTech startup faced performance bottlenecks with legacy infrastructure. Their manual deployment process led to delayed app releases and operational inefficiencies. Additionally, they needed to meet PCI-DSS compliance requirements within 2 months.",
            solution: {
                "Cloud Migration & Infrastructure Modernization": "Lift-and-shift from on-prem to AWS, rearchitected as microservices on Amazon EKS.",
                "DevOps & DevSecOps": "CI/CD pipelines using GitLab, infrastructure as code with Terraform, image scanning, and secrets management.",
                "Mobile & Web App Deployment Automation": "Automated app releases to Google Play Store and Apple App Store with version control and rollback.",
                "Cloud Security & Compliance": "Implemented AWS WAF, GuardDuty, IAM roles, Config rules, and VPC-based network segregation.",
                "Managed Services": "24/7 monitoring, patch management, and cost optimization using auto-scaling and spot instances."
            },
            impact: [
                "Deployment time dropped from 3 hours to 15 minutes.",
                "PCI-DSS compliance achieved within the deadline.",
                "35% reduction in monthly AWS bill.",
                "Zero downtime during rollouts with blue-green deployment."
            ]
        },
        {
            title: "Real-Time Health Data Platform for Diagnostics",
            industry: "Healthcare",
            client: "Remote Health Monitoring Platform (India)",
            challenge: "The client’s monolithic backend couldn't scale for real-time ingestion of health data from wearable devices. They lacked a data pipeline, analytics engine, and compliance with HIPAA and local data privacy laws.",
            solution: {
                "Application Modernization": "Broke monolith into event-driven microservices using Node.js, deployed on EKS and Lambda.",
                "Data Engineering & Science": "Built a data pipeline using Kinesis, Glue, and Redshift for storage and analytics. Integrated predictive models using SageMaker.",
                "DevOps & Cloud Infrastructure": "Multi-stage CI/CD with GitHub Actions and Helm deployments across Dev/UAT/Prod environments.",
                "Cloud Security": "Enabled encryption at rest and transit, RBAC with IAM, CloudTrail auditing, and token-based access for APIs.",
                "Managed Services": "Monitoring using Prometheus/Grafana stack, alerting, backup automation, and on-call support."
            },
            impact: [
                "Achieved <5 seconds latency for real-time health alerts.",
                "Enabled early health event prediction in 40% of critical cases.",
                "Scaled from 1K to 50K+ daily users with zero performance lag.",
                "HIPAA-compliant, secure, and audit-ready platform."
            ]
        },
        {
            title: "Seamless SaaS Platform Scaling with Cloud Optimization",
            industry: "Enterprise SaaS",
            client: "CRM & Workflow Automation Platform (Singapore/APAC)",
            challenge: "Client’s platform suffered frequent downtime during deployments, lacked cost visibility, and had no rollback strategy. Their Dev, UAT, and Prod environments were misaligned, causing repeated bugs.",
            solution: {
                "DevOps as a Service": "Designed GitOps architecture with ArgoCD, Helm, and GitLab CI to manage versioned deployments per environment.",
                "Cloud Infrastructure": "Migrated to Amazon EKS, set up separate node groups and namespaces for Dev/UAT/Prod isolation.",
                "Cloud Cost Optimization": "Deployed savings plans, right-sized instances, used auto-scaling and Spot instances to cut waste.",
                "Monitoring & Observability": "Centralized logs with ELK, integrated CloudWatch Dashboards and alerts via Slack and PagerDuty.",
                "Managed Services": "Monthly architecture reviews, cost tracking dashboards, and preventive maintenance tasks."
            },
            impact: [
                "Reduced production incidents by 80%.",
                "Deployment speed improved by 4x with rollback capability.",
                "Cut cloud spend by 40% in just 8 weeks.",
                "Enabled the client to onboard 3x more customers with no performance issues."
            ]
        },
        {
            title: "Edutech App Deployment Automation for Global Rollout",
            industry: "Edutech",
            client: "E-learning Platform for Students & Teachers (Global)",
            challenge: "The client had a fragmented release process. Mobile app releases were manual, causing delays and inconsistencies across Android and iOS. Their backend was hosted on traditional VPS, limiting scalability and performance.",
            solution: {
                "Cloud Migration": "Migrated from VPS to Amazon EKS with separate Dev, UAT, and Prod environments. Implemented Route 53 and CloudFront for global traffic management and CDN caching.",
                "WebApp Deployment Automation": "Used Docker, GitHub Actions, and Helm for seamless deployments with blue-green strategy.",
                "Mobile App Deployment Automation": "Built CI/CD pipelines using Fastlane to automate releases to Play Store and App Store with build versioning, automated screenshots, and changelog generation.",
                "Analytics Integration": "Integrated Amazon Pinpoint and Redshift for user engagement analytics and personalized notifications.",
                "Managed Services": "Set up 24/7 monitoring, automated backups, and domain configuration."
            },
            impact: [
                "App deployment time reduced from 2 hours to 10 minutes.",
                "Achieved 99.9% uptime with autoscaling and CDN caching.",
                "Improved app engagement by 30% through personalized push notifications.",
                "Enabled consistent, error-free rollouts across platforms."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden pt-20 font-sans">

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Visual Globe/Grid Element inspired by reference image */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -left-40 top-20 w-[600px] h-[600px] rounded-full border border-blue-500/30 transform rotate-12"></div>
                    <div className="absolute -left-32 top-28 w-[500px] h-[500px] rounded-full border border-blue-500/30 transform -rotate-12"></div>
                    <div className="absolute -left-20 top-40 w-[400px] h-[400px] rounded-full border border-blue-500/20"></div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-left"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-2">Celestibia Solutions</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                            Business <br />
                            <span className="text-white">Case Study</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-lg mb-8">
                            Innovative cloud solutions for a connected world
                        </p>

                        <div className="inline-block bg-blue-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl px-6 py-3">
                            <span className="text-blue-200 font-medium">Presented by Shitalkumar</span>
                        </div>
                    </motion.div>

                    {/* Abstract visual on right could be added here if needed */}
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden">
                                <CardHeader className="border-b border-white/10 pb-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <Badge variant="outline" className="mb-2 text-blue-400 border-blue-500/30">{study.industry}</Badge>
                                            <CardTitle className="text-2xl md:text-3xl text-white mt-2">{study.title}</CardTitle>
                                            <CardDescription className="text-lg text-gray-400 mt-2">Client: {study.client}</CardDescription>
                                        </div>
                                        <div className="text-6xl font-black text-white/20">0{index + 1}</div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-8 space-y-8">
                                    {/* Challenge */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-red-500 rounded-full"></span> Challenge
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed pl-3 border-l border-white/5">{study.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-blue-500 rounded-full"></span> Celestibia’s Solution
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-6 pl-3">
                                            {Object.entries(study.solution).map(([key, value], i) => (
                                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                                                    <h5 className="font-medium text-blue-300 mb-2">{key}</h5>
                                                    <p className="text-sm text-gray-400">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Business Impact */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-green-500 rounded-full"></span> Business Impact
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4 pl-3">
                                            {study.impact.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-gray-300">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default CaseStudies;
