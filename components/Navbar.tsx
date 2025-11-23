import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { BrandAssets } from '../types';
import { BRAND_INFO } from '../constants';

interface NavbarProps {
  assets: BrandAssets;
}

export const Navbar: React.FC<NavbarProps> = ({ assets }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src={assets.logo} 
            alt={BRAND_INFO.name} 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`h-6 w-px ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>

          {/* Social Icons in Header */}
          <div className="flex items-center gap-3">
             <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className={`hover:text-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}><Facebook size={18} /></a>
             <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className={`hover:text-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}><Instagram size={18} /></a>
             <a href={BRAND_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:text-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}><Linkedin size={18} /></a>
          </div>

          <a 
            href={BRAND_INFO.callLink}
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-transform hover:scale-105 ml-2"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 font-medium text-lg border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 py-2 justify-center">
               <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent"><Facebook size={24} /></a>
               <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent"><Instagram size={24} /></a>
               <a href={BRAND_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent"><Linkedin size={24} /></a>
            </div>
            <a 
              href={BRAND_INFO.callLink}
              className="bg-primary text-white text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};