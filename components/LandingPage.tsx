import React from 'react';
import { BrandAssets } from '../types';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Footer } from './Footer';
import { CheckCircle2, ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../constants';

interface LandingPageProps {
  assets: BrandAssets;
}

export const LandingPage: React.FC<LandingPageProps> = ({ assets }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar assets={assets} />
      
      <Hero assets={assets} />

      {/* About Section */}
      <section id="about" className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              <img 
                src={assets.aboutImage} 
                alt="About Insuremate" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl z-20 hidden md:block border border-slate-100 max-w-xs">
                 <p className="text-lg font-bold text-slate-900 mb-2">Trusted by Dubai's Top Companies</p>
                 <div className="h-1 w-12 bg-accent"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-accent font-bold uppercase tracking-wider mb-2">About Insuremate</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Protecting UAE’s Workforce with Care</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in Mai Tower, Al Nahda, Insuremate is your premier partner for risk management and insurance consulting. We specialize in understanding the unique needs of the UAE market.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is simple: to provide reliable, transparent, and comprehensive coverage that secures your business assets and personal well-being.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Licensed Consultants', '24/7 Claim Support', 'Corporate Specialists', 'Personalized Plans'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-slate-800 bg-slate-50 p-3 rounded-lg">
                  <CheckCircle2 className="text-accent flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services (Icon Only) */}
      <Services />

      {/* Why Choose Us */}
      <section id="why-us" className="relative py-24 bg-slate-900 text-white overflow-hidden">
        {/* Background Image for section */}
        <div className="absolute inset-0 z-0">
            <img src={assets.whyUsImage} alt="Why Choose Us" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Insuremate?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We combine local expertise with global standards to deliver the best insurance solutions in Dubai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-accent mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
              <p className="text-slate-300 leading-relaxed">Our licensed consultants provide unbiased advice tailored to your specific risk profile and budget.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-accent mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Seamless Claims</h3>
              <p className="text-slate-300 leading-relaxed">We handle the complexity of claims so you don't have to, ensuring fast and fair settlements.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-accent mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Compliance</h3>
              <p className="text-slate-300 leading-relaxed">Stay fully compliant with UAE regulations including DHA health laws and labor requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How quickly can I get a quote?", a: "We typically provide comprehensive quotes within 24 hours of receiving your details." },
              { q: "Is health insurance mandatory in Dubai?", a: "Yes, DHA regulations require all sponsors to provide health insurance for their employees and dependents." },
              { q: "What documents do I need for a claim?", a: "Generally, you need the original police report (for motor), medical report (for health), and your policy number. Contact us for specific guidance." },
              { q: "Can you handle corporate fleets?", a: "Absolutely. We specialize in fleet insurance for businesses of all sizes." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg shadow-sm border border-slate-200">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-slate-800 group-open:text-accent select-none">
                  {item.q}
                  <ChevronDown className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-slate-50 rounded-3xl overflow-hidden shadow-2xl">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px]">
               <img 
                 src={assets.contactImage} 
                 alt="Contact Us" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center p-12 text-white">
                 <h3 className="text-3xl font-bold mb-6">Let's Discuss Your Needs</h3>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent p-3 rounded-full"><Phone size={20}/></div>
                      <div>
                        <p className="text-xs text-slate-300 uppercase">Phone</p>
                        <p className="font-bold text-lg">{BRAND_INFO.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent p-3 rounded-full"><Mail size={20}/></div>
                      <div>
                        <p className="text-xs text-slate-300 uppercase">Email</p>
                        <p className="font-bold text-lg">{BRAND_INFO.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent p-3 rounded-full"><MessageCircle size={20}/></div>
                      <div>
                        <p className="text-xs text-slate-300 uppercase">WhatsApp</p>
                        <p className="font-bold text-lg">Chat with us</p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-12">
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h2>
               <form className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent outline-none bg-white" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent outline-none bg-white" placeholder="+971..." />
                    </div>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent outline-none bg-white" placeholder="email@company.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Interested In</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent outline-none bg-white">
                     <option>Health Insurance</option>
                     <option>Motor Insurance</option>
                     <option>Corporate Insurance</option>
                     <option>General Inquiry</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                   <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent outline-none bg-white" placeholder="How can we help?"></textarea>
                 </div>
                 <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors">
                   Submit Request
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      <Footer assets={assets} />

      {/* Floating WhatsApp */}
      <a 
        href={BRAND_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-pulse flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};