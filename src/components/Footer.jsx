import { useEffect, useRef } from 'react';
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
    >
      {/* ===== FULL SCREEN BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        {/* ===== HALF DARK + HALF LIGHT OVERLAY ===== */}
        {/* Left Side - Dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        
        {/* Right Side - Light (subtle) */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent z-10" />
        
        {/* Diagonal split effect */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.3) 100%)'
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            className="absolute -top-10 -left-10 text-5xl opacity-20 text-white"
          >
            ✦
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
            className="absolute -bottom-10 -right-10 text-6xl opacity-15 text-white"
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
            <span className="text-xs font-mono text-violet-300 tracking-widest uppercase border border-violet-400/30 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              designer
            </span>
          </motion.div>

          {/* "I design the things you imagine." */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 leading-tight text-white"
          >
            I design the things
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300">
              you imagine.
            </span>
          </motion.h1>

          {/* CODER Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 mb-2"
          >
            <span className="text-xs font-mono text-pink-300 tracking-widest uppercase border border-pink-400/30 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              coder
            </span>
          </motion.div>

          {/* "I code the things you can't imagine." */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white"
          >
            I code the things
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300">
              you can't imagine.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
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
              className="px-8 py-3.5 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all bg-gradient-to-r from-violet-500 to-pink-500"
            >
              <ExternalLink className="w-4 h-4" />
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
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
            <span className="text-xs text-gray-400 tracking-widest uppercase flex items-center gap-2">
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
    </section>
  );
}