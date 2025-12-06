import React from "react";
import { Rocket } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      title: "1. Discovery & Requirement Analysis",
      desc: "Understanding your business needs, use-case evaluation, architecture discussions and cloud-readiness assessment."
    },
    {
      title: "2. Planning & Architecture Blueprint",
      desc: "Designing cloud, DevOps, data or AI architecture. Creating workflows, documentation, tools roadmap, timelines."
    },
    {
      title: "3. Development & Implementation",
      desc: "Building solutions: cloud infra, DevOps pipelines, data engineering, ML models, automation or application development."
    },
    {
      title: "4. Testing & Optimization",
      desc: "System testing, performance optimization, DevSecOps scanning, security validation and quality assurance."
    },
    {
      title: "5. Deployment & Monitoring",
      desc: "CI/CD rollout, cloud deployment, APM monitoring, log analytics, cost optimization and environment tuning."
    }
  ];

  return (
    <section
      id="roadmap"
      className="relative py-32 px-6 bg-[#070B1A] text-white overflow-hidden"
    >
      {/* Futuristic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-indigo-900/10 to-transparent blur-3xl" />

      {/* Heading */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Implementation <span className="gradient-text">Roadmap</span>
        </h2>
        <p className="mt-3 text-gray-400 text-lg">
          A transparent, step-by-step delivery pipeline built for speed, quality & reliability.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical neon line */}
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-300 rounded-full -translate-x-1/2 shadow-[0_0_25px_#5a4bff]"></div>

        {/* Steps */}
        <div className="space-y-24 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center md:gap-16 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Connecting Dot */}
              <div className="hidden md:block md:w-1/2 relative">
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_25px_#6b4bff] animate-pulse"></div>
              </div>

              {/* Card */}
              <div
                className="md:w-1/2 bg-white/5 border border-white/10
                backdrop-blur-xl p-8 rounded-2xl shadow-lg 
                hover:shadow-[0_0_35px_#5a4bff80] hover:-translate-y-1 
                transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}

          {/* 🚀 Final Success Node */}
          <div className="flex justify-center mt-20 relative">
            {/* Glowing Dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 shadow-[0_0_45px_#6b4bff] flex items-center justify-center">
              <Rocket className="text-white w-6 h-6" />
            </div>

            <p className="mt-20 text-xl font-semibold text-center">
              Your solution is successfully delivered <span className="text-purple-400">🚀</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
