import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Globe, FileCode, Palette, Zap, Wind,
  Box, Server, GitBranch, Database, Cloud, Triangle
} from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code2 className="w-7 h-7" />, color: 'from-cyan-400 to-blue-500', level: 85 },
  { name: 'Next.js', icon: <Triangle className="w-7 h-7" />, color: 'from-slate-400 to-slate-600', level: 70 },
  { name: 'HTML5', icon: <FileCode className="w-7 h-7" />, color: 'from-orange-400 to-red-500', level: 95 },
  { name: 'CSS3', icon: <Palette className="w-7 h-7" />, color: 'from-blue-400 to-indigo-500', level: 90 },
  { name: 'JavaScript', icon: <Zap className="w-7 h-7" />, color: 'from-yellow-400 to-orange-400', level: 85 },
  { name: 'Tailwind', icon: <Wind className="w-7 h-7" />, color: 'from-teal-400 to-cyan-500', level: 90 },
  { name: 'Three.js', icon: <Box className="w-7 h-7" />, color: 'from-violet-400 to-purple-500', level: 75 },
  { name: 'Node.js', icon: <Server className="w-7 h-7" />, color: 'from-green-400 to-emerald-500', level: 80 },
  { name: 'Express', icon: <Globe className="w-7 h-7" />, color: 'from-slate-300 to-slate-500', level: 78 },
  { name: 'MongoDB', icon: <Database className="w-7 h-7" />, color: 'from-green-400 to-lime-500', level: 75 },
  { name: 'Vercel', icon: <Cloud className="w-7 h-7" />, color: 'from-slate-300 to-slate-500', level: 88 },
  { name: 'Git', icon: <GitBranch className="w-7 h-7" />, color: 'from-orange-400 to-red-500', level: 82 },
];

const mernStack = [
  { letter: 'M', name: 'MongoDB', desc: 'NoSQL database for flexible data storage', color: 'text-green-500' },
  { letter: 'E', name: 'Express.js', desc: 'Fast, minimalist Node.js web framework', color: 'text-slate-500' },
  { letter: 'R', name: 'React', desc: 'Component-based UI library by Facebook', color: 'text-cyan-500' },
  { letter: 'N', name: 'Node.js', desc: 'JavaScript runtime for server-side code', color: 'text-emerald-500' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          x: [0, 120, 0],
          y: [0, -60, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 80, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block h-px w-8 bg-violet-400" />
            <span className="text-violet-500 text-sm font-semibold tracking-widest uppercase">My Expertise</span>
            <span className="inline-block h-px w-8 bg-violet-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black section-title text-slate-800">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-xl`}>
                <div className="bg-white rounded-xl p-2.5 text-slate-700 group-hover:bg-transparent transition-colors duration-300">
                  <div className={`bg-gradient-to-br ${skill.color} bg-clip-text`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {skill.icon}
                  </div>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-violet-600 transition-colors">{skill.name}</span>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.06 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Card - Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-violet-200 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 section-title">
              The <span className="text-gradient">MERN Stack</span>
            </h3>
            <p className="text-slate-500 text-sm">My primary full-stack technology combination</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mernStack.map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-white/80 rounded-2xl p-5 text-center border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all"
              >
                <div className={`text-5xl font-black ${item.color} mb-2 section-title`}>{item.letter}</div>
                <div className="text-slate-700 font-bold text-sm mb-1">{item.name}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}