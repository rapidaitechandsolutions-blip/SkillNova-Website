import { useState, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Users2, 
  Code2, 
  Building2, 
  Lightbulb, 
  History,
  Workflow,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Lightbulb,
    title: "The Problem",
    desc: "Traditional engineering education lags 3-5 years behind the industry, leaving graduates with theory but no production-level AI experience.",
    color: "text-amber-400"
  },
  {
    icon: Workflow,
    title: "Our Solution",
    desc: "We provide an immersive, 'work-simulated' environment where students build using the same standards used at RapidAI Services.",
    color: "text-primary"
  },
  {
    icon: History,
    title: "The Vision",
    desc: "To create a workforce of AI-Native engineers who can bridge the gap between a prompt and a fully deployed global product.",
    color: "text-blue-400"
  }
];

const AboutPage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Sync background parallax with other pages
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Performance optimization: only run on non-touch devices
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
      
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          className="absolute inset-0 grid-pattern opacity-[0.05] md:opacity-[0.1] scale-110"
        />
        <div className="absolute top-[-5%] right-[-10%] md:right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] md:left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/5 blur-[80px] md:blur-[100px]" />
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Navigation */}
        <div className="container-custom mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="container-custom mb-16 md:mb-24 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
                Our Genesis
              </Badge>
              <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-white">
                Engineering the <br className="hidden sm:block" />
                <span className="gradient-text italic font-semibold">Next Generation.</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                SkillNova is more than a platform—it's an <span className="text-white font-medium">Engineering Accelerator</span> born from the production-grade requirements of <span className="text-primary font-medium">RapidAI Services and Solutions</span>. 
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- THE THREE PILLARS --- */}
        <section className="container-custom py-8 md:py-12 mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] glass border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
              >
                <div className={cn(
                  "w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-all duration-500",
                )}>
                  <pillar.icon className={cn("w-6 h-6 md:w-7 md:h-7", pillar.color)} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- THE RAPIDAI CONNECTION --- */}
        <section className="container-custom py-16 md:py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1 text-[10px] md:text-xs">The RapidAI Advantage</Badge>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                  Where Academy <br className="hidden md:block"/> Meets <span className="gradient-text italic">Industry Labs</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Most bootcamps hire trainers. We don't. Our mentors are the same engineers who develop clinical AI for <span className="text-white font-medium italic">Prenatal AI</span> and research automation for global enterprises.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: ShieldCheck, text: "Production-Grade Standards" },
                  { icon: Users2, text: "Direct Executive Mentorship" },
                  { icon: Code2, text: "Live RapidAI Repositories" },
                  { icon: Building2, text: "Internal Hiring Pipeline" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group/item">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover/item:scale-110 transition-transform" />
                    <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
              <div className="relative glass-strong p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 blur-3xl pointer-events-none" />
                <h3 className="text-lg md:text-2xl font-medium mb-8 md:mb-10 italic text-white leading-relaxed tracking-tight">
                  "Traditional degrees are no longer enough. The industry needs builders who can think in AI. SkillNova is the factory where we turn theory into production code."
                </h3>
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-tr from-primary to-blue-600 shadow-xl shadow-primary/20 flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    LR
                  </div>
                  <div className="text-left">
                    <p className="text-white font-black uppercase tracking-widest text-xs md:text-sm">Lalith Raj</p>
                    <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mt-1">Founder & CEO, SkillNova</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- OUR COMMITMENT --- */}
        <section className="container-custom py-8 md:py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-white/5 relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -left-20 w-60 md:w-80 h-60 md:h-80 bg-primary/5 blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Our Commitment to You</h2>
              <div className="space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  We are not here to sell certificates. We are here to build careers. Every student who enters SkillNova is treated as a <span className="text-white font-medium">Junior Developer at RapidAI</span>. You will face real bugs, real deadlines, and professional code reviews.
                </p>
                <p>
                  By the time you finish our programs, you won't just have a portfolio; you'll have the technical confidence of an engineer who has shipped code that works in the real world.
                </p>
              </div>
              <button 
                onClick={() => navigate('/programs')}
                className="mt-8 md:mt-10 flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:gap-4 transition-all"
              >
                Explore our engineering tracks <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;