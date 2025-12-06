import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <main>
        <Hero />
        
        <About />
        <StatsStrip />
        
        <Services />
        <Roadmap />
        
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
