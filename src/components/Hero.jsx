import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-b from-[#1b2229] to-[#212931]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center z-10 py-20"
      >
        {/* Uppercase Header */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-white uppercase mb-4 font-sans leading-none"
        >
          Shivam <span className="text-white/60">Gupta</span>
        </motion.h1>

        {/* Custom tracked divider */}
        <motion.div
          variants={itemVariants}
          className="h-[2px] w-24 bg-white/30 my-6 rounded-full"
        />

        {/* Subtitle / Intro Description */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.15em] text-white/80 uppercase font-sans mb-8 max-w-xl leading-relaxed"
        >
          Software Engineer <span className="mx-2 text-white/30">•</span> Java Developer <span className="mx-2 text-white/30">•</span> DevOps Enthusiast
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed mb-10 font-sans tracking-wide font-light"
        >
          Building and deploying resilient, scalable, cloud-native applications. Passionate about Java systems, Spring Boot microservices, high-efficiency architectures, and production-grade DevOps automation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="spectral-button spectral-button-primary px-8 py-4 w-full sm:w-48"
          >
            View Projects
          </a>
          <a
            href="/Shivam_Gupta_Resume.pdf"
            download="Shivam_Gupta_Resume.pdf"
            className="spectral-button px-8 py-4 w-full sm:w-48"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Learn More Scrolldown Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 text-white/40 hover:text-white transition-colors"
      >
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] font-sans">Learn More</span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>

      {/* Decorative Moving Blur Elements to mimic modern ambient overlays */}
      <div className="absolute top-[25%] left-[25%] w-[120px] h-[120px] bg-white/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow-1"></div>
      <div className="absolute bottom-[25%] right-[25%] w-[150px] h-[150px] bg-white/3 rounded-full blur-3xl pointer-events-none animate-pulse-slow-2"></div>
    </section>
  );
}
