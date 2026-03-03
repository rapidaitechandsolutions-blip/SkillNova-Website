import { motion } from 'framer-motion';
import { BookOpen, Award, Brain, Rocket, AlertTriangle, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const problems = [
  {
    icon: BookOpen,
    title: 'Theory-Heavy Learning',
    description: 'Limited real-world exposure leaves students unprepared for industry challenges.',
  },
  {
    icon: Award,
    title: 'Certificate-Based Internships',
    description: 'Most internships focus on paper credentials without delivering technical depth.',
  },
  {
    icon: Brain,
    title: 'No AI Workflow Training',
    description: 'Traditional systems miss out on modern AI-assisted development practices.',
  },
  {
    icon: Rocket,
    title: 'Lack of Deployment Experience',
    description: 'Graduating without a portfolio of live, deployed projects.',
  },
];

export function Problem() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Impactful Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-destructive/30 text-destructive bg-destructive/5 uppercase tracking-widest text-[10px] font-bold">
              The Critical Gap
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Why traditional <br />
              <span className="text-slate-500">education is </span> <br />
              <span className="gradient-text">Falling Behind.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10">
              The tech landscape is shifting towards AI-native development. 
              College curriculums haven't updated in years, creating a massive 
              readiness gap for new graduates.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-destructive/80 font-medium">
                <AlertTriangle className="w-5 h-5" />
                <span>Low Placement Readiness</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="h-px w-8 bg-slate-800" />
                <span>Industry expectations are 10x higher</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Problems Stack */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-[2rem] glass border-white/5 hover:border-destructive/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background line */}
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-destructive/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-destructive transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Solution Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-1 px-1 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-white/5 to-transparent"
        >
          <div className="glass-strong p-10 md:p-14 rounded-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                We don't just teach. <br />
                We <span className="gradient-text">Bridge the Gap.</span>
              </h3>
              <p className="text-slate-400">
                SkillNova replaces outdated theory with AI-driven project cycles 
                that mirror actual industry engineering teams.
              </p>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 animate-pulse-glow">
              <ChevronRight className="w-10 h-10 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}