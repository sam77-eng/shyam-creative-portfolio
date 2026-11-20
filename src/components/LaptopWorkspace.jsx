import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Maximize2, 
  RotateCw, 
  Sparkles, 
  Cpu, 
  GitBranch, 
  Play, 
  CheckCircle2,
  Database,
  Globe,
  ExternalLink
} from 'lucide-react';

const CODE_SNIPPETS = {
  react: [
    { line: 1, text: '// Shyam - Creative Developer Architecture', color: 'text-slate-500 italic' },
    { line: 2, text: 'import { createExperience } from "@shyam/core";', color: 'text-purple-400' },
    { line: 3, text: 'import { ThreeScene, QuantumCanvas } from "three";', color: 'text-purple-400' },
    { line: 4, text: '', color: 'text-white' },
    { line: 5, text: 'export default function FuturisticExperience() {', color: 'text-blue-400' },
    { line: 6, text: '  const canvas = useCanvas({ atmosphere: "cinematic" });', color: 'text-cyan-300' },
    { line: 7, text: '  const vision = "Designing Beyond Conventional Limits";', color: 'text-emerald-400' },
    { line: 8, text: '  return (', color: 'text-indigo-300' },
    { line: 9, text: '    <Experience glow="#8B5CF6" client="Empowering Businesses">', color: 'text-pink-400' },
    { line: 10, text: '      <DigitalFuture interactive={true} />', color: 'text-purple-300' },
    { line: 11, text: '    </Experience>', color: 'text-pink-400' },
    { line: 12, text: '  );', color: 'text-indigo-300' },
    { line: 13, text: '}', color: 'text-blue-400' },
  ],
  css: [
    { line: 1, text: '/* Futuristic Cyber Lighting Engine */', color: 'text-slate-500 italic' },
    { line: 2, text: '.digital-sanctuary {', color: 'text-pink-400' },
    { line: 3, text: '  background: #050507;', color: 'text-cyan-300' },
    { line: 4, text: '  box-shadow: 0 0 50px rgba(139, 92, 246, 0.45);', color: 'text-emerald-300' },
    { line: 5, text: '  backdrop-filter: blur(24px);', color: 'text-purple-400' },
    { line: 6, text: '  border: 1px solid rgba(168, 85, 247, 0.3);', color: 'text-cyan-300' },
    { line: 7, text: '}', color: 'text-pink-400' },
  ],
  terminal: [
    { text: '➜ shyam-studio git:(main) vite dev', type: 'cmd' },
    { text: '  VITE v5.3.1  ready in 182 ms', type: 'info' },
    { text: '  ➜  Local:   http://localhost:3000/', type: 'url' },
    { text: '  ➜  Network: use --host to expose', type: 'dim' },
    { text: '  [3D Engine] Shaders compiled: 100% OK', type: 'success' },
    { text: '  [HMR] Real-time rendering active...', type: 'active' },
  ]
};

export default function LaptopWorkspace() {
  const [activeTab, setActiveTab] = useState('react');
  const [activeView, setActiveView] = useState('split'); // 'split' | 'editor' | 'preview'
  const [typedLines, setTypedLines] = useState(CODE_SNIPPETS.react.length);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse tilt parallax for desktop
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16; // tilt
    setPointerPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPointerPos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] lg:max-w-[700px] mx-auto perspective-[1400px] select-none"
    >
      {/* Dynamic Purple Atmosphere Rim Glow Behind Laptop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-violet-500/25 to-indigo-600/20 blur-3xl rounded-full pointer-events-none transform -translate-y-6" />

      {/* Floating Tech Badges in 3D Space */}
      <div className="hidden sm:block absolute -top-8 -left-6 z-20 animate-float-slow">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#11111A]/90 border border-purple-500/30 backdrop-blur-md shadow-glow-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-purple-300 font-semibold tracking-wide">React 18 • Three.js</span>
        </div>
      </div>

      <div className="hidden sm:block absolute -top-4 -right-6 z-20 animate-float-slow" style={{ animationDelay: '2.5s' }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#11111A]/90 border border-violet-500/30 backdrop-blur-md shadow-glow-subtle">
          <GitBranch className="w-3.5 h-3.5 text-violet-400" />
          <span className="font-mono text-[11px] text-violet-300 font-semibold">Python • Django</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-12 -left-12 z-20 animate-float-slow" style={{ animationDelay: '1.2s' }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#11111A]/90 border border-indigo-500/30 backdrop-blur-md shadow-glow-subtle">
          <Database className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-mono text-[11px] text-indigo-300 font-semibold">MySQL • REST APIs</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-10 -right-10 z-20 animate-float-slow" style={{ animationDelay: '3.8s' }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#11111A]/90 border border-cyan-500/30 backdrop-blur-md shadow-glow-subtle">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono text-[11px] text-cyan-300 font-semibold">3D Web Experiences</span>
        </div>
      </div>

      {/* 3D LAPTOP CONTAINER WITH SMOOTH INTERACTIVE TRANSFORM */}
      <div 
        className="relative transition-transform duration-300 ease-out transform-gpu"
        style={{
          transform: `rotateY(${pointerPos.x * 0.6}deg) rotateX(${pointerPos.y * 0.6 + 6}deg) translateZ(0)`
        }}
      >
        {/* LAPTOP DISPLAY LID */}
        <div className="relative mx-auto w-[92%] sm:w-[94%] rounded-t-2xl p-[3px] bg-gradient-to-b from-[#2a2a3e] via-[#161622] to-[#0d0d14] shadow-[0_25px_60px_-15px_rgba(139,92,246,0.35)] border border-purple-500/30">
          
          {/* Metal Bezel */}
          <div className="relative rounded-t-[14px] bg-[#0A0A10] p-2 sm:p-3 border border-white/10 overflow-hidden">
            
            {/* Top Webcam Notch & Sensor Dot */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700 relative">
                <span className="absolute inset-0.5 rounded-full bg-emerald-500/80 animate-ping opacity-75" />
              </div>
              <div className="w-1 h-1 rounded-full bg-purple-500/60" />
            </div>

            {/* SCREEN GLASS & CONTENT */}
            <div className="relative rounded-lg overflow-hidden bg-[#06060A] border border-white/5 shadow-inner">
              
              {/* VS Code Window Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#0E0E18] border-b border-white/[0.06] text-xs font-mono">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
                </div>

                {/* Editor Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeTab === 'react' 
                        ? 'bg-[#181828] text-purple-300 font-semibold border-b border-purple-500' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    <span>Experience.jsx</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('css')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeTab === 'css' 
                        ? 'bg-[#181828] text-purple-300 font-semibold border-b border-purple-500' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3 h-3 text-pink-400" />
                    <span>cyber.css</span>
                  </button>
                </div>

                {/* Split / View Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveView(activeView === 'split' ? 'editor' : activeView === 'editor' ? 'preview' : 'split')}
                    className="text-[10px] uppercase tracking-wider text-purple-400 hover:text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40"
                    title="Toggle Layout"
                  >
                    {activeView} view
                  </button>
                </div>
              </div>

              {/* SCREEN BODY: Dual Workspace (Code on Left, Live Browser Preview on Right) */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] sm:min-h-[260px] text-[11px] font-mono">
                
                {/* CODE EDITOR PANEL */}
                {(activeView === 'split' || activeView === 'editor') && (
                  <div className={`${activeView === 'split' ? 'md:col-span-7' : 'md:col-span-12'} p-3 bg-[#08080E] flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.06]`}>
                    <div className="space-y-1">
                      {CODE_SNIPPETS[activeTab].map((snippet) => (
                        <div key={snippet.line} className="flex items-start gap-2.5 leading-relaxed font-mono">
                          <span className="text-slate-600 select-none text-[10px] w-4 text-right">
                            {snippet.line}
                          </span>
                          <span className={`text-[10.5px] sm:text-[11.5px] ${snippet.color}`}>
                            {snippet.text}
                          </span>
                        </div>
                      ))}
                      {/* Animated Typing Cursor */}
                      <div className="flex items-center gap-2.5 pl-6 pt-0.5">
                        <span className="w-1.5 h-3.5 bg-purple-400 animate-pulse" />
                      </div>
                    </div>

                    {/* Integrated Mini Terminal */}
                    <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] space-y-0.5">
                      <div className="flex items-center gap-1.5 text-slate-400 pb-1">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] text-slate-300 font-bold">TERMINAL</span>
                      </div>
                      <div className="text-emerald-400">➜ shyam-studio [main*] vite dev --host</div>
                      <div className="text-slate-400">➜ Network: ready on port 3000 • [HMR active]</div>
                    </div>
                  </div>
                )}

                {/* LIVE PREVIEW BROWSER PANEL */}
                {(activeView === 'split' || activeView === 'preview') && (
                  <div className={`${activeView === 'split' ? 'md:col-span-5' : 'md:col-span-12'} bg-[#0B0B14] p-3 flex flex-col`}>
                    
                    {/* Mini Browser Bar */}
                    <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping opacity-60" />
                      <div className="flex-1 bg-[#121220] rounded px-2 py-0.5 text-[9px] text-slate-300 truncate font-mono border border-white/5">
                        https://shyam.dev/preview
                      </div>
                      <RotateCw className="w-2.5 h-2.5 text-slate-400" />
                    </div>

                    {/* Miniature Futuristic Website Render */}
                    <div className="flex-1 rounded-md bg-gradient-to-br from-[#12111E] to-[#0A0A12] p-2.5 border border-purple-500/20 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2">
                          <span className="font-extrabold text-[11px] tracking-wider text-white">SHYAM<span className="text-purple-400">.</span></span>
                          <span className="text-[8px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-mono font-semibold">LIVE</span>
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="h-1.5 w-16 bg-purple-400/80 rounded" />
                          <div className="h-1 w-28 bg-slate-600 rounded" />
                          <div className="h-1 w-20 bg-slate-700 rounded" />
                        </div>
                      </div>

                      {/* Mini 3D Wireframe Cube Mock */}
                      <div className="my-2 py-3 rounded bg-purple-950/20 border border-purple-500/20 flex items-center justify-center">
                        <div className="w-10 h-10 border border-purple-400/60 rounded-md rotate-12 flex items-center justify-center shadow-glow-subtle animate-spin" style={{ animationDuration: '14s' }}>
                          <div className="w-5 h-5 border border-cyan-400/80 rounded-sm -rotate-45" />
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                        <span className="text-[8px] text-purple-300 font-mono">Available for projects</span>
                        <div className="w-3 h-3 rounded bg-purple-600 flex items-center justify-center">
                          <CheckCircle2 className="w-2 h-2 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom VS Code Status Bar */}
              <div className="flex items-center justify-between px-3 py-1 bg-[#090910] border-t border-white/[0.06] text-[9px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-purple-400">
                    <GitBranch className="w-2.5 h-2.5" /> main*
                  </span>
                  <span>0 errors</span>
                  <span>0 warnings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>UTF-8</span>
                  <span className="text-emerald-400">Prettier: ✓</span>
                  <span className="text-purple-300 font-semibold">React 18</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAPTOP KEYBOARD BASE (LOWER CHASSIS) */}
        <div className="relative mx-auto w-full h-[32px] sm:h-[40px] rounded-b-2xl bg-gradient-to-b from-[#1C1C2A] via-[#12121E] to-[#0A0A10] border-t border-white/20 border-b border-purple-900/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] px-4 sm:px-8 flex items-center justify-between">
          
          {/* Beveled edge notch for opening screen */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1.5 bg-[#2E2E42] rounded-b-md border-b border-white/10" />

          {/* Left keyboard vent/ports */}
          <div className="flex items-center gap-1 opacity-60">
            <div className="w-1 h-3 rounded-full bg-slate-700" />
            <div className="w-1 h-3 rounded-full bg-purple-600" />
          </div>

          {/* Centered Glass Trackpad */}
          <div className="w-24 sm:w-36 h-3 sm:h-4 rounded-t-sm bg-[#151522] border border-white/10 shadow-inner" />

          {/* Right indicator light */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-glow-subtle" />
            <span className="font-mono text-[8px] text-slate-400 hidden sm:inline">WARANGAL, IN</span>
          </div>
        </div>

        {/* Ambient Floor Shadow & Violet Glow */}
        <div className="w-[85%] mx-auto h-4 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent blur-md rounded-full transform -translate-y-1" />
      </div>
    </div>
  );
}
