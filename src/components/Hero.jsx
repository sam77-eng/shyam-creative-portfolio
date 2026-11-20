import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code, Cpu, MessageSquare } from 'lucide-react';
import LaptopWorkspace from './LaptopWorkspace';
import { CONTACT_CONFIG } from '../config/contact';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE: Typography, Taglines & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">

            {/* Hacker/Studio System Identifier Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11111A]/80 border border-purple-500/30 backdrop-blur-md w-fit shadow-glow-subtle">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="font-mono text-xs text-purple-300 tracking-wider uppercase font-semibold">
                Creative Engineering & Web Design
              </span>
            </div>

            {/* MAIN NAME: SHYAM. in Extreme Monumental Typography */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-6xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-none">
                <span className="text-gradient-purple drop-shadow-[0_10px_25px_rgba(139,92,246,0.3)]">
                  SHYAM
                </span>
                <span className="text-purple-500 animate-pulse">.</span>
              </h1>

              {/* Sub-headline */}
              <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-200 uppercase leading-snug">
                INDEPENDENT<br />
                <span className="text-gradient-electric font-extrabold">CREATIVE DEVELOPER.</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A3A3B5] max-w-xl font-normal leading-relaxed">
              I design and build modern digital experiences, interactive websites and powerful web applications for businesses.
            </p>

            {/* Multi-Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Explore My Work CTA */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden shadow-glow-purple hover:shadow-glow-violet transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Let's Talk CTA (Smoothly Scrolls to Contact Section) */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#11111A]/90 hover:bg-[#181826] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider border border-white/10 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Separate Direct WhatsApp Button */}
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wider border border-emerald-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Professional Availability Indicator */}
            <div className="pt-2 flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
                {CONTACT_CONFIG.availabilityStatus}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-purple-400/60">•</span>
              <span className="hidden sm:inline-block text-xs font-mono text-[#A3A3B5]">
                {CONTACT_CONFIG.location}
              </span>
            </div>

            {/* Secondary Motto Quote */}
            <div className="border-l-2 border-purple-500/40 pl-4 py-1 text-xs font-mono text-[#A3A3B5]/80">
              <span className="text-purple-400">"</span>Designing. Developing. Creating Beyond Limits.<span className="text-purple-400">"</span>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Laptop Workspace Visual Centerpiece */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <LaptopWorkspace />
          </div>

        </div>
      </div>
    </section>
  );
}
