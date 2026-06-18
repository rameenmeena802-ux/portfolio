import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Box, Server, Layers } from 'lucide-react';

const stats = [
  { label: 'Projects', value: '6+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Deployed', value: '6+' },
  { label: 'Experience', value: 'Intermediate' },
];

const badges = [
  { icon: <Layers className="w-4 h-4" />, label: 'Full Stack' },
  { icon: <Box className="w-4 h-4" />, label: '3D Design' },
  { icon: <Server className="w-4 h-4" />, label: 'MERN Stack' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block h-px w-8 bg-violet-400" />
      <span className="text-violet-500 text-sm font-semibold tracking-widest uppercase">{children}</span>
      <span className="inline-block h-px w-8 bg-violet-400" />
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-black section-title text-slate-800">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile photo with animation instead of circle glow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated gradient ring instead of static circle */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 blur-md opacity-60"
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1.05, 1, 1.05]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400 blur-sm opacity-40"
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-violet-300/50 shadow-xl shadow-violet-200/30">
                <img
                  src="/images/Snapchat-829312204.jpg"
                  alt="Rameen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-6xl font-black">R</div>`;
                    }
                  }}
                />
              </div>
              {/* Floating badge - light theme */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md"
              >
                <Code2 className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-semibold text-slate-700">MERN Dev</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio + stats - Light theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I'm <span className="text-slate-800 font-semibold">Rameen</span>, a MERN Stack Developer and 3D Designer
              with intermediate experience in F.A.I.T. I specialize in building full-stack web applications using
              <span className="text-violet-500 font-medium"> React, Node.js, Express, and MongoDB</span>. I love creating
              immersive 3D experiences with <span className="text-pink-500 font-medium">Three.js</span> and deploying
              projects on Vercel.
            </p>

            {/* Stats - Light theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-violet-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl font-black text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Badges - Light theme */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50/50 text-violet-600 text-sm font-medium"
                >
                  {badge.icon}
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}