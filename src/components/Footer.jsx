import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpeg.png';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-800 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 overflow-hidden">
                <img src={logo} alt="Celestibia" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">Let's Chat</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are passionate about building scalable cloud solutions and modernizing infrastructure. Let's work together to transform your business with technology.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-6 mt-8">
                Schedule a call
              </Button>
            </Link>
          </div>

          {/* Column 2: Services (Replaced 'Portfolio' from ref) */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/services/devops" className="text-gray-400 hover:text-white transition-colors">DevOps Solutions</Link></li>
              <li><Link to="/services/data-engineering" className="text-gray-400 hover:text-white transition-colors">Data Engineering</Link></li>
              <li><Link to="/services/ai-ml" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</Link></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919156680961" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" /> +91 9156680961
                </a>
              </li>
              <li>
                <a href="mailto:hello@celestibia.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> hello@celestibia.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" /> Pune, India • IST
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Celestibia Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
