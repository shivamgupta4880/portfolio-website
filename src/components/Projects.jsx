import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, MessageSquare, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CompileHub',
      subtitle: 'Cloud-Native Online Code Editor',
      description: 'A production-ready cloud-native online code editor supporting multi-language execution in secure, isolated sandboxes.',
      features: [
        'Monaco Editor frontend integration with modern syntax styling',
        'Docker-based sandboxing to prevent unsafe host container exposure',
        'Scalable microservices orchestration on AWS EKS using Kubernetes',
        'CI/CD automation with GitHub Actions/Jenkins; provisioned via Terraform & Ansible',
        'Full observability using Prometheus, Grafana, and AWS CloudWatch'
      ],
      tags: ['MERN Stack', 'Docker', 'Kubernetes', 'AWS EKS', 'Jenkins', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
      icon: <Terminal className="w-5 h-5 text-white/80" />,
      liveUrl: 'https://compile-hub-psi.vercel.app/',
      githubUrl: 'https://github.com/shivamgupta4880/CompileHub',
      // High-Fidelity Custom CSS Monaco Editor Mockup
      mockUi: (
        <div className="w-full h-full bg-[#1e1e1e] flex flex-col font-mono text-[9px] sm:text-xs text-[#d4d4d4] select-none text-left">
          {/* Browser / Editor Top bar */}
          <div className="h-6 sm:h-8 bg-[#2d2d2d] flex items-center justify-between px-3 border-b border-[#1e1e1e]">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f56]"></span>
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]"></span>
              <span className="h-2 w-2 rounded-full bg-[#27c93f]"></span>
            </div>
            <div className="text-[9px] text-[#8e8e8e] truncate max-w-[150px] font-sans">CompileHub - Monaco</div>
            <div className="w-8"></div>
          </div>
          {/* Editor Workspace */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-12 sm:w-16 bg-[#252526] border-r border-[#1e1e1e] flex flex-col py-2 items-center gap-4 text-white/30">
              <Terminal className="w-4 h-4 text-white/70" />
              <div className="w-3.5 h-3.5 border border-dashed border-white/20 rounded"></div>
              <div className="w-3.5 h-3.5 border border-dashed border-white/20 rounded"></div>
            </div>
            {/* Editor Code Panel */}
            <div className="flex-1 p-3 flex flex-col justify-between bg-[#1e1e1e] relative">
              <div className="space-y-1">
                <p><span className="text-[#569cd6]">import</span> React <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'react'</span>;</p>
                <p><span className="text-[#569cd6]">const</span> Sandbox = () =&gt; &#123;</p>
                <p className="pl-4 text-[#6a9955]">// Isolating execution in Docker</p>
                <p className="pl-4"><span className="text-[#569cd6]">const</span> run = <span className="text-[#569cd6]">async</span> () =&gt; &#123;</p>
                <p className="pl-8"><span className="text-[#569cd6]">await</span> EKS.orchestrate();</p>
                <p className="pl-4">&#125;;</p>
                <p>&#125;;</p>
              </div>
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] bg-[#007acc]/10 border border-[#007acc]/20 p-1.5 rounded text-blue-300">
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-blue-400" /> Docker Active</span>
                <span>Port 5173</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'DevChat',
      subtitle: 'Real-Time Messaging Application',
      description: 'A highly responsive, containerized messaging application engineered to support high-concurrency communications.',
      features: [
        'Socket.IO integration for low-latency, real-time message exchange (100+ concurrent users)',
        'CI/CD automated pipelines with GitHub Actions & Jenkins for seamless deployment',
        'Nginx reverse proxy routing and secure REST APIs with JWT authentication',
        'MongoDB database performance tuning and query indexing for quick lookups'
      ],
      tags: ['Docker', 'Socket.IO', 'MERN Stack', 'Nginx', 'MongoDB', 'JWT Security', 'CI/CD'],
      icon: <MessageSquare className="w-5 h-5 text-white/80" />,
      liveUrl: 'https://dev-chat-wine.vercel.app/',
      githubUrl: 'https://github.com/shivamgupta4880/DevChat',
      // High-Fidelity Custom CSS Chat Mockup
      mockUi: (
        <div className="w-full h-full bg-[#0e1621] flex flex-col font-sans select-none text-left">
          {/* Chat Top bar */}
          <div className="h-6 sm:h-8 bg-[#17212b] flex items-center justify-between px-3 border-b border-[#0e1621]">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/10"></span>
              <span className="h-2 w-2 rounded-full bg-white/10"></span>
              <span className="h-2 w-2 rounded-full bg-white/10"></span>
            </div>
            <div className="text-[9px] sm:text-xs font-bold text-white/80 font-sans tracking-wide"># devchat-general</div>
            <div className="flex items-center gap-1 text-[8px] bg-teal-500/10 border border-teal-500/20 text-teal-400 px-1.5 py-0.5 rounded uppercase font-extrabold tracking-wider">
              <span>100+ active</span>
            </div>
          </div>
          {/* Chat Workspace */}
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-3 justify-end overflow-hidden">
            {/* User message 1 */}
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="h-5 w-5 rounded-full bg-[#2b5278] flex items-center justify-center text-[8px] text-white shrink-0 font-bold">SG</div>
              <div className="bg-[#182533] p-2 rounded-xl rounded-tl-none border border-white/5">
                <p className="text-[10px] text-white/90 leading-normal font-sans">Hey Team! Just deployed the socket integration to production via Jenkins.</p>
                <span className="text-[7px] text-white/30 block mt-1 text-right">22:04</span>
              </div>
            </div>
            {/* User message 2 */}
            <div className="flex items-start gap-2 max-w-[85%] self-end flex-row-reverse">
              <div className="h-5 w-5 rounded-full bg-teal-600 flex items-center justify-center text-[8px] text-white shrink-0 font-bold">QA</div>
              <div className="bg-[#2b5278] p-2 rounded-xl rounded-tr-none border border-white/5">
                <p className="text-[10px] text-white/90 leading-normal font-sans">Awesome! Confirmed 100+ concurrent connections. Latency is extremely low (&lt; 20ms).</p>
                <span className="text-[7px] text-white/30 block mt-1 text-right">22:05</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <section id="projects" className="spectral-section-style2 py-24 px-0 relative overflow-hidden">
      {/* Centered header details */}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-[0.25em] uppercase mb-4 spectral-hover-line spectral-text-pulse">
          Featured Projects
        </h2>
      </div>

      {/* Spotlight Panels Container */}
      <div className="w-full flex flex-col">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch border-b border-white/5 last:border-0`}
            >
              {/* Image Panel (Spotlight visual) */}
              <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[250px] sm:min-h-[350px] bg-[#171e24] p-4 sm:p-8 flex items-center justify-center overflow-hidden border-b lg:border-b-0 border-white/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                  {proj.mockUi}
                </motion.div>
              </div>

              {/* Content Panel */}
              <div className="w-full lg:w-1/2 bg-[#212931] p-8 sm:p-16 flex flex-col justify-center text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {proj.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white tracking-wider uppercase leading-none">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-extrabold text-white/40 tracking-widest uppercase mt-1.5 block">
                      {proj.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light font-sans mb-6">
                  {proj.description}
                </p>

                {/* Key feature list */}
                <div className="mb-6 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-extrabold text-white/30 uppercase tracking-widest mb-3.5 font-sans">
                    Key Implementations
                  </h4>
                  <ul className="space-y-2.5">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-white/50 font-sans leading-normal font-light">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30 mt-1.5 shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[9px] font-extrabold font-sans bg-[#1b2229] border border-white/5 text-white/40 tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spectral-button px-5 py-2.5 flex items-center justify-center gap-2 text-xs"
                  >
                    <Github className="w-3.5 h-3.5 text-white/60" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spectral-button spectral-button-primary px-5 py-2.5 flex items-center justify-center gap-2 text-xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
