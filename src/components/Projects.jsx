import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Box, Cpu, Layers, Monitor } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Elara Footwear',
    tagline: '3D E-Commerce Platform',
    description:
      'A cutting-edge 3D e-commerce store for footwear with interactive product previews built using Three.js. Features real-time 3D model rotation, custom shoe configurator, and a full-stack shopping experience with MongoDB cart and order management.',
    image: '/images/Screenshot_2026-06-17_190354.png',
    icon: <Box className="w-5 h-5" />,
    tags: ['React', 'Three.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    tagColors: ['bg-cyan-500/15 text-cyan-300 border-cyan-500/20', 'bg-violet-500/15 text-violet-300 border-violet-500/20', 'bg-teal-500/15 text-teal-300 border-teal-500/20', 'bg-green-500/15 text-green-300 border-green-500/20', 'bg-slate-500/15 text-slate-300 border-slate-500/20', 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20'],
    github: 'https://github.com/rameenmeena802-ux',
    demo: 'https://elara-footwear-8hj2bt4yq-rameen-s-projects1.vercel.app/',
    accent: 'from-cyan-500 to-violet-600',
  },
  {
    id: 2,
    title: 'React Web App',
    tagline: 'Full-Stack React Application',
    description:
      'A modern full-stack React application built with a clean component architecture, responsive UI, and seamless user experience. Deployed live on Vercel with optimized performance and production-ready code.',
    image: '/images/Screenshot_2026-06-17_103620.png',
    icon: <Monitor className="w-5 h-5" />,
    tags: ['React', 'JavaScript', 'Tailwind', 'Vercel'],
    tagColors: ['bg-cyan-500/15 text-cyan-300 border-cyan-500/20', 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20', 'bg-teal-500/15 text-teal-300 border-teal-500/20', 'bg-slate-500/15 text-slate-300 border-slate-500/20'],
    github: 'https://github.com/rameenmeena802-ux',
    demo: 'https://user-app-qumu-bb2scmw97-rameen-s-projects1.vercel.app/',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'NovaSphere AI',
    tagline: 'AI Intelligence Platform',
    description:
      'A futuristic AI platform with real-time data streams, interactive 3D visualizations, and live collaboration via Socket.io. Features a dynamic dashboard, AI-generated insights, and a fully responsive Next.js frontend connected to a MongoDB backend.',
    image: '/images/Screenshot_2026-06-17_190416.png',
    icon: <Cpu className="w-5 h-5" />,
    tags: ['Next.js', 'Three.js', 'Socket.io', 'Tailwind', 'MongoDB'],
    tagColors: ['bg-slate-500/15 text-slate-300 border-slate-500/20', 'bg-violet-500/15 text-violet-300 border-violet-500/20', 'bg-blue-500/15 text-blue-300 border-blue-500/20', 'bg-teal-500/15 text-teal-300 border-teal-500/20', 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20'],
    github: 'https://github.com/rameenmeena802-ux',
    demo: 'https://nova-sphere-9y4og3u75-rameen-s-projects1.vercel.app/',
    accent: 'from-violet-500 to-pink-500',
  },
  {
    id: 4,
    title: '3D Portfolio',
    tagline: 'Interactive Developer Portfolio',
    description:
      'My signature interactive portfolio featuring WebGL-powered 3D environments, smooth scroll-triggered animations with Framer Motion, and a fully responsive dark-themed layout that showcases projects with immersive visual storytelling.',
    image: '/images/Screenshot_2026-06-17_105115.png',
    icon: <Layers className="w-5 h-5" />,
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    tagColors: ['bg-cyan-500/15 text-cyan-300 border-cyan-500/20', 'bg-violet-500/15 text-violet-300 border-violet-500/20', 'bg-pink-500/15 text-pink-300 border-pink-500/20', 'bg-teal-500/15 text-teal-300 border-teal-500/20'],
    github: 'https://github.com/rameenmeena802-ux',
    demo: 'https://github.com/rameenmeena802-ux',
    accent: 'from-pink-500 to-violet-600',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(236,72,153,0.05) 0%, transparent 55%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block h-px w-8 bg-pink-500" />
            <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">My Work</span>
            <span className="inline-block h-px w-8 bg-pink-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black section-title text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Handcrafted digital experiences that push the boundaries of web technology.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="project-card glass rounded-3xl overflow-hidden border border-white/5 hover:border-violet-500/25 group"
            >
              <div className={`grid ${i % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080810]/60 z-20 hidden lg:block" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.accent} text-white`}>
                      {project.icon}
                    </div>
                    <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">{project.tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 section-title group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${project.tagColors[ti] || 'bg-violet-500/15 text-violet-300 border-violet-500/20'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-gradient px-5 py-2.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2 shadow-md`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:border-white/30 hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}