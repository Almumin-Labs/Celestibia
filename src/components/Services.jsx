import React from "react";
import { Cloud, Settings, Cpu } from "lucide-react"; // icons

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#050817] text-white overflow-hidden"
    >
      {/* Futuristic Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[200px] rounded-full top-10 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full bottom-10 -right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Services
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="group p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl 
                          hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300
                          animate-float">
            <Cloud className="w-14 h-14 mx-auto text-blue-400 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold mt-6">Cloud Infrastructure</h3>
            <p className="text-white/60 mt-3 leading-relaxed">
              AWS / Azure / GCP architecture, secure migration & cloud optimization.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl 
                          hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300
                          animate-float delay-200">
            <Settings className="w-14 h-14 mx-auto text-purple-400 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold mt-6">DevOps Automation</h3>
            <p className="text-white/60 mt-3 leading-relaxed">
              CI/CD pipelines, Kubernetes, IaC (Terraform) and workflow automation.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl 
                          hover:shadow-cyan-500/40 hover:-translate-y-2 transition-all duration-300
                          animate-float delay-500">
            <Cpu className="w-14 h-14 mx-auto text-cyan-400 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold mt-6">Data & AI Engineering</h3>
            <p className="text-white/60 mt-3 leading-relaxed">
              Data pipelines, analytics dashboards, ML model development & insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
