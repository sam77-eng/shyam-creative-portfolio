import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-70" />

      {/* Atmospheric Nebula Orbs */}
      <div className="absolute top-[-150px] left-[10%] w-[550px] h-[550px] bg-purple-700/15 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-100px] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[65%] left-[-100px] w-[600px] h-[600px] bg-indigo-700/15 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3.5s' }} />
      <div className="absolute bottom-[-100px] right-[15%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px]" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-60" 
           style={{ background: 'radial-gradient(circle at 50% 50%, transparent 40%, #050507 95%)' }} 
      />
    </div>
  );
}
