import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b2229] border-t border-white/5 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        
        {/* Social Icons row */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shivamgupta4880"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-5-gupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:shivamgupt4880@gmail.com"
            className="h-10 w-10 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Aligned minimal copyright text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-[10px] font-bold font-sans text-white/30 uppercase tracking-[0.15em]">
          <span>&copy; {currentYear} Shivam Gupta.</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>
            Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 border-b border-dotted border-white/10 hover:border-b-transparent transition-colors">HTML5 UP</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
