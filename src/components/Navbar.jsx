import React from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO — clickable → scroll to hero */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer group">
          <img
            src={logo}
            alt="Celestibia Logo"
            className="w-16 h-16 object-contain transition group-hover:scale-110"
          />
          <span className="text-2xl font-semibold text-white">Celestibia</span>
        </a>

        {/* NAV LINKS */}
        <nav className="flex gap-8 text-white/80 font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:opacity-90 transition"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
