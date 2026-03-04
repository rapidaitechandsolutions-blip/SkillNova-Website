import { useState, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Programs } from '@/components/sections/Programs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap, Target, BarChart3, ArrowLeft, Download, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const learningOutcomes = [
  {
    title: "AI-First Development",
    desc: "Master prompt engineering, LLM integration, and AI-assisted coding workflows to build 10x faster.",
    icon: Zap,
    color: "text-amber-400"
  },
  {
    title: "Full-Stack Mastery",
    desc: "Build scalable applications using modern stacks including Next.js, FastAPI, and PostgreSQL.",
    icon: Target,
    color: "text-blue-400"
  },
  {
    title: "Real-World Deployment",
    desc: "Learn CI/CD pipelines, cloud hosting on Vercel/AWS, and production-level monitoring.",
    icon: BarChart3,
    color: "text-emerald-400"
  }
];

const ProgramsPage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only track mouse on non-touch devices to save performance
      if (window.matchMedia('(pointer: fine)').matches) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background - Improved overflow handling */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          className="absolute inset-0 grid-pattern opacity-[0.1] scale-110"
        />
        {/* Adjusted blobs to not cause horizontal overflow */}
        <div className="absolute top-[5%] left-[-10%] md:left-[-5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] md:right-[-5%] w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] bg-accent/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Navigation */}
        <div className="container-custom mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Header Section */}
        <section className="container-custom mb-12 md:mb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
                Detailed Curriculum
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] text-white">
                Master the <span className="gradient-text italic font-semibold">AI-Native</span> <br className="hidden sm:block" />
                Engineering Stack.
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Programs meticulously crafted by industry veterans at <span className="text-white font-medium">RapidAI Services</span> to transform students into production-ready engineers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Programs Grid */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
           <Programs />
        </div>

        {/* Detailed Learning Outcomes */}
        <section className="container-custom py-16 md:py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                  What you will <br className="hidden md:block"/>
                  <span className="gradient-text italic font-semibold">Master</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our curriculum isn't just about syntax—it's about the professional workflow used in top-tier tech companies.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                {learningOutcomes.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 md:gap-6 group"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                      <item.icon className={cn("w-5 h-5 md:w-7 md:h-7", item.color)} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-strong p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] border-white/10 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
                <Rocket className="w-64 h-64 text-primary" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">The SkillNova Edge</h3>
                <ul className="space-y-4 md:space-y-5 mb-8 md:mb-12">
                  {[
                    "Hands-on with RapidAI's internal tools",
                    "Weekly 1:1 code reviews with senior devs",
                    "Direct access to internship pipelines",
                    "Lifetime access to AI Engineering community",
                    "Personal Branding & Portfolio setup"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 text-muted-foreground group/item">
                      <div className="mt-1">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-medium group-hover/item:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:opacity-90 h-12 md:h-14 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex gap-3 shadow-xl shadow-primary/20 group/btn">
                  <Download className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-y-0.5 transition-transform" />
                  Download Full Syllabus
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-custom py-12 md:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] text-center border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight">
                Ready to upgrade <br className="hidden md:block"/> your career?
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
                Join our next cohort and bridge the gap between classroom learning and industry-grade engineering.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 md:px-12 h-14 md:h-16 text-base md:text-lg font-bold bg-primary hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30">
                  Apply for Program
                </Button>
                <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Cohort starting soon
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;