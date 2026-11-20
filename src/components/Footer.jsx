import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-3xl tracking-tight text-white">
                SHYAM<span className="text-purple-500">.</span>
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <p className="text-purple-400 font-semibold tracking-wider uppercase">
                Independent Creative Developer & Digital Designer.
              </p>
              <p className="text-[#A3A3B5]">
                Building Modern Digital Experiences for Businesses.
              </p>
              <p className="text-[#A3A3B5] flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>{CONTACT_CONFIG.location}.</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#A3A3B5]">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">01 // Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">02 // Behind The Code</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">03 // Tech Ecosystem</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">04 // What I Create</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">05 // Selected Works</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">06 // Start A Project</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Connect Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs font-mono">
              {/* Email link */}
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="group flex items-center gap-2.5 p-2 rounded-xl bg-[#11111A] border border-white/5 hover:border-purple-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate">{CONTACT_CONFIG.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp link */}
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-2 rounded-xl bg-[#11111A] border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{CONTACT_CONFIG.displayPhone} (WhatsApp)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto text-emerald-400 opacity-60 group-hover:opacity-100 transition-transform" />
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A3A3B5]">Warangal, Telangana</span>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11111E] border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600 transition-all font-mono text-[11px]"
                title="Scroll back to top"
              >
                <span>TOP</span>
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Auto-Updating Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} SHYAM. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-purple-400/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>shyambhukya17@gmail.com • +91 9959200960</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
