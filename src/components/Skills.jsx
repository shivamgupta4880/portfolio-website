import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Cloud, Database, Sliders } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Cpu className="w-6 h-6 text-white/80" />,
      skills: ['Java', 'C++', 'Python'],
    },
    {
      title: 'Frontend Technologies',
      icon: <Layout className="w-6 h-6 text-white/80" />,
      skills: ['HTML5', 'CSS3', 'React.js'],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-white/80" />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'DevOps & Testing',
      icon: <Cloud className="w-6 h-6 text-white/80" />,
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Nginx', 'Jenkins', 'AWS', 'Terraform', 'Ansible'],
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="w-6 h-6 text-white/80" />,
      skills: ['Windows', 'Kali Linux', 'Ubuntu'],
    },
    {
      title: 'Soft Skills',
      icon: <Sliders className="w-6 h-6 text-white/80" />,
      skills: ['Problem Solving', 'Team Collaboration'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14 },
    },
  };

  return (
    <section id="skills" className="spectral-section-style3 py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-[0.25em] uppercase mb-4 spectral-hover-line spectral-text-pulse">
            Technical Expertise
          </h2>
        </div>

        {/* Minimalist Grid Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group p-8 sm:p-12 border-r border-b border-white/5 flex flex-col items-start text-left bg-transparent hover:bg-white/[0.01] transition-all duration-300"
            >
              {/* Outline Icon */}
              <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 transition-colors shrink-0 shadow-sm">
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs font-extrabold tracking-[0.15em] text-white uppercase mb-4 font-sans leading-none">
                {cat.title}
              </h3>

              {/* Minimal Badges List */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded text-[10px] font-bold font-sans bg-[#1b2229]/60 border border-white/5 text-white/50 tracking-wide uppercase hover:border-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
