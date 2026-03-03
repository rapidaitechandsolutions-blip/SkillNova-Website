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
    description: 'Go from idea to deployed AI product rapidly.',
    features: ['AI Workflows', 'MVP Building', 'Deployment'],
    highlight: true,
    colSpan: "md:col-span-2 lg:col-span-4",
  },
  {
    icon: Code2,
    title: '4-Week AI Builder',
    duration: '4 Weeks',
    description: 'Master prompt engineering and integration.',
    features: ['Prompt Eng.', 'AI Integration', 'Mentorship'],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-4",
  },
  {
    icon: Briefcase,
    title: 'Industry Internship',
    duration: 'Flexible',
    description: 'Real-world problems with top mentors.',
    features: ['Industry Projects', 'Code Reviews', 'Certification'],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-4",
  },
  {
    icon: GraduationCap,
    title: 'Final Year Mentorship',
    duration: 'Project-Based',
    description: 'Expert guidance for standout final projects.',
    features: ['Architecture', 'Model Support', 'Viva Prep'],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-6",
  },
  {
    icon: Palette,
    title: 'Digital Creator',
    duration: 'Coming Soon',
    description: 'Creative building for the next generation.',
    features: ['Logical Thinking', 'AI Basics', 'No-code Apps'],
    comingSoon: true,
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-6",
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
    <section id="programs" className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        
        {/* Compact Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="h-[2px] w-6 bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">Curriculum</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Accelerate your <span className="gradient-text">Career.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            Bridge the gap between theory and industry-ready AI engineering.
          </motion.p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "group relative rounded-2xl p-5 md:p-6 transition-all duration-300 border border-white/5 flex flex-col justify-between",
                program.colSpan,
                program.highlight 
                  ? "bg-white/[0.03] glow-primary-sm border-primary/20" 
                  : "bg-card/40 hover:bg-card/60",
                program.comingSoon && "opacity-60"
              )}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "p-2.5 rounded-xl transition-transform group-hover:scale-110",
                    program.highlight ? "bg-primary text-white" : "bg-white/5 text-primary"
                  )}>
                    <program.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    <Clock className="w-3 h-3" />
                    {program.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 tracking-tight text-white">
                  {program.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {program.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {!program.comingSoon ? (
                <Button
                  size="sm"
                  onClick={scrollToApply}
                  className={cn(
                    "w-full h-10 rounded-lg font-bold transition-all active:scale-95 text-xs",
                    program.highlight 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-white/5 hover:bg-white/10 text-white"
                  )}
                >
                  View Details
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <Badge variant="outline" className="w-full py-1.5 justify-center border-dashed border-white/10 text-[10px] text-muted-foreground">
                  Coming Soon
                </Badge>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}