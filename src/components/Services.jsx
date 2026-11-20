import React, { useState } from 'react';
import { 
  Monitor, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  PenTool, 
  ArrowUpRight, 
  Check, 
  Zap, 
  Code2 
} from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'WEB DESIGN',
    subtitle: 'Modern & Visually Impressive',
    description: 'Bespoke, responsive, and high-impact websites tailored for businesses, retail shops, cafes, and personal brands seeking an elevated visual presence.',
    icon: Monitor,
    color: 'from-purple-600 to-indigo-600',
    tags: ['Responsive Layouts', 'Custom Typography', 'Brand Identity', 'Performance Tuned'],
    highlights: 'Crafted for local businesses, shops, and fashion boutiques that want to look distinctly premium.'
  },
  {
    num: '02',
    title: '3D WEBSITE EXPERIENCES',
    subtitle: 'Interactive & Immersive Visuals',
    description: 'Captivating web experiences powered by Three.js and WebGL. Interactive models, particle atmospheres, and spatial interactions that leave visitors in awe.',
    icon: Sparkles,
    color: 'from-violet-600 to-fuchsia-600',
    tags: ['Three.js Scenes', 'Micro-interactions', 'Depth & Lighting', 'Smooth Motion'],
    highlights: 'High visual impact with lightweight performance for studios, portfolios, and modern launches.'
  },
  {
    num: '03',
    title: 'FULL-STACK DEVELOPMENT',
    subtitle: 'Functional Web Applications',
    description: 'End-to-end web applications combining dynamic frontends with Python/Django backends, RESTful APIs, and secure database connections.',
    icon: Code2,
    color: 'from-indigo-600 to-blue-600',
    tags: ['Python / Django', 'REST APIs', 'MySQL / SQLite', 'Component Architecture'],
    highlights: 'Reliable logic handling, dashboard interfaces, data processing, and structured scalability.'
  },
  {
    num: '04',
    title: 'E-COMMERCE DEVELOPMENT',
    subtitle: 'Modern Digital Storefronts',
    description: 'Intuitive shopping experiences with clean product catalogues, category filters, interactive product details, and streamlined shopping carts.',
    icon: ShoppingBag,
    color: 'from-purple-600 to-pink-600',
    tags: ['Product Catalogues', 'Cart Workflows', 'Filter Systems', 'Mobile Commerce'],
    highlights: 'Tailored for retail boutiques, fashion brands, and local shops transitioning online.'
  },
  {
    num: '05',
    title: 'UI/UX DESIGN',
    subtitle: 'Intuitive User Journeys',
    description: 'Thoughtful user interface design and wireframing in Figma. Clean information architecture, harmonious color systems, and enjoyable interactions.',
    icon: PenTool,
    color: 'from-fuchsia-600 to-purple-600',
    tags: ['Figma Prototyping', 'Design Systems', 'User Flow Mapping', 'Design Handoff'],
    highlights: 'Bridging aesthetic beauty with user ergonomics so visitors find what they need effortlessly.'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const handleSelectService = (index) => {
    setActiveService(index);
  };

  const handleContactForService = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // pre-select dropdown if possible via custom event
      window.dispatchEvent(new CustomEvent('selectServiceOption', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            WHAT I <span className="text-gradient-electric">CREATE.</span>
          </h2>
          <p className="text-[#A3A3B5] max-w-2xl text-base sm:text-lg">
            High-standard creative web development and digital design services tailored for businesses and forward-thinking entrepreneurs.
          </p>
        </div>

        {/* Services Display: Cards Grid with Highlighted Active Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isSelected = activeService === index;

            return (
              <div
                key={service.num}
                onClick={() => handleSelectService(index)}
                className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#11111E] border-2 border-purple-500 shadow-glow-purple -translate-y-1'
                    : 'bg-[#0B0B14]/80 border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#0F0F1A]'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                    <span className="font-mono text-2xl font-black text-purple-400">
                      {service.num}
                    </span>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-glow-subtle group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-white tracking-wide mb-1 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="font-mono text-xs text-purple-400/90 font-medium mb-4">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#A3A3B5] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#161624] border border-white/5 text-[10px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Inquire Button */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#A3A3B5] group-hover:text-purple-300">
                    Start this project
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactForService(service.title);
                    }}
                    className="p-2 rounded-lg bg-purple-950/60 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-800/40 transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
