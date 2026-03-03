import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToApply = (tab?: string) => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (tab) {
        setTimeout(() => {
          const tabTrigger = document.querySelector(
            `[data-tab="${tab}"]`
          ) as HTMLButtonElement;
          tabTrigger?.click();
        }, 500);
      }
    }
  };

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-120px)]
        flex items-center justify-center
        overflow-hidden
        bg-background
        pt-40
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute inset-0 grid-pattern opacity-[0.15] scale-110"
        />

        <div className="absolute top-[-10%] left-[5%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div
          className="absolute bottom-[5%] right-[5%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[140px] animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_80%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass px-5 py-2 rounded-full mb-10 border-white/5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/90">
              India's Premier AI-Native Engineering Accelerator
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[1.02] text-white">
              Building{' '}
              <span className="gradient-text italic font-semibold">
                AI-Native
              </span>{' '}
              <br className="hidden md:block" />
              Engineers for Tomorrow
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 text-base md:text-lg xl:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-14"
          >
            Bridge the gap between curriculum and industry with{' '}
            <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">
              AI-driven workflows
            </span>{' '}
            and real-world project deployment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => scrollToApply('student')}
              className="h-14 px-10 text-base font-bold rounded-full bg-primary text-primary-foreground hover:scale-[1.05] active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-2xl"
            >
              Apply as Student
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToApply('college')}
              className="h-14 px-10 text-base font-semibold rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all w-full sm:w-auto"
            >
              Partner as College
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-32 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 py-10 border-t border-white/5">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  16+
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 font-bold">
                  Students Trained
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold gradient-text tracking-tighter">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 font-bold">
                  Success Rate
                </span>
              </div>

              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  5+
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 font-bold">
                  Partner Colleges
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/20 hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}