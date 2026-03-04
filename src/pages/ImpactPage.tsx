import { useState, useMemo, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, Rocket, Briefcase, 
  ArrowLeft, Star, Send, GraduationCap, MapPin, Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
interface Feedback {
  name: string;
  college: string;
  project: string;
  rating: number;
  text: string;
  date: string;
}

const ImpactPage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 1. Initial State
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { name: "Desam Yashoda", college: "Ravindra College", project: "Anime Face Gen", rating: 5, text: "The technical guidance for deep learning models was professional and easy to follow.", date: "Jan 2026" },
    { name: "Veena Madhuri", college: "Ravindra College", project: "Anime face generating", rating: 5, text: "Excellent support from the team. The AI workflows are game-changers.", date: "Jan 2026" },
    { name: "Aduru Prasanna Teja", college: "Pondicherry University", project: "Client Acquisition", rating: 4, text: "Management responsiveness is good and industry readiness is prioritized.", date: "Jan 2026" },
    { name: "Sura Sravani", college: "Ravindra College", project: "Anime face generation", rating: 5, text: "Everything was good. Very professional mentorship.", date: "Jan 2026" },
    { name: "Shaik Muskan Begum", college: "Ravindra College", project: "Anime Face Generation", rating: 5, text: "The 5-day sprint helped me launch my project on a live server.", date: "Jan 2026" },
  ]);

  // 2. Form State
  const [formData, setFormData] = useState({ name: '', college: '', project: '', rating: 5, text: '' });

  // 3. Score Meter Calculation
  const stats = useMemo(() => {
    const total = feedbacks.length;
    const avg = feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / total;
    const avgRating = Number(avg.toFixed(1));
    const percentage = (avgRating / 5) * 100;
    return { total, avgRating, percentage };
  }, [feedbacks]);

  // 4. Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return alert("Please fill in your name and feedback!");
    setFeedbacks([{ ...formData, date: "Just Now" }, ...feedbacks]);
    setFormData({ name: '', college: '', project: '', rating: 5, text: '' });
  };

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          className="absolute inset-0 grid-pattern opacity-[0.05] md:opacity-[0.1] scale-110"
        />
        <div className="absolute top-0 left-[-10%] md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px]" />
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

        {/* Hero & Score Meter */}
        <section className="container-custom mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="outline" className="mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
                Verification & Impact
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
                Real Skills. <br />
                <span className="gradient-text italic font-semibold">Verified Results.</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg max-w-xl leading-relaxed">
                Our Score Meter aggregates live feedback from every cohort. We maintain 100% transparency in student outcomes and project deployments.
              </p>
            </motion.div>

            {/* Score Meter */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] glass border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center gap-8 md:gap-10 justify-around shadow-2xl"
            >
              <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/5" />
                  <motion.circle 
                    cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10" fill="transparent" 
                    strokeDasharray="251.2%" 
                    initial={{ strokeDashoffset: "251.2%" }}
                    animate={{ strokeDashoffset: `${251.2 - (251.2 * stats.percentage) / 100}%` }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="text-primary" 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-3xl md:text-5xl font-black block leading-none">{stats.avgRating}</span>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Avg Rating</span>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 text-center sm:text-left">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white">{stats.total}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Verified Testimonials</p>
                </div>
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-5 h-5 md:w-6 md:h-6", i < Math.floor(stats.avgRating) ? "text-primary fill-primary" : "text-white/10")} />
                  ))}
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 py-1 text-[10px] md:text-xs">
                  100% Recommendation Rate
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Input Form - Sticky on Desktop, Static on Mobile */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass-strong border-white/10">
                <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  Share Your Story
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm text-white"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="College Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm text-white"
                    value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}
                  />
                  <div className="flex items-center justify-between py-2 px-1">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Your Rating:</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <Star 
                          key={star} 
                          className={cn("w-5 h-5 cursor-pointer transition-all", formData.rating >= star ? 'text-primary fill-primary scale-110' : 'text-white/10')}
                          onClick={() => setFormData({...formData, rating: star})}
                        />
                      ))}
                    </div>
                  </div>
                  <textarea 
                    placeholder="Describe your project and experience..." 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm text-white resize-none"
                    value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-primary hover:opacity-90 text-white font-bold py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 text-sm md:text-base">
                    <Send className="w-4 h-4" /> Post Feedback
                  </button>
                </form>
              </div>
            </div>

            {/* Testimonials List */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                  Student Voices
                  <span className="text-primary/30 text-xs md:text-sm font-normal">/ verified</span>
                </h3>
                <div className="flex items-center gap-2 text-emerald-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest bg-emerald-400/5 px-2 md:px-3 py-1 rounded-full border border-emerald-400/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Stream
                </div>
              </div>
              
              <div className="grid gap-4 md:gap-6">
                <AnimatePresence mode="popLayout">
                  {feedbacks.map((item, idx) => (
                    <motion.div 
                      key={item.name + idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                      className="p-6 md:p-8 rounded-2xl md:rounded-3xl glass border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 md:gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-bold text-lg md:text-xl text-white group-hover:text-primary transition-colors">{item.name}</h4>
                            <div className="flex gap-0.5">
                              {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary fill-primary" />)}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 md:gap-4 text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4 md:mb-6">
                            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-primary" /> {item.college}</span>
                            <span className="flex items-center gap-1.5 text-white/60"><Rocket className="w-3 h-3 text-primary" /> {item.project}</span>
                          </div>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">"{item.text}"</p>
                        </div>
                        <span className="self-start text-[9px] font-bold text-muted-foreground bg-white/5 px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-tighter">
                          {item.date}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Stats Bar */}
        <section className="container-custom mt-20 md:mt-32 py-12 md:py-20 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Placement Rate", value: "92%", icon: Briefcase },
              { label: "AI Tools Mastery", value: "100%", icon: TrendingUp },
              { label: "Live Deployments", value: "150+", icon: Rocket },
              { label: "Industry Partners", value: "12+", icon: Globe }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <s.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h4 className="text-2xl md:text-4xl font-black mb-1">{s.value}</h4>
                <p className="text-[8px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImpactPage;