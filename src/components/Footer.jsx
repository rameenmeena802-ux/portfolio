import { motion } from 'framer-motion';
import { Github, Instagram, Code2, Heart } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-violet-200/30 py-12 relative overflow-hidden bg-white/50 backdrop-blur-sm">
      {/* Animated background gradient */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-5 h-5 text-violet-500" />
            <span className="font-bold text-lg font-['Space_Grotesk'] text-gradient">Rameen</span>
          </motion.button>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-slate-500 hover:text-violet-600 text-sm transition-colors duration-200 hover:font-medium"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rameenmeena802-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-600 hover:border-violet-400 transition-all duration-300 border border-violet-200/30 shadow-sm hover:shadow-md"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/just_meena_5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-500 hover:text-pink-500 hover:border-pink-400 transition-all duration-300 border border-violet-200/30 shadow-sm hover:shadow-md"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5 text-center">
            © 2026 Rameen. Built with
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}c