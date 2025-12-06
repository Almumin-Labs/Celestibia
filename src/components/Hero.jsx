import React from "react";
import "../index.css"; // for animations

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl fade-up">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="gradient-text">Innovative cloud solutions</span>
          <br />
          <span className="text-white/90">for a connected world</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Celestibia Solutions builds cloud, DevOps, data and AI systems that scale with precision, speed, and security.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-3 rounded-full text-white font-semibold 
            bg-gradient-to-r from-[#6a00ff] to-[#3a7bff] shadow-lg 
            hover:shadow-purple-500/40 hover:scale-[1.02] transition-transform"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30
             bg-white/10 text-white backdrop-blur-xl font-semibold
             hover:bg-white/20 hover:border-white/40 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
