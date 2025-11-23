import React from 'react';
import { ShieldCheck, Heart, Car, Home, HardHat, Briefcase } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Health Insurance",
      description: "DHA-compliant medical coverage for individuals, families, and corporates.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Life Insurance",
      description: "Secure your family's financial future with flexible term and whole life plans.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Motor Insurance",
      description: "Comprehensive and third-party car insurance with reliable accident support.",
      icon: <Car className="w-8 h-8" />
    },
    {
      title: "Home Insurance",
      description: "Protection for your building and contents against fire, theft, and damages.",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Workmen’s Compensation",
      description: "Mandatory coverage protecting employees against work-related injuries.",
      icon: <HardHat className="w-8 h-8" />
    },
    {
      title: "Corporate Solutions",
      description: "Tailored business liabilities, property, and fleet insurance for enterprises.",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Comprehensive Protection</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-accent/30 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-accent hover:text-slate-900 uppercase tracking-wide">
                Get Quote <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};