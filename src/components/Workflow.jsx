import React from 'react';
import { GitCommit, Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'Scope & Strategy',
    icon: Search,
    description: 'Understand the business, audience, brand identity, and technical project requirements to define clear milestones.',
    outputs: ['Brand & Goal Alignment', 'Architecture Mapping', 'Content Structure']
  },
  {
    step: '02',
    name: 'DESIGN',
    subtitle: 'Visual Aesthetics & UX',
    icon: PenTool,
    description: 'Create the visual direction, wireframes, typography hierarchy, and interactive prototypes tailored for user engagement.',
    outputs: ['Figma Layouts', 'Design System & Colors', 'Responsive Wireframes']
  },
  {
    step: '03',
    name: 'DEVELOP',
    subtitle: 'Code & Interactivity',
    icon: Code,
    description: 'Build responsive, interactive, and functional websites utilizing modern frontend frameworks, 3D elements, and clean backend logic.',
    outputs: ['Clean Component Code', 'Responsive Optimization', '3D / Micro-animations']
  },
  {
    step: '04',
    name: 'DELIVER',
    subtitle: 'Refinement & Launch',
    icon: Rocket,
    description: 'Rigorous cross-browser testing, performance audit, accessibility checks, and seamless deployment for public launch.',
    outputs: ['Performance Verification', 'SEO & OpenGraph Tags', 'Ready for Live Traffic']
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <GitCommit className="w-3.5 h-3.5 text-purple-400" />
            <span>05 // METHODOLOGY</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            FROM IDEA TO <span className="text-gradient-electric">INTERFACE.</span>
          </h2>
          <p className="text-[#A3A3B5] max-w-2xl text-base sm:text-lg">
            A structured, transparent development methodology focused on craftsmanship, communication, and real business results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-[2px] bg-gradient-to-r from-purple-600/30 via-violet-500/40 to-indigo-600/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORKFLOW_STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl bg-[#0B0B14]/80 border border-white/[0.08] hover:border-purple-500/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)] flex flex-col justify-between"
                >
                  <div>
                    {/* Step Milestone Badge with Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#11111E] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-glow-subtle">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-2xl font-black text-purple-400/80">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="font-display font-bold text-lg text-white tracking-wider mb-1 group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                    <div className="font-mono text-xs text-purple-400 mb-3 font-medium">
                      {item.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#A3A3B5] leading-relaxed mb-5 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Deliverable Outputs */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                    {item.outputs.map((out, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle Corner Glow */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-600/5 rounded-br-2xl pointer-events-none" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
