import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'For Colleges', href: '/colleges' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    // Handle Anchor Links (like #about or #apply)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      if (location.pathname === path || (path === '/' && location.pathname === '')) {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 110;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
        navigate(href);
      }
    } else {
      // Handle standard page routes
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-center">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={`
            w-[95%] max-w-7xl
            flex items-center justify-between
            rounded-full
            px-8 py-4
            transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? 'glass-strong backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.35)]'
                : 'bg-transparent border border-transparent'
            }
          `}
        >
          {/* LOGO */}
          <button
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/SkillNova_BACKGROUNDLSS.png"
              alt="SkillNova Logo"
              className="w-16 md:w-20 object-contain
              drop-shadow-[0_0_20px_rgba(0,150,255,0.35)]
              transition-transform duration-500 group-hover:scale-105"
            />

            <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Skill<span className="text-primary italic">Nova</span>
            </span>
          </button>

          {/* Desktop Nav with Active State highlighting */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5">
            {navLinks.map((link) => {
              // Determine if the link is active
              const isActive = location.pathname === link.href || 
                              (link.href === '/' && location.pathname === '');
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className={`px-6 py-2 text-sm font-semibold transition-all rounded-full 
                    ${isActive 
                      ? 'text-white bg-white/10 shadow-sm shadow-white/5' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              size="lg"
              onClick={() => handleNavigation('/#apply')}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold h-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-3 text-white bg-white/5 rounded-xl border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </motion.nav>
      </header>

      {/* MOBILE MENU - COMPACT & CLEAN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-28 left-6 right-6 glass-strong p-4 rounded-[1.5rem] lg:hidden z-[99] shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                                (link.href === '/' && location.pathname === '');
                
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className={`text-base font-semibold text-left px-5 py-3 rounded-xl transition-all flex items-center justify-between
                      ${isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                      }`}
                  >
                    {link.label}
                    <ArrowRight className={`w-3.5 h-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50'}`} />
                  </button>
                );
              })}

              {/* Minimalist Divider */}
              <div className="h-px bg-white/5 my-3 mx-2" />

              <Button
                size="lg"
                onClick={() => handleNavigation('/#apply')}
                className="w-full h-12 text-sm font-bold rounded-xl bg-primary text-white shadow-lg active:scale-[0.97] transition-all"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}