import { motion } from 'framer-motion';
import { Zap, Code2, Briefcase, GraduationCap, Palette, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const programs = [
  {
    icon: Zap,
    title: 'AI Product Sprint',
    duration: '5-Day Intensive',
    description: 'Go from idea to deployed AI product rapidly. Perfect for builders who want to launch fast.',
    features: ['AI Workflows', 'MVP Building', 'Cloud Deployment'],
    highlight: true,
    colSpan: "lg:col-span-8", // Larger focus on the flagship program
  },
  {
    icon: Code2,
    title: '4-Week AI Builder',
    duration: '4 Weeks',
    description: 'Deep dive into prompt engineering and LLM integration.',
    features: ['Prompt Eng.', 'AI Integration', 'Mentorship'],
    highlight: false,
    colSpan: "lg:col-span-4",
  },
  {
    icon: Briefcase,
    title: 'Industry Internship',
    duration: 'Flexible',
    description: 'Solve real-world problems with guidance from top-tier industry mentors.',
    features: ['Real Projects', 'Code Reviews', 'Certification'],
    highlight: false,
    colSpan: "lg:col-span-4",
  },
  {
    icon: GraduationCap,
    title: 'Final Year Mentorship',
    duration: 'Project-Based',
    description: 'Expert guidance to help you build a standout final year project that gets noticed.',
    features: ['Architecture', 'Model Support', 'Viva Prep'],
    highlight: false,
    colSpan: "lg:col-span-4",
  },
  {
    icon: Palette,
    title: 'Digital Creator',
    duration: 'Coming Soon',
    description: 'Empowering the next generation with logical thinking and AI-native no-code tools.',
    features: ['Logical Thinking', 'AI Basics', 'No-code Apps'],
    comingSoon: true,
    highlight: false,
    colSpan: "lg:col-span-4",
  },
];

export function Programs() {
  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1">
                CURRICULUM
              </Badge>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
            >
              Accelerate your <span className="gradient-text italic">Career.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Move beyond theory. Build industry-grade AI applications with our structured, 
              hands-on engineering tracks.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="text-right border-l-2 border-white/5 pl-6">
              <span className="text-3xl font-bold text-white block">05</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Specialized Tracks</span>
            </div>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative rounded-[2rem] p-8 transition-all duration-500 border flex flex-col justify-between overflow-hidden",
                program.colSpan,
                program.highlight 
                  ? "bg-white/[0.03] border-primary/30 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)]" 
                  : "bg-card/20 border-white/5 hover:border-white/20",
                program.comingSoon && "opacity-75 grayscale-[0.5]"
              )}
            >
              {/* Highlight Shimmer Effect */}
              {program.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              )}

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={cn(
                    "p-3 rounded-2xl transition-all duration-500 group-hover:rotate-6",
                    program.highlight ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white/5 text-primary"
                  )}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <Clock className="w-3 h-3 text-primary" />
                    {program.duration}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {!program.comingSoon ? (
                <Button
                  onClick={scrollToApply}
                  className={cn(
                    "w-full h-12 rounded-xl font-bold transition-all active:scale-95 group/btn",
                    program.highlight 
                      ? "bg-primary text-primary-foreground hover:opacity-90" 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  )}
                >
                  Join Program
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <div className="w-full py-3 rounded-xl border border-dashed border-white/10 flex justify-center items-center bg-white/[0.02]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Coming Soon</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}