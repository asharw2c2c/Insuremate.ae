import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { BrandAssets } from '../types';
import { BRAND_INFO } from '../constants';

interface HeroProps {
  assets: BrandAssets;
}

export const Hero: React.FC<HeroProps> = ({ assets }) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="text-accent font-semibold tracking-wide text-sm uppercase">UAE's Insurance Experts</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {BRAND_INFO.tagline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            We provide comprehensive insurance consulting to safeguard your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a 
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
            <a 
              href={BRAND_INFO.callLink}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full"></div>
        </div>
      </div>
    </section>
  );
};