import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#F5F5F7] selection:bg-purple-600 selection:text-white overflow-x-hidden font-sans">
      {/* Ambient background particles, subtle grid and lighting blurs */}
      <BackgroundEffects />

      {/* Main Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Workflow />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
