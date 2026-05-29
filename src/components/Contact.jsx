import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:shivamgupt4880@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="spectral-section-style2 py-24 px-6 relative overflow-hidden">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-[0.25em] uppercase mb-4 spectral-hover-line spectral-text-pulse">
          Get In Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
        {/* Info Column skinned for Spectral */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between glassmorphic-card p-8 rounded-xl border border-white/5 text-left"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-extrabold tracking-[0.15em] text-white uppercase mb-4 font-sans leading-none">
                Let's build something epic
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans font-light">
                Have a microservices architecture to design, a deployment pipeline to automate, or a full-stack project to launch? Drop me a message and let's coordinate!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <div className="p-3 rounded-lg bg-[#1b2229] border border-white/5 shrink-0">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold text-white/35 uppercase tracking-widest leading-none mb-1 font-sans">Email</p>
                  <a href="mailto:shivamgupt4880@gmail.com" className="text-xs sm:text-sm font-bold hover:text-white/80 transition-colors uppercase font-sans tracking-wide">
                    shivamgupt4880@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <div className="p-3 rounded-lg bg-[#1b2229] border border-white/5 shrink-0">
                  <Phone className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold text-white/35 uppercase tracking-widest leading-none mb-1 font-sans">Mobile</p>
                  <a href="tel:+917570950739" className="text-xs sm:text-sm font-bold hover:text-white/80 transition-colors font-sans tracking-wide">
                    +91-7570950739
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <div className="p-3 rounded-lg bg-[#1b2229] border border-white/5 shrink-0">
                  <MapPin className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold text-white/35 uppercase tracking-widest leading-none mb-1 font-sans">Location</p>
                  <p className="text-xs sm:text-sm font-bold uppercase font-sans tracking-wide">India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-[9px] font-extrabold text-white/30 uppercase tracking-widest font-sans">Social networks</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/shivamgupta4880" target="_blank" rel="noopener noreferrer" className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-white/5 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-5-gupta/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-white/5 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Column skinned for Spectral */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glassmorphic-card p-8 rounded-xl relative border border-white/5"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#212931]/95 backdrop-blur-sm rounded-xl flex flex-col justify-center items-center p-8 z-10 text-center"
              >
                <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white mb-5 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-sm font-extrabold text-white tracking-[0.2em] uppercase mb-2 font-sans">Message Sent!</h3>
                <p className="text-xs text-white/50 max-w-xs font-sans font-light leading-relaxed">
                  Your email app should open with the message details ready to send.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-[9px] font-extrabold text-white/40 uppercase tracking-widest mb-2 font-sans">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-[#1b2229] border border-white/5 focus:border-white/20 rounded px-4 py-3 text-xs text-white focus:outline-none transition-all placeholder:text-white/25 font-sans"
                placeholder="Shivam Gupta"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[9px] font-extrabold text-white/40 uppercase tracking-widest mb-2 font-sans">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-[#1b2229] border border-white/5 focus:border-white/20 rounded px-4 py-3 text-xs text-white focus:outline-none transition-all placeholder:text-white/25 font-sans"
                placeholder="shivamgupt4880@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[9px] font-extrabold text-white/40 uppercase tracking-widest mb-2 font-sans">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-[#1b2229] border border-white/5 focus:border-white/20 rounded px-4 py-3 text-xs text-white focus:outline-none transition-all placeholder:text-white/25 resize-none font-sans"
                placeholder="Write your message details..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="spectral-button spectral-button-primary w-full py-4 text-xs font-extrabold"
            >
              <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
              <Send className="w-3.5 h-3.5 ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
