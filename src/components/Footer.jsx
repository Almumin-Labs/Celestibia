import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpeg.png';
import { cn } from "@/lib/utils";

const Footer = () => {
  const location = useLocation();
  const isLightPage = location.pathname === '/profile' || location.pathname === '/about';

  // Dynamic Theme Classes
  // On light pages (like Profile), we use a solid dark background so the white text is visible.
  // On dark pages (Home), we use transparent background so it blends.
  const theme = {
    bg: isLightPage ? "bg-[#020817] border-t border-gray-800" : "bg-transparent border-t border-gray-800",
    textMain: "text-gray-400",
    textHover: "hover:text-white",
    heading: "text-white",
    subHeading: "text-gray-400",
    border: "border-gray-800",
    bottomText: "text-gray-500",
    buttonBg: "bg-white text-black hover:bg-gray-200"
  };

  return (
    <footer className={cn("relative z-50 pt-16 pb-8 text-left transition-colors duration-300", theme.bg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 overflow-hidden">
                <img src={logo} alt="Celestibia" className="h-full w-full object-cover" />
              </div>
              <h3 className={cn("text-xl font-bold", theme.heading)}>Let's Chat</h3>
            </div>
            <p className={cn("leading-relaxed text-sm", theme.textMain)}>
              We are passionate about building scalable cloud solutions and modernizing infrastructure. Let's work together to transform your business with technology.
            </p>
            <Link to="/contact">
              <Button className={cn("font-medium rounded-lg px-6 mt-8", theme.buttonBg)}>
                Schedule a call
              </Button>
            </Link>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h4 className={cn("text-sm font-bold uppercase tracking-wider", theme.subHeading)}>Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/cloud" className={cn("transition-colors", theme.textMain, theme.textHover)}>Cloud Services</Link></li>
              <li><Link to="/services/devops" className={cn("transition-colors", theme.textMain, theme.textHover)}>DevOps Solutions</Link></li>
              <li><Link to="/services/data-engineering" className={cn("transition-colors", theme.textMain, theme.textHover)}>Data Engineering</Link></li>
              <li><Link to="/services/ai-ml" className={cn("transition-colors", theme.textMain, theme.textHover)}>AI & Machine Learning</Link></li>
              <li><Link to="/services/application" className={cn("transition-colors", theme.textMain, theme.textHover)}>Application Services</Link></li>
              <li><Link to="/services/security" className={cn("transition-colors", theme.textMain, theme.textHover)}>Security Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="space-y-6">
            <h4 className={cn("text-sm font-bold uppercase tracking-wider", theme.subHeading)}>Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className={cn("flex items-center gap-2 transition-colors", theme.textMain, theme.textHover)}>
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className={cn("flex items-center gap-2 transition-colors", theme.textMain, theme.textHover)}>
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className={cn("flex items-center gap-2 transition-colors", theme.textMain, theme.textHover)}>
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className={cn("text-sm font-bold uppercase tracking-wider", theme.subHeading)}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919156680961" className={cn("flex items-center gap-2 transition-colors", theme.textMain, theme.textHover)}>
                  <Phone className="h-4 w-4" /> +91 9156680961
                </a>
              </li>
              <li>
                <a href="mailto:hello@celestibia.com" className={cn("flex items-center gap-2 transition-colors", theme.textMain, theme.textHover)}>
                  <Mail className="h-4 w-4" /> hello@celestibia.com
                </a>
              </li>
              <li>
                <div className={cn("flex items-center gap-2", theme.textMain)}>
                  <MapPin className="h-4 w-4" /> Pune, India • IST
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn("pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-t", theme.border, theme.bottomText)}>
          <p>© {new Date().getFullYear()} Celestibia Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className={cn("transition-colors", theme.textHover)}>Terms and Conditions</a>
            <a href="#" className={cn("transition-colors", theme.textHover)}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
