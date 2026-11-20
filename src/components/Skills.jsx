import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  Box, 
  Cpu, 
  Sparkles, 
  Layers, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    icon: Code,
    color: 'from-purple-500 to-indigo-600',
    description: 'Constructing modern, responsive user interfaces and fluid web layouts.',
    skills: [
      { name: 'HTML5', tag: 'Semantic Markup', status: 'Core Stack' },
      { name: 'CSS3', tag: 'Modern Styling & Grid', status: 'Core Stack' },
      { name: 'JavaScript', tag: 'ES6+ & DOM Logic', status: 'Active Focus' },
      { name: 'Responsive Web Design', tag: 'Mobile-First Layouts', status: 'Core Stack' },
      { name: 'Interactive Interfaces', tag: 'Micro-interactions', status: 'Active Focus' },
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND DEVELOPMENT',
    icon: Server,
    color: 'from-violet-500 to-purple-700',
    description: 'Server architecture, logic handling, and endpoint routing.',
    skills: [
      { name: 'Python', tag: 'Core Programming', status: 'Active Focus' },
      { name: 'Django', tag: 'Web Framework', status: 'Learning & Building' },
      { name: 'REST API Fundamentals', tag: 'Endpoint Architecture', status: 'Practicing' },
    ]
  },
  {
    id: 'database',
    title: 'DATABASE SYSTEMS',
    icon: Database,
    color: 'from-indigo-500 to-blue-600',
    description: 'Data persistence, relational models, and query manipulation.',
    skills: [
      { name: 'MySQL', tag: 'Relational Database', status: 'Active Focus' },
      { name: 'SQL Fundamentals', tag: 'Queries & Schemas', status: 'Practicing' },
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & CREATIVE DESIGN',
    icon: Palette,
    color: 'from-pink-500 to-purple-600',
    description: 'Visual identity, prototyping, wireframing, and user journeys.',
    skills: [
      { name: 'Figma', tag: 'Interface Prototyping', status: 'Design Tool' },
      { name: 'UI/UX Design', tag: 'User Journey & Systems', status: 'Active Focus' },
      { name: 'Web Design', tag: 'Typography & Layouts', status: 'Core Stack' },
      { name: 'Visual Design', tag: 'Aesthetic Direction', status: 'Core Stack' },
    ]
  },
  {
    id: 'threeD',
    title: '3D & INTERACTIVE TECHNOLOGY',
    icon: Box,
    color: 'from-cyan-500 to-purple-600',
    description: 'Immersive spatial elements, 3D scenes, and WebGL graphics.',
    skills: [
      { name: 'Three.js', tag: '3D Scene Rendering', status: 'Active Exploration' },
      { name: 'WebGL Fundamentals', tag: 'Hardware Graphics', status: 'Foundational' },
      { name: '3D Web Experiences', tag: 'Canvas Interactions', status: 'Active Focus' },
      { name: 'Unity Exploration', tag: 'Real-time 3D Spaces', status: 'Learning' },
    ]
  },
  {
    id: 'workflow',
    title: 'DEVELOPER WORKFLOW',
    icon: Cpu,
    color: 'from-purple-600 to-emerald-600',
    description: 'Version control, developer toolchains, and productivity setups.',
    skills: [
      { name: 'Git', tag: 'Version Control', status: 'Essential' },
      { name: 'GitHub', tag: 'Repository Collaboration', status: 'Essential' },
      { name: 'VS Code', tag: 'Custom Environment', status: 'Daily Driver' },
      { name: 'Development Tools', tag: 'Modern Toolchains', status: 'Active Focus' },
    ]
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>02 // ECOSYSTEM</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            INTERACTIVE <span className="text-gradient-electric">TECH ECOSYSTEM.</span>
          </h2>
          <p className="text-[#A3A3B5] max-w-2xl text-base sm:text-lg">
            Technologies, frameworks, and creative design tools I actively practice and use to build digital solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                : 'bg-[#11111A] text-[#A3A3B5] hover:text-white border border-white/5'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-glow-purple font-bold'
                  : 'bg-[#11111A] text-[#A3A3B5] hover:text-white border border-white/5'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-[#0B0B14]/80 border border-white/[0.08] hover:border-purple-500/40 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.25)] hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-wider text-white">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#A3A3B5]">
                        {category.skills.length} core elements
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#A3A3B5] mb-5 leading-relaxed font-sans">
                  {category.description}
                </p>

                {/* Skill List with Honest Status Tags */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#11111A]/90 border border-white/[0.04] group-hover:border-purple-500/20 transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-[#A3A3B5]">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/40 font-medium whitespace-nowrap">
                        {skill.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom subtle glow corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-br-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Note on honest learning & proficiency */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#A3A3B5]">
            <span className="text-purple-400 font-bold">TRANSPARENCY NOTE:</span> All technologies are areas I actively practice, study, and apply in real codebases and prototypes.
          </p>
        </div>

      </div>
    </section>
  );
}
