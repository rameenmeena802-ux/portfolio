import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, MessageCircle, Sparkles, Code2, Layers } from 'lucide-react';
import heroImage from '../assets/Screenshot 2026-06-17 212545.png';

export default function Hero() {
  const containerRef = useRef(null);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 30%, #fce7f3 60%, #f5f3ff 100%)'
      }}
    >
      {/* Animated Background Shapes */}
      <motion.div
        animate={{ 
          x: [0, 80, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          x: [0, -60, 0],
          y: [0, 50, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          zIndex: 1,
        }}
      />

      {/* ===== LEFT SIDE: CONTENT ===== */}
      <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            className="absolute -top-10 -left-10 text-5xl opacity-20"
          >
            ✦
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
            className="absolute -bottom-10 -right-10 text-6xl opacity-15"
          >
            ✧
          </motion.div>

          {/* DESIGNER Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2"
          >
            <span className="text-xs font-mono text-violet-500 tracking-widest uppercase border border-violet-200 px-4 py-1.5 rounded-full bg-white/50">
              designer
            </span>
          </motion.div>

          {/* "I design the things you imagine." */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 leading-tight"
          >
            <span className="text-slate-800">I design the things</span>
            <br />
            <span className="text-gradient">you imagine.</span>
          </motion.h1>

          {/* CODER Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 mb-2"
          >
            <span className="text-xs font-mono text-pink-500 tracking-widest uppercase border border-pink-200 px-4 py-1.5 rounded-full bg-white/50">
              coder
            </span>
          </motion.div>

          {/* "I code the things you can't imagine." */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            <span className="text-slate-800">I code the things</span>
            <br />
            <span className="text-gradient">you can't imagine.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-slate-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Building the future with code. Full-stack solutions that merge
            design with performance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient-light px-8 py-3.5 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-semibold border-2 border-violet-300 text-violet-600 hover:bg-violet-50 hover:border-violet-400 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Connect
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 flex items-center gap-2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-xs text-slate-400 tracking-widest uppercase flex items-center gap-2">
              <Code2 className="w-3 h-3" />
              click & hold to rotate
              <Layers className="w-3 h-3" />
            </span>
            <div className="animate-bounce-scroll">
              <ArrowDown className="w-5 h-5 text-violet-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== RIGHT SIDE: IMAGE ===== */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 top-0 w-1/2 h-full hidden lg:block z-0"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent z-10" />
          <img
            src={heroImage}
            alt="Rameen"
            className="w-full h-full object-cover"
          />
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 border-4 border-violet-300/30 rounded-3xl m-4 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* ===== MOBILE IMAGE (Bottom) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="lg:hidden absolute bottom-0 left-0 right-0 h-1/3 z-0"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent z-10" />
          <img
            src={heroImage}
            alt="Rameen"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}