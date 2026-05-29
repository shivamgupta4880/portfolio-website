import { motion } from 'framer-motion';
import { Code2, Cloud, CheckCircle2, Terminal } from 'lucide-react';
import shivamPhoto from '../assets/shivam.jpg';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: 'Full-Stack Development',
      description: 'Expertise in Java, Spring Boot microservices, and modern MERN architectures.',
      color: 'border-white/10 group-hover:border-white/30',
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: 'Cloud & Infrastructure',
      description: 'Experienced in deploying and managing AWS services, particularly EKS clusters.',
      color: 'border-white/10 group-hover:border-white/30',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: 'Active Problem Solver',
      description: 'Strong foundation in Data Structures and Algorithms with active LeetCode solving.',
      color: 'border-white/10 group-hover:border-white/30',
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: 'DevOps Automation',
      description: 'Proficient in building production-grade CI/CD pipelines via Jenkins, Docker, and Kubernetes.',
      color: 'border-white/10 group-hover:border-white/30',
    },
  ];

  return (
    <section id="about" className="spectral-section-style1 py-28 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Major Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.25em] text-white uppercase mb-6 leading-tight">
            Engineering Scalable<br className="hidden sm:inline" /> Cloud-Native Architectures
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed font-light tracking-wide font-sans">
            I am a Software Engineer and DevOps enthusiast dedicated to developing robust backend architectures and setting up high-reliability container orchestration pipelines. My core focus lies at the intersection of powerful backend development in <strong>Java / Spring Boot</strong> and advanced cloud computing using <strong>AWS, Docker, and Kubernetes</strong>.
          </p>
        </motion.div>

        {/* Circular Major Outline Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full border-t border-b border-white/5 py-16"
        >
          {highlights.map((h, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center px-4">
              {/* Circular Major Outline Icon */}
              <div className="h-16 w-16 rounded-full border-2 border-white/10 group-hover:border-white/35 flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-105 shadow-sm">
                {h.icon}
              </div>
              <h3 className="text-xs font-extrabold tracking-[0.15em] text-white uppercase mb-3 font-sans">
                {h.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-light font-sans max-w-[200px]">
                {h.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bio Spotlight with Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-left max-w-3xl"
        >
          <div className="relative group shrink-0">
            {/* Outline box ring */}
            <div className="absolute -inset-2 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors pointer-events-none"></div>
            <img
              src={shivamPhoto}
              alt="Shivam Gupta Portrait"
              className="w-48 h-64 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
            />
          </div>
          <div>
            <h4 className="text-sm font-extrabold tracking-[0.2em] text-white uppercase mb-4 font-sans">
              Automated Code Commit to Production
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light font-sans mb-4">
              I strive to build systems that are not only high-performing and scalable but also completely automated. Whether it's managing AWS EKS clusters, designing RESTful microservices, or building containerized workflows, I love creating clean, efficient code with highly active problem-solving skills.
            </p>
            <div className="flex gap-8 text-[10px] font-extrabold uppercase font-sans text-white/40 tracking-wider">
              <div>
                <p className="text-white/30 mb-0.5">Based in</p>
                <p className="text-white/70">India</p>
              </div>
              <div>
                <p className="text-white/30 mb-0.5">Focus Area</p>
                <p className="text-white/70">Software & DevOps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
