import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ThumbsUp, Award, Building2, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useScrollAnimation, useCountAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const stats = [
  { icon: Users, value: 16, suffix: '+', label: 'Students Trained', color: 'text-blue-400' },
  { icon: ThumbsUp, value: 100, suffix: '%', label: 'Satisfaction', color: 'text-emerald-400' },
  { icon: Award, value: 10, suffix: '+', label: 'AI Products', color: 'text-purple-400' },
  { icon: Building2, value: 5, suffix: '+', label: 'Colleges', color: 'text-amber-400' },
];

const ratings = [
  { label: 'Project Quality', value: 4.2 },
  { label: 'Mentorship Support', value: 4.4 },
  { label: 'Practical Learning', value: 4.3 },
  { label: 'Career Impact', value: 4.2 },
];

const testimonials = [
  {
    quote: "The hands-on AI approach made all the difference. I didn't just learn theory; I built a real product.",
    author: "Engineering Student",
    college: "Partner College",
    initials: "ES"
  },
  {
    quote: "Management responsiveness is excellent. They truly care about student outcomes and industry readiness.",
    author: "Final Year Student",
    college: "Tech University",
    initials: "FS"
  },
  {
    quote: "Best guidance for AI model support. The viva preparation support was a lifesaver for my finals.",
    author: "AI Builder Cohort",
    college: "Engineering Institute",
    initials: "AC"
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
          className="h-full bg-gradient-to-r from-primary to-accent relative"
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
      {/* Premium Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute -top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
            Our Track Record
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Proven <span className="gradient-text">Student Success</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just teach code; we launch careers with industry-validated results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass border-white/5 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Quality Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 p-8 rounded-[2.5rem] glass-strong border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Quality Metrics</h3>
            </div>
            <div className="space-y-8">
              {ratings.map((rating) => (
                <RatingBar key={rating.label} {...rating} isVisible={isVisible} />
              ))}
            </div>
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 p-8 md:p-12 rounded-[2.5rem] glass border-white/5 bg-white/[0.02] relative min-h-[400px] flex flex-col justify-between"
          >
            <Quote className="absolute top-10 right-10 w-20 h-20 text-white/[0.03]" />
            
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
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-200 tracking-tight">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-primary/20">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonials[current].author}</h4>
                      <p className="text-slate-500 text-sm font-medium">{testimonials[current].college}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === current ? "w-8 bg-primary" : "w-2 bg-white/10 hover:bg-white/20"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => paginate(-1)} 
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 w-12"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  onClick={() => paginate(1)} 
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 w-12"
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