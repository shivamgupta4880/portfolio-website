import { motion } from 'framer-motion';
import {
  ArrowUp,
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import shivamPhoto from './assets/shivam.jpg';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Technologies Used', value: '20+' },
  { label: 'GitHub Contributions', value: '500+' },
];

const skills = [
  ['Java', Code2],
  ['Spring Boot', Server],
  ['Microservices', Layers3],
  ['Python', Terminal],
  ['Docker', ShieldCheck],
  ['Kubernetes', Cloud],
  ['AWS', Cloud],
  ['Terraform', BriefcaseBusiness],
  ['Jenkins', Rocket],
  ['GitHub Actions', Github],
  ['MongoDB', Server],
  ['MySQL', Server],
];

const projects = [
  {
    title: 'CompileHub',
    subtitle: 'Online Code Editor',
    tech: ['MERN', 'Docker', 'Kubernetes', 'AWS EKS', 'Monaco Editor'],
    features: [
      'Secure multi-language code execution',
      'Docker sandboxing with isolated runners',
      'JWT Authentication and protected APIs',
      'Kubernetes deployment on AWS EKS',
      'CI/CD with GitHub Actions',
    ],
    live: 'https://compile-hub-psi.vercel.app/',
    github: 'https://github.com/shivamgupta4880/CompileHub',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'DevOps Automation Platform',
    subtitle: 'Infrastructure Delivery Suite',
    tech: ['AWS', 'Terraform', 'Docker', 'Jenkins'],
    features: [
      'Reusable infrastructure modules',
      'Automated build and deployment workflows',
      'Containerized delivery pipelines',
      'Cloud provisioning with audit-friendly configuration',
      'Environment promotion for staging and production',
    ],
    live: '#contact',
    github: 'https://github.com/shivamgupta4880',
    accent: 'from-violet-400 to-fuchsia-600',
  },
  {
    title: 'Microservices E-Commerce',
    subtitle: 'Distributed Commerce Backend',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Kubernetes'],
    features: [
      'Service-based architecture for catalog and orders',
      'REST APIs with clean domain boundaries',
      'MySQL persistence and schema design',
      'Kubernetes manifests for scalable deployment',
      'Production-focused logging and configuration',
    ],
    live: '#contact',
    github: 'https://github.com/shivamgupta4880',
    accent: 'from-blue-400 to-purple-600',
  },
];

const timeline = [
  {
    title: 'Software Engineering Focus',
    date: '2024 - Present',
    description: 'Building Java, Spring Boot, cloud-native, and DevOps-focused portfolio projects.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'B.Tech Computer Science',
    date: '2022 - Present',
    description: 'Lovely Professional University, focused on distributed systems, DSA, and cloud platforms.',
    icon: GraduationCap,
  },
  {
    title: 'Problem Solving and Backend Depth',
    date: 'Ongoing',
    description: 'Active DSA practice across LeetCode, GeeksforGeeks, and HackerRank with backend-first engineering.',
    icon: Code2,
  },
];

const certifications = [
  'AWS Cloud Foundations',
  'Docker Essentials',
  'Kubernetes Fundamentals',
  'Java Programming Certification',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-zinc-400">{description}</p> : null}
    </motion.div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3">
      <div className={`absolute inset-x-8 top-0 h-24 bg-gradient-to-r ${project.accent} opacity-30 blur-3xl`} />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#101014]">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-zinc-500">{project.subtitle}</span>
        </div>
        <div className="grid min-h-56 grid-cols-[0.7fr_1.3fr]">
          <div className="border-r border-white/10 bg-white/[0.02] p-4">
            <div className="mb-4 h-8 rounded-lg bg-white/10" />
            <div className="space-y-2">
              {project.tech.slice(0, 4).map((item) => (
                <div key={item} className="h-7 rounded-md bg-white/[0.06]" />
              ))}
            </div>
          </div>
          <div className="p-5 font-mono text-xs leading-6 text-zinc-400">
            <p><span className="text-blue-300">const</span> deploy = async () =&gt; &#123;</p>
            <p className="pl-4"><span className="text-purple-300">await</span> docker.sandbox();</p>
            <p className="pl-4"><span className="text-purple-300">await</span> kubernetes.scale();</p>
            <p className="pl-4"><span className="text-purple-300">return</span> cloud.release();</p>
            <p>&#125;;</p>
            <div className={`mt-8 h-2 rounded-full bg-gradient-to-r ${project.accent}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
    window.location.href = `mailto:shivamgupt4880@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B0B0B] text-zinc-100 selection:bg-blue-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${(index * 47) % 100}%`,
              animationDelay: `${index * 0.7}s`,
              animationDuration: `${13 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-bold text-white">
            <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(99,102,241,0.45)]" />
            Shivam Gupta
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-bold">Menu</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="grid gap-2 px-5 py-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-lg font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-2xl backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
              Open to Software Engineer and DevOps roles
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="gradient-text">Shivam Gupta</span>
            </h1>
            <p className="mt-5 text-xl font-semibold text-zinc-200 sm:text-2xl">
              Java Developer | DevOps Engineer | Cloud Enthusiast
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I build resilient backend systems with Java, Spring Boot, Docker, Kubernetes, AWS, and Microservices, then automate the path from code commit to production deployment.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="btn-primary">
                <Rocket className="h-4 w-4" />
                View Projects
              </a>
              <a href="/Shivam_Gupta_Resume.pdf" download className="btn-secondary">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-transparent blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-4">
              <img src={shivamPhoto} alt="Shivam Gupta" className="h-[520px] w-full rounded-[1.5rem] object-cover object-top grayscale-[15%]" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
                <p className="text-sm text-zinc-400">Core stack</p>
                <p className="mt-1 font-semibold text-white">Java, Spring Boot, AWS, Kubernetes</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeader eyebrow="About Me" title="Backend depth with production-minded DevOps." description="A recruiter-focused snapshot of my engineering direction, education, and delivery mindset." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card rounded-3xl p-8">
              <p className="text-lg leading-9 text-zinc-300">
                I am a Software Engineer focused on building scalable Java applications, Spring Boot APIs, cloud-native microservices, and automated infrastructure workflows. My work combines backend engineering, container orchestration, CI/CD, and cloud deployment so products can move from development to production with confidence.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="space-y-5">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card rounded-3xl p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/25 to-purple-500/25 text-blue-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-300">{item.date}</p>
                        <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader eyebrow="Skills" title="A modern cloud-native toolkit." description="Interactive cards for the technologies I use across backend development, DevOps automation, and deployment." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([skill, Icon], index) => (
              <motion.div key={skill} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.03 }} whileHover={{ y: -8, scale: 1.02 }} className="glass-card group rounded-3xl p-6">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-blue-200 transition group-hover:bg-blue-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{skill}</h3>
                <div className="mt-5 h-1 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeader eyebrow="Featured Projects" title="Premium engineering work with deployment focus." description="Project cards include screenshots, production details, technology badges, and clear recruiter actions." />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -10 }} className="glass-card flex rounded-3xl p-5">
                <div className="flex w-full flex-col">
                  <ProjectVisual project={project} />
                  <div className="flex flex-1 flex-col p-2 pt-6">
                    <p className="text-sm font-semibold text-blue-300">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300">{tag}</span>
                      ))}
                    </div>
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-400">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex gap-3 pt-7">
                      <a href={project.live} target={project.live.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="btn-small-primary">
                        Live Demo <ExternalLink className="h-4 w-4" />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-small-secondary">
                        GitHub <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell">
          <SectionHeader eyebrow="Experience" title="A timeline built around practical delivery." />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-transparent sm:left-1/2" />
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`relative mb-8 flex ${index % 2 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                  <div className="glass-card ml-14 w-full rounded-3xl p-6 sm:ml-0 sm:w-[46%]">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-purple-300">{item.date}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="certifications" className="section-shell">
          <SectionHeader eyebrow="Certifications" title="Signals of focused technical growth." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div key={cert} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass-card rounded-3xl p-6">
                <Award className="mb-8 h-9 w-9 text-blue-300" />
                <h3 className="text-lg font-bold text-white">{cert}</h3>
                <p className="mt-3 text-sm text-zinc-400">Verified learning path focused on production-ready engineering foundations.</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-16">
          <SectionHeader eyebrow="Contact" title="Let us build reliable software." description="Reach out for software engineering, Java backend, DevOps, cloud, and microservices opportunities." />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white">Connect</h3>
              <div className="mt-8 grid gap-4">
                {[
                  ['LinkedIn', 'https://www.linkedin.com/in/shivam-5-gupta/', Linkedin],
                  ['GitHub', 'https://github.com/shivamgupta4880', Github],
                  ['Email', 'mailto:shivamgupt4880@gmail.com', Mail],
                  ['LeetCode', 'https://leetcode.com/', Code2],
                ].map(([label, href, Icon]) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-zinc-300 transition hover:border-blue-400/50 hover:text-white">
                    <Icon className="h-5 w-5 text-blue-300" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className="form-field" />
                <input name="email" required type="email" placeholder="Your email" className="form-field" />
              </div>
              <textarea name="message" required rows="6" placeholder="Tell me about the role, project, or opportunity..." className="form-field mt-5 resize-none" />
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-zinc-500 sm:flex-row">
          <p>Copyright 2026 Shivam Gupta. Built with React, Tailwind CSS, and Framer Motion.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/shivamgupta4880" target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/shivam-5-gupta/" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="#home" className="footer-icon" aria-label="Back to top"><ArrowUp className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
