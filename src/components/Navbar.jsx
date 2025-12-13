import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Industry', href: '/industry', hasDropdown: true },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
  ];

  const isLightPage = location.pathname === '/about';
  const textColor = 'text-white';
  const hoverColor = 'hover:text-blue-400';
  const logoBg = 'bg-white text-black';
  const logoText = 'text-white';
  const borderColor = 'border-white/5';

  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        borderColor,
        scrolled ? "bg-[#020817]/95 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Left Side: Logo + Nav Links */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/src/assets/logo.jpeg.png"
                alt="Celestibia Logo"
                className="w-10 h-10 object-contain rounded-md group-hover:scale-105 transition-transform"
              />
              <span className={`text-xl font-bold tracking-wide ${logoText}`}>
                Celestibia
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${textColor} ${hoverColor}`}>
                      {link.name} <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#020817] border-white/10 text-white min-w-[240px]">
                      {link.name === 'Services' && (
                        <>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer" asChild>
                            <Link to="/services/cloud-devops" className="w-full">Cloud & DevOps</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer" asChild>
                            <Link to="/services/data-ai" className="w-full">Data Engineering & AI/ML</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer" asChild>
                            <Link to="/services/application" className="w-full">Application Services</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer" asChild>
                            <Link to="/services/security" className="w-full">Security Services</Link>
                          </DropdownMenuItem>
                        </>
                      )}
                      {link.name !== 'Services' && (
                        <>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Option 1</DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Option 2</DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Option 3</DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${textColor} ${hoverColor}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <Link to="/dashboard" className={`text-sm font-medium transition-colors ${textColor} ${hoverColor}`}>
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className={`text-sm font-medium transition-colors ${textColor} ${hoverColor}`}>
                Log in
              </Link>
            )}

            <Link to="/contact">
              <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-md px-5 font-medium transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] h-9">
                Get Celestibia free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`${textColor} hover:bg-black/5`}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#020817] border-l border-white/10 text-white">
                <div className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-[#0ea5e9] transition-colors">Home</Link>
                  {navLinks.map(link => (
                    <Link key={link.name} to={link.href} className="text-lg font-medium hover:text-[#0ea5e9] transition-colors">
                      {link.name}
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 my-2" />
                  {user ? (
                    <Link to="/dashboard" className="text-lg font-medium hover:text-[#0ea5e9] transition-colors">Dashboard</Link>
                  ) : (
                    <Link to="/login" className="text-lg font-medium hover:text-[#0ea5e9] transition-colors">Log in</Link>
                  )}
                  <Link to="/contact">
                    <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white">
                      Get Celestibia free
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
