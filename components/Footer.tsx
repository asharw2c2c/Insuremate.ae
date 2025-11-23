import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { BrandAssets } from '../types';
import { BRAND_INFO } from '../constants';

interface FooterProps {
  assets: BrandAssets;
}

export const Footer: React.FC<FooterProps> = ({ assets }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={assets.logo} alt="Insuremate" className="h-12 w-auto brightness-0 invert" />
            <p className="text-slate-400 leading-relaxed">
              {BRAND_INFO.tagline}. <br/>
              Providing reliable, comprehensive, and tailored insurance solutions for individuals and businesses across the UAE.
            </p>
            <div className="flex gap-4">
              <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"><Facebook size={20} /></a>
              <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"><Instagram size={20} /></a>
              <a href={BRAND_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"><Linkedin size={20} /></a>
              <a href={BRAND_INFO.socials.threads} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors">
                {/* Lucide doesn't have Threads icon yet, simulating or using AtSign as proxy */}
                <span className="font-bold text-lg leading-none">@</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-accent transition-colors">Get a Quote</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Health Insurance</li>
              <li className="text-slate-400">Motor Insurance</li>
              <li className="text-slate-400">Life Insurance</li>
              <li className="text-slate-400">Home Insurance</li>
              <li className="text-slate-400">Workmen's Compensation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>{BRAND_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-accent shrink-0" size={20} />
                <a href={BRAND_INFO.callLink} className="hover:text-white transition-colors">{BRAND_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-accent shrink-0" size={20} />
                <a href={BRAND_INFO.emailLink} className="hover:text-white transition-colors">{BRAND_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};