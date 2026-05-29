import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2, BookOpen, Layers, CheckCircle, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Experience() {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech - Computer Science and Engineering',
      duration: 'Since August 2022',
      location: 'Punjab, India',
      highlight: 'Focusing on distributed software architectures, data structures, cloud orchestration, and systems engineering.',
      icon: <GraduationCap className="w-5 h-5 text-white/70" />,
    },
    {
      institution: 'S.R.G. Inter College',
      degree: 'Intermediate (12th Grade)',
      duration: 'April 2020 - March 2021',
      location: 'Uttar Pradesh, India',
      highlight: 'Physics, Chemistry, and Mathematics (PCM). Graduated with 72.3%.',
      icon: <BookOpen className="w-5 h-5 text-white/70" />,
    },
    {
      institution: 'S.R.G. Inter College',
      degree: 'Matriculation (10th Grade)',
      duration: 'April 2018 - March 2019',
      location: 'Uttar Pradesh, India',
      highlight: 'Science, Mathematics, and General English. Graduated with 68.33%.',
      icon: <BookOpen className="w-5 h-5 text-white/70" />,
    },
  ];

  const certificates = [
    {
      title: 'SAP Certified – Data Analyst',
      issuer: 'SAP Analytics Cloud (SAP)',
      date: 'March 2026',
      icon: <Award className="w-5 h-5 text-white/80" />,
      iconBg: 'bg-white/5 border border-white/10 text-white',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'April 2025',
      icon: <Layers className="w-5 h-5 text-white/80" />,
      iconBg: 'bg-white/5 border border-white/10 text-white',
    },
    {
      title: 'DevOps and Software Engineering',
      issuer: 'Coursera',
      date: 'November 2024',
      icon: <CheckCircle className="w-5 h-5 text-white/80" />,
      iconBg: 'bg-white/5 border border-white/10 text-white',
    },
    {
      title: 'Complete Interview Preparation (Java)',
      issuer: 'GeeksforGeeks (GFG)',
      date: 'June 2024',
      icon: <Code2 className="w-5 h-5 text-white/80" />,
      iconBg: 'bg-white/5 border border-white/10 text-white',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 },
    },
  };

  return (
    <section id="education" className="spectral-section-style1 py-24 px-6 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-[20%] right-[-10%] w-[120px] h-[120px] bg-white/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-[0.25em] uppercase mb-4 spectral-hover-line spectral-text-pulse">
          Education & Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        {/* Left Side: Education timeline (7 Cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-7 flex flex-col gap-8 relative pl-6 text-left"
        >
          <h3 className="text-sm font-extrabold tracking-[0.2em] text-white uppercase mb-4 flex items-center gap-2.5 font-sans leading-none">
            <GraduationCap className="w-5 h-5 text-white/80" />
            <span>Academic Background</span>
          </h3>

          {/* Timeline central vertical track */}
          <div className="absolute left-[11px] top-12 bottom-6 w-[2px] bg-gradient-to-b from-white/20 to-transparent"></div>

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8 group"
            >
              {/* Timeline glowing bullet node */}
              <div className="absolute left-[-21px] top-6 h-4 w-4 rounded-full border-4 border-[#2e3842] bg-white group-hover:bg-white/80 transition-all duration-300 z-10 shadow-sm"></div>

              {/* Glassmorphic Card skinned for Spectral */}
              <div className="glassmorphic-card p-6 rounded-xl border border-white/5 group-hover:border-white/20 shadow-md relative transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#1b2229] border border-white/5 shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase leading-tight font-sans">
                        {edu.institution}
                      </h4>
                      <span className="text-[10px] font-extrabold text-white/40 mt-1.5 block tracking-wider uppercase font-sans">
                        {edu.degree}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/60 leading-relaxed font-sans font-light mb-4">
                  {edu.highlight}
                </p>

                {/* Card footer details */}
                <div className="flex flex-wrap items-center gap-4 text-[9px] font-extrabold font-sans text-white/30 uppercase tracking-widest pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-white/50" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/50" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Certificates & Achievements (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          {/* Certificates Title */}
          <div>
            <h3 className="text-sm font-extrabold tracking-[0.2em] text-white uppercase mb-6 flex items-center gap-2.5 font-sans leading-none">
              <Award className="w-5 h-5 text-white/80" />
              <span>Certifications</span>
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col gap-4"
            >
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group glassmorphic-card p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-lg ${cert.iconBg} shrink-0`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white tracking-widest uppercase leading-tight font-sans">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-white/50 mt-1 font-light font-sans">
                      {cert.issuer}
                    </p>
                    <span className="inline-block mt-2.5 text-[8px] font-extrabold uppercase font-sans bg-[#1b2229] border border-white/5 text-white/40 tracking-widest px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Golden DSA solving achievement block skinned for Spectral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-xl glassmorphic-card p-6 border-l-2 border-l-white border-white/5 hover:border-white/20 overflow-hidden shadow-md mt-4"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
                <Code2 className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold text-white/40 uppercase tracking-widest block leading-none mb-1.5 font-sans">
                  Active Competitor
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase leading-none font-sans">
                  DSA Problem Solve
                </h4>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-sans font-light mb-5">
              Solved 200+ comprehensive Data Structures and Algorithms problems across LeetCode, GeeksforGeeks, and HackerRank.
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-[9px] font-extrabold text-white/30 tracking-widest uppercase font-sans">
                LeetCode, GFG, HackerRank
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold font-sans uppercase border border-white/10 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white/70" />
                <span>200+ Solved</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
