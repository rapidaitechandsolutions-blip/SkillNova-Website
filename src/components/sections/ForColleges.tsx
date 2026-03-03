import { motion } from 'framer-motion';
import { School, Users, Presentation, Award, Calendar, BookOpen, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: School,
    title: 'On-Campus Training',
    description: 'Intensive training delivered directly at your institution.',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Hybrid Delivery',
    description: 'Flexible online + offline modules to suit your infrastructure.',
    size: 'small',
  },
  {
    icon: BookOpen,
    title: 'Live Project Building',
    description: 'Students work on real industry projects, not simulations.',
    size: 'large', // More emphasis on the core value
  },
  {
    icon: Presentation,
    title: 'Demo Day Showcase',
    description: 'Present projects to industry panels and recruiters.',
    size: 'small',
  },
  {
    icon: Award,
    title: 'Industry Certification',
    description: 'Recognized certification backed by Rapid AI Services.',
    size: 'small',
  },
  {
    icon: Calendar,
    title: 'Structured Curriculum',
    description: 'Clear milestones designed for semester-long outcomes.',
    size: 'small',
  },
  {
    icon: DollarSign,
    title: 'Affordable & Scalable',
    description: 'Cost-effective programs that scale with your student count.',
    size: 'small',
  },
];

export function ForColleges() {
  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const tabTrigger = document.querySelector('[data-tab="college"]') as HTMLButtonElement;
        tabTrigger?.click();
      }, 500);
    }
  };

  return (
    <section id="colleges" className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Background Cinematic Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
              University Partnerships
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Empowering <span className="gradient-text italic">Institutions</span> <br />
            with Industry Depth
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Bridge the gap between academic theory and industry requirements. 
            SkillNova brings a plug-and-play AI engineering curriculum to your campus.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "group relative p-6 rounded-[2rem] transition-all duration-500 border border-white/5",
                benefit.size === 'large' 
                  ? "md:col-span-6 lg:col-span-6 bg-white/[0.03] glass-strong" 
                  : "md:col-span-3 lg:col-span-3 glass hover:bg-white/[0.05] hover:border-primary/20",
              )}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={cn(
                    "w-11 h-11 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                    benefit.size === 'large' ? "bg-primary text-white" : "bg-white/5 text-primary"
                  )}>
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className={cn(
                    "text-lg md:text-xl font-bold mb-3 tracking-tight",
                    benefit.size === 'large' ? "text-white" : "text-slate-200"
                  )}>
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {benefit.size === 'large' && (
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Industry Standard
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Call-to-Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Button
            size="lg"
            onClick={scrollToApply}
            className="h-14 px-10 text-sm font-bold rounded-full bg-primary text-white glow-primary transition-all hover:scale-[1.03] active:scale-95 group"
          >
            Request Partnership Proposal
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-6 text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
            Join 5+ institutions already scaling with SkillNova
          </p>
        </motion.div>
      </div>
    </section>
  );
}