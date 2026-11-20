import React from 'react';
import { Compass, Lightbulb, Code2, Sparkles, MapPin, Target, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>01 // IDENTITY</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            BEHIND THE <span className="text-gradient-electric">CODE.</span>
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-slate-100 leading-snug">
              I'm <span className="font-bold text-white text-gradient-purple">Shyam</span>, an aspiring independent creative developer passionate about building modern websites, interactive experiences and useful digital solutions.
            </p>

            <div className="space-y-6 text-base sm:text-lg text-[#A3A3B5] leading-relaxed font-normal">
              <p>
                I enjoy combining creativity, technology and design to transform ideas into beautiful digital products. For me, web development isn't just writing syntax—it's crafting an unforgettable virtual environment where digital design meets functional business utility.
              </p>
              <p>
                I am continuously learning and improving my skills in frontend development, backend development, UI/UX and interactive 3D web experiences. Whether working with local businesses, startups, or international clients, my objective is always the same: delivering digital presence that looks distinct, works seamlessly, and leaves an impression.
              </p>
            </div>

            {/* Credo / Philosophy Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#11111A]/80 border border-white/[0.06] backdrop-blur-sm">
                <Lightbulb className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="font-mono text-sm font-semibold text-white">Creative Vision</h4>
                <p className="text-xs text-[#A3A3B5] mt-1">Daring layouts and custom interactions that stand out.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#11111A]/80 border border-white/[0.06] backdrop-blur-sm">
                <Code2 className="w-5 h-5 text-violet-400 mb-2" />
                <h4 className="font-mono text-sm font-semibold text-white">Clean Structure</h4>
                <p className="text-xs text-[#A3A3B5] mt-1">Modern frameworks, semantic code, and solid fundamentals.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#11111A]/80 border border-white/[0.06] backdrop-blur-sm">
                <Target className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-mono text-sm font-semibold text-white">Business Focus</h4>
                <p className="text-xs text-[#A3A3B5] mt-1">Built to help shops, brands, and startups grow online.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Profile Card & Quick Info */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0B0B14] border border-purple-500/30 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header with Glowing Status */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500 shadow-glow-purple" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    DEVELOPER DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded border border-purple-800/40">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 py-5 text-sm font-mono">
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-[#A3A3B5]">NAME</span>
                  <span className="text-white font-semibold">Shyam</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-[#A3A3B5]">ROLE</span>
                  <span className="text-purple-300 font-semibold text-right">Creative Developer</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-[#A3A3B5]">LOCATION</span>
                  <span className="text-slate-200 flex items-center gap-1.5 text-right">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {CONTACT_CONFIG.location}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-[#A3A3B5]">FOCUS</span>
                  <span className="text-slate-200 text-right">Interactive Web & 3D</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-[#A3A3B5]">AVAILABILITY</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Open for Projects
                  </span>
                </div>
              </div>

              {/* Honest Self-Statement Badge */}
              <div className="mt-2 p-3.5 rounded-xl bg-purple-950/30 border border-purple-600/30 text-xs text-purple-200/90 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold text-purple-300 mb-1">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>TRANSPARENT COMMITMENT</span>
                </div>
                <span>
                  I represent my current abilities with honesty: developing every day with passion, building real prototypes, and committed to high standards for every partner.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
