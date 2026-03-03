import { Sparkles, Mail, ExternalLink, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'For Colleges', href: '#colleges' },
  { label: 'Apply', href: '#apply' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-primary-sm group-hover:rotate-6 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Skill<span className="text-primary italic">Nova</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              India's premier AI-Native Engineering Accelerator. We bridge the gap between academic theory and high-speed industry deployment.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 border border-white/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Navigation</h4>
            <ul className="grid grid-cols-1 gap-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@skillnova.in"
                className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                  <Mail className="w-3 h-3" />
                  Email Support
                </div>
                <div className="text-sm text-slate-200 group-hover:text-primary transition-colors">
                  contact@skillnova.in
                </div>
              </a>

              <a
                href="https://rapidaiservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                  <ExternalLink className="w-3 h-3" />
                  Global Site
                </div>
                <div className="text-sm text-slate-200 flex items-center gap-1 group-hover:text-primary transition-colors">
                  RapidAI Services and Solutions <ArrowUpRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">
              © {currentYear} SkillNova Accelerator
            </p>
            <div className="flex items-center gap-2 text-[10px] text-slate-600">
              <span>A Venture by</span>
              <div className="w-px h-2 bg-slate-800" />
              <a 
                href="https://rapidaiservices.com" 
                className="text-primary hover:underline font-medium"
              >
                RapidAI Services and Solutions
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[11px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}