import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0A0F2D] to-[#020617] text-white"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[url('/src/assets/futuristic-lines.png')] bg-cover opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
          About Celestibia
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to Celestibia Solutions — where innovation meets precision.
          We empower businesses with smart technology, seamless design, and scalable engineering.  
          From cloud migrations & DevOps to data engineering and AI —  
          we deliver future-ready solutions with speed, security, and reliability.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Our certified engineers work closely with enterprises and startups to
          simplify complexity through automation, modern cloud infrastructure,
          and intelligent digital systems.
        </p>
      </div>
    </section>
  );
}
