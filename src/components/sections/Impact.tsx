import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ThumbsUp, Award, Building2, ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation, useCountAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Original Stats
const stats = [
  { icon: Users, value: 16, suffix: '+', label: 'Engineers Trained', color: 'text-blue-400' },
  { icon: ThumbsUp, value: 100, suffix: '%', label: 'Recommendation Rate', color: 'text-emerald-400' },
  { icon: Award, value: 150, suffix: '+', label: 'Projects Deployed', color: 'text-purple-400' },
  { icon: Building2, value: 5, suffix: '', label: 'Partner Colleges', color: 'text-amber-400' },
];

const ratings = [
  { label: 'Project Quality', value: 4.8 },
  { label: 'Timely Delivery', value: 4.7 },
  { label: 'Support & Guidance', value: 4.9 },
  { label: 'Management Responsiveness', value: 4.8 },
];

const testimonials = [
  {
    quote: "The AI-Native workflow helped me move beyond just writing code. I actually understood how to deploy a full-stack AI app for my final year submission.",
    author: "Desam Yashoda",
    college: "Ravindra College of Engineering for Women",
    project: "Anime Face Generation using DL",
    initials: "DY"
  },
  {
    quote: "Management responsiveness is excellent. They truly care about student outcomes and industry readiness.",
    author: "Aduru Prasanna Teja",
    college: "Pondicherry University",
    project: "Client Acquisition Analysis",
    initials: "AP"
  },
  {
    quote: "From zero deployment knowledge to launching my project on a live server. Highly recommend the 5-day sprint to all my friends.",
    author: "Shaik Muskan Begum",
    college: "Ravindra College of Engineering for Women",
    project: "Anime Face Generation",
    initials: "SM"
  },
  {
    quote: "Everything was good. The technical guidance for deep learning models was professional and easy to follow.",
    author: "Sura Sravani",
    college: "Ravindra College of Engineering for Women",
    project: "Deep Learning Specialist",
    initials: "SS"
  },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const count = useCountAnimation(value, 2000, isVisible);
  return <>{count}{suffix}</>;
}

function RatingBar({ label, value, isVisible }: { label: string; value: number; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth((value / 5) * 100), 300);
    }
  }, [isVisible, value]);

  return (
    <div className="group space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{label}</span>
        <span className="font-mono font-bold text-primary">{value}/5.0</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${width}%` : 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full bg-gradient-to-r from-primary to-blue-500 relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export function Impact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
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

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0 }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="impact" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background - Synced with Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute inset-0 grid-pattern opacity-[0.1] scale-110"
        />
        {/* Subtle glow highlights to match Hero's primary/accent colors */}
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Center Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_90%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-white/10 text-muted-foreground bg-white/5 uppercase tracking-widest text-[10px] font-bold">
            Real Results & Feedback
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Engineering the <span className="gradient-text italic font-semibold">AI-Ready</span> Generation
          </h2>
          <p className="text-muted-foreground text-lg">
            Our results are verified by students from leading technical institutions. We turn learners into digital creators.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass border-white/5 flex flex-col items-center justify-center text-center group transition-all hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <stat.icon className={cn("w-6 h-6 transition-transform group-hover:scale-110", stat.color)} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Quality Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Industry Standards</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Feedback Analytics</p>
              </div>
            </div>
            <div className="space-y-8">
              {ratings.map((rating) => (
                <RatingBar key={rating.label} {...rating} isVisible={isVisible} />
              ))}
            </div>
            
            <div className="mt-10 p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
               </div>
               <p className="text-xs text-muted-foreground font-medium">
                 <span className="text-white font-bold">100% Student Recommendation</span> based on recent project cohort analysis.
               </p>
            </div>
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 p-8 md:p-12 rounded-[2.5rem] glass border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent relative min-h-[450px] flex flex-col justify-between"
          >
            <Quote className="absolute top-10 right-10 w-24 h-24 text-primary/[0.03]" />
            
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "anticipate" }}
                  className="space-y-8"
                >
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-100 tracking-tight italic">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary/20">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{testimonials[current].author}</h4>
                      <div className="flex flex-col text-sm font-medium">
                        <span className="text-primary">{testimonials[current].project}</span>
                        <span className="text-muted-foreground">{testimonials[current].college}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-12 border-t border-white/5 pt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === current ? "w-10 bg-primary" : "w-2 bg-white/10 hover:bg-white/20"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => paginate(-1)} 
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 w-12 hover:border-primary/50 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => paginate(1)} 
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 w-12 hover:border-primary/50 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}