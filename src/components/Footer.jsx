import { motion } from 'framer-motion';
import { Github, Instagram, Code2, Heart } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 50%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <motion.button
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-5 h-5 text-violet-400" />
            <span className="font-bold text-lg font-['Space_Grotesk'] text-gradient">Rameen</span>
          </motion.button>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rameenmeena802-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-300 border border-white/5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/just_meena_5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/40 transition-all duration-300 border border-white/5"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-slate-600 text-sm flex items-center gap-1.5 text-center">
            © 2026 Rameen. Built with
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}