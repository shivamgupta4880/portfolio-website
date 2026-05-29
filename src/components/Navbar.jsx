import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const sidebarVariants = {
    closed: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
    open: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  const overlayVariants = {
    closed: { opacity: 0, pointerEvents: 'none' },
    open: { opacity: 1, pointerEvents: 'auto' },
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-6 md:px-12 bg-[#1b2229]/80 backdrop-blur-md border-b border-white/5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group text-white font-sans text-sm font-extrabold uppercase tracking-[0.225em] transition-colors hover:text-white/80">
          <span className="h-2 w-2 rounded-full bg-white group-hover:scale-110 transition-transform"></span>
          Shivam<span className="text-white/60">Gupta</span>
        </a>

        {/* Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-white font-sans text-xs font-extrabold uppercase tracking-[0.125em] hover:text-white/80 focus:outline-none"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="site-menu"
        >
          <span>Menu</span>
          <Menu className="w-4 h-4 text-white/80" />
        </button>
      </header>

      {/* Sliding Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#1b2229]/60 backdrop-blur-sm"
            />

            {/* Sidebar Panel */}
            <motion.div
              id="site-menu"
              initial="closed"
              animate="open"
              exit="closed"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              variants={sidebarVariants}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-full bg-[#212931] shadow-2xl p-8 flex flex-col justify-between border-l border-white/5"
            >
              <div>
                {/* Close Button Header */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/5 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-6 text-left">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white font-sans text-xs font-extrabold uppercase tracking-[0.225em] py-2 border-b border-white/5 hover:text-white/80 hover:border-white/15 transition-all block"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div>
                <hr className="border-white/5 my-6" />
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/shivamgupta4880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivam-5-gupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
