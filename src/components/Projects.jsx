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
  Code
} from 'lucide-react';

const PROJECTS = [
  {
    id: 'fashion-hub',
    num: '01',
    title: 'FASHION HUB',
    category: 'E-COMMERCE CONCEPT',
    badge: 'CONCEPT PROTOTYPE',
    description: 'A minimalist luxury e-commerce experience tailored for modern fashion boutiques and designer apparel.',
    features: ['Curated Product Catalogue', 'Interactive Filter System', 'Rich Product Detail View', 'Slide-over Cart & Checkout Flow'],
    stack: ['React', 'Tailwind CSS', 'State Architecture', 'Responsive UI'],
    accentColor: 'from-purple-600 to-pink-600',
    icon: ShoppingBag,
    previewVisual: {
      type: 'storefront',
      headline: 'AURA COLLECTION 2025',
      items: [
        { name: 'Oversized Cyber Knit', price: '₹4,899', tag: 'NEW' },
        { name: 'Monochrome Trench', price: '₹9,499', tag: 'POPULAR' },
        { name: 'Structural Leather Tote', price: '₹6,200', tag: 'LIMITED' }
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
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/40 font-semibold tracking-wider">
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

                  {/* Mock Visual Content */}
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
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-bold group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>EXPLORE CONCEPT SPEC</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
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
              <div className="inline-block px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-700/50 text-[10px] font-mono font-bold mb-4">
                {selectedProject.badge}
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
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-glow-purple"
                >
                  Commission Similar Project
                </a>
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
