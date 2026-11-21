import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ShoppingBag, 
  Utensils, 
  Box, 
  LayoutDashboard, 
  X, 
  CheckCircle, 
  ArrowUpRight,
  Eye,
  ShieldCheck,
  Code,
  Sparkles
} from 'lucide-react';

const PROJECTS = [
  {
    id: 'fashion-hub',
    num: '01',
    title: 'FASHION HUB',
    category: '3D E-COMMERCE EXPERIENCE',
    badge: 'INDEPENDENT DEMO',
    projectType: 'Independent Concept / Demo Project',
    liveUrl: 'https://fashion-hub-demo.vercel.app/',
    description: 'An immersive fashion e-commerce experience blending Indian heritage with international contemporary fashion. Featuring cinematic 3D visuals, elegant product collections and an interactive shopping experience.',
    features: [
      'Indian Heritage × International Contemporary Fashion',
      'Cinematic 3D Visuals & Fabric Simulation Engine',
      'Interactive 3D Product & Runway Experience',
      'Fluid Motion Architecture Built with GSAP & Three.js'
    ],
    stack: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'Tailwind CSS'],
    accentColor: 'from-purple-600 to-pink-600',
    icon: ShoppingBag,
    previewVisual: {
      type: 'fashion-3d',
      headline: 'fashion-hub-demo.vercel.app',
      editorialTitle: 'FASHION HUB',
      editorialSubtitle: 'INDIAN HERITAGE × CONTEMPORARY COUTURE',
      tagline: 'Cinematic 3D Visuals & Interactive Runway',
      items: [
        { name: 'Varanasi Silk Zari Kurti', price: '₹18,500', tag: '3D SILK' },
        { name: 'Sculptural Ivory Blazer', price: '₹14,200', tag: 'WEBGL' }
      ]
    }
  },
  {
    id: 'restaurant-experience',
    num: '02',
    title: 'RESTAURANT EXPERIENCE',
    category: 'HOSPITALITY WEB CONCEPT',
    badge: 'CONCEPT PROTOTYPE',
    description: 'An atmospheric digital presence for premium dining establishments, cafes, and artisanal bistros.',
    features: ['Categorized Digital Menu', 'High-Res Food Gallery Grid', 'Interactive Location Map & Hours', 'Online Reservation Enquiry'],
    stack: ['HTML5', 'Modern CSS', 'JavaScript', 'Responsive Media'],
    accentColor: 'from-amber-600 to-purple-600',
    icon: Utensils,
    previewVisual: {
      type: 'restaurant',
      headline: 'THE VELVET TABLE',
      items: [
        { name: 'Truffle Glazed Wild Mushrooms', price: '₹850', tag: 'CHEF PICK' },
        { name: 'Smoked Saffron Risotto', price: '₹920', tag: 'SIGNATURE' },
        { name: 'Artisan Dark Cacao Sphere', price: '₹550', tag: 'DESSERT' }
      ]
    }
  },
  {
    id: 'immersive-3d',
    num: '03',
    title: 'IMMERSIVE 3D WEBSITE',
    category: 'CREATIVE 3D EXPERIMENT',
    badge: 'INTERACTIVE EXPERIMENT',
    description: 'A futuristic digital experience exploring Three.js web graphics, spatial geometry, and reactive particle physics.',
    features: ['3D Geometry Rendering', 'Interactive Mouse Tracking', 'Atmospheric Particle Field', 'Cinematic Smooth Transitions'],
    stack: ['Three.js', 'WebGL', 'JavaScript', 'GLSL Fundamentals'],
    accentColor: 'from-cyan-500 to-purple-600',
    icon: Box,
    previewVisual: {
      type: '3d-spatial',
      headline: 'NEBULA DIMENSION',
      items: [
        { name: 'Dynamic Camera Rig', price: '60 FPS', tag: 'WEBGL' },
        { name: 'Particle Mesh Emitter', price: '4,000 pts', tag: 'SHADERS' },
        { name: 'Spatial Bloom Pass', price: 'High Dyn', tag: 'POST-FX' }
      ]
    }
  },
  {
    id: 'management-dashboard',
    num: '04',
    title: 'BUSINESS MANAGEMENT DASHBOARD',
    category: 'WEB APPLICATION CONCEPT',
    badge: 'CONCEPT PROTOTYPE',
    description: 'An administrative control center for businesses to oversee product catalogues, incoming client enquiries, and performance indicators.',
    features: ['Central Metrics Overview', 'Product Inventory Table', 'Customer Enquiry Tracker', 'Admin Access & Filtering'],
    stack: ['React', 'Python / Django Concept', 'REST Endpoints', 'Tailwind CSS'],
    accentColor: 'from-indigo-600 to-emerald-600',
    icon: LayoutDashboard,
    previewVisual: {
      type: 'dashboard',
      headline: 'WORKSPACE OPERATIONS',
      items: [
        { name: 'Active Orders', price: '34 Units', tag: '+14%' },
        { name: 'Enquiry Leads', price: '18 Today', tag: 'VERIFIED' },
        { name: 'Inventory Alerts', price: '2 Low Stock', tag: 'ATTN' }
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>04 // SHOWCASE</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            SELECTED DIGITAL <span className="text-gradient-electric">EXPERIENCES.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
            <p className="text-[#A3A3B5] max-w-2xl text-base sm:text-lg">
              Curated concepts and functional demonstration prototypes designed to showcase interactive capabilities.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#11111A] border border-white/10 text-xs font-mono text-[#A3A3B5]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Honest Demonstration Concepts</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            const isFashionHub = project.id === 'fashion-hub';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0B0B14]/90 border border-white/[0.08] hover:border-purple-500/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Top Corner Number */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-purple-400 font-bold">{project.num} //</span>
                    <span className="text-[10px] font-mono tracking-wider text-[#A3A3B5] uppercase">
                      {project.category}
                    </span>
                  </div>
                  <span className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 ${
                    project.liveUrl 
                      ? 'bg-purple-950/80 text-purple-200 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]' 
                      : 'bg-purple-950/60 text-purple-300 border border-purple-800/40'
                  }`}>
                    {project.liveUrl && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                    {project.badge}
                  </span>
                </div>

                {/* Simulated UI Window Preview */}
                <div className="my-6 rounded-2xl bg-[#06060A] border border-white/10 p-4 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">
                      {project.previewVisual.headline}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-purple-400" />
                  </div>

                  {/* Visual Content: Custom Editorial Silk for Fashion Hub vs Standard Grid */}
                  {project.previewVisual.type === 'fashion-3d' ? (
                    <div className="relative rounded-xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-[#2D0612] via-[#1B040B] to-[#0B0105] p-3.5 min-h-[128px] flex flex-col justify-between">
                      {/* Flowing 3D Silk Fabric SVG Background */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <svg
                          viewBox="0 0 400 160"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient id="fhSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#7E122C" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#3B0715" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#140207" stopOpacity="0.9" />
                            </linearGradient>
                            <linearGradient id="fhGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F5E4A8" />
                              <stop offset="45%" stopColor="#D4AF37" />
                              <stop offset="100%" stopColor="#99751A" />
                            </linearGradient>
                            <linearGradient id="fhIvoryGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.85" />
                              <stop offset="50%" stopColor="#E4D7C8" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#F5EBE6" stopOpacity="0.75" />
                            </linearGradient>
                            <filter id="fhGlow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="6" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          {/* Ambient Gold & Ruby Glows */}
                          <circle cx="340" cy="20" r="75" fill="#D4AF37" opacity="0.18" filter="url(#fhGlow)" />
                          <circle cx="60" cy="120" r="85" fill="#9B1537" opacity="0.25" filter="url(#fhGlow)" />

                          {/* 3D Flowing Silk Waves */}
                          <path
                            d="M-20,110 C80,60 140,135 220,85 C300,40 350,115 420,65 L420,170 L-20,170 Z"
                            fill="url(#fhSilkGrad)"
                          />
                          <path
                            d="M-30,75 C90,135 150,30 250,85 C330,125 380,50 430,90 L430,170 L-30,170 Z"
                            fill="url(#fhIvoryGrad)"
                            opacity="0.3"
                          />
                          {/* Antique Gold Silk Thread Accent Curve */}
                          <path
                            d="M-10,92 C90,40 160,120 250,70 C320,30 375,80 420,48"
                            fill="none"
                            stroke="url(#fhGoldGrad)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.9"
                          />
                          <path
                            d="M-10,99 C90,47 160,127 250,77 C320,37 375,87 420,55"
                            fill="none"
                            stroke="url(#fhGoldGrad)"
                            strokeWidth="1"
                            strokeDasharray="4 3"
                            opacity="0.6"
                          />
                        </svg>
                      </div>

                      {/* Editorial Top Line */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                            {project.previewVisual.editorialSubtitle}
                          </span>
                          <span className="font-display font-black text-xs text-[#FDFBF7] tracking-wider drop-shadow-sm">
                            {project.previewVisual.editorialTitle}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-amber-500/30 text-[9px] font-mono text-[#F5E4A8] backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>3D LIVE RUNWAY</span>
                        </span>
                      </div>

                      {/* Editorial Showcase Chips */}
                      <div className="relative z-10 grid grid-cols-2 gap-2 mt-3">
                        {project.previewVisual.items.map((item, i) => (
                          <div 
                            key={i} 
                            className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-black/50 border border-white/[0.08] backdrop-blur-md text-[10px] font-mono"
                          >
                            <span className="text-[#FDFBF7] truncate">{item.name}</span>
                            <span className="text-[#D4AF37] font-bold text-[9px] ml-1 bg-[#D4AF37]/10 px-1 py-0.5 rounded">
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Mock Visual Content for standard cards */
                    <div className="space-y-2">
                      {project.previewVisual.items.map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-center justify-between p-2 rounded-lg bg-[#0F0F1A] border border-white/[0.04] text-[11px] font-mono"
                        >
                          <span className="text-slate-200">{item.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-300 font-semibold">{item.price}</span>
                            <span className="text-[9px] bg-purple-900/40 text-purple-300 px-1.5 py-0.5 rounded font-bold">
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-wide mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A3A3B5] leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#141422] border border-purple-500/20 text-[10px] font-mono text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  {project.liveUrl ? (
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-glow-purple hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] group/live"
                      >
                        <span>VIEW LIVE DEMO</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 font-bold transition-colors py-2 px-2"
                        title="View Architecture Specification"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>SPEC</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-bold group/btn"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>EXPLORE CONCEPT SPEC</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                  <span className="text-[10px] font-mono text-slate-400">Warangal, IN</span>
                </div>

                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Modal: Interactive Concept Detail View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-[#0D0D18] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-purple-400 font-bold">{selectedProject.num} //</span>
                <span className="text-xs font-mono text-[#A3A3B5]">{selectedProject.category}</span>
              </div>
              <h3 className="font-display font-black text-3xl text-white mb-3">
                {selectedProject.title}
              </h3>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-700/50 text-[10px] font-mono font-bold mb-4">
                {selectedProject.liveUrl && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                <span>{selectedProject.badge}</span>
              </div>

              <p className="text-sm text-[#A3A3B5] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Specification Breakdown */}
              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Engineered Feature Architecture:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#141424] border border-white/5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Applied Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-purple-950/40 text-purple-300 border border-purple-800/40 font-mono text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-glow-purple transition-all"
                    >
                      <span>VIEW LIVE DEMO</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    Commission Similar Project
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-[#A3A3B5] hover:text-white"
                >
                  Close Spec
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
