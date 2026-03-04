import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { ForColleges } from '@/components/sections/ForColleges';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  FileCheck, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  ArrowLeft 
} from 'lucide-react';

const CollegesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Back to Home Link */}
        <div className="container-custom mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Institutional Hero Section */}
        <section className="container-custom mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 border-primary/30 text-primary bg-primary/5 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
                Institutional Partnership
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
                Transform your <br className="hidden sm:block" />
                <span className="gradient-text italic font-semibold">Campus</span> into an <br />
                AI Innovation Hub.
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8 md:mb-10">
                Partner with <strong>RapidAI Services and Solutions</strong> to bring industrial-grade AI training to your institution. We don't just teach—we deploy.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-primary hover:opacity-90 h-14 font-bold shadow-xl shadow-primary/20">
                  Download Brochure
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 border-white/10 hover:bg-white/5">
                  View Case Studies
                </Button>
              </div>
            </motion.div>

            {/* Stats Grid - Fixed for Mobile */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] md:blur-[100px] rounded-full" />
              <div className="relative glass-strong p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-white/10">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { val: "5+", lab: "Partner Colleges" },
                    { val: "1k+", lab: "Students Trained" },
                    { val: "95%", lab: "Deployment Rate" },
                    { val: "50+", lab: "Industry Projects" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 text-center">
                      <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.val}</h4>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">{stat.lab}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Partnership Section */}
        <div className="overflow-hidden">
          <ForColleges />
        </div>

        {/* Roadmap Section - Responsive Steps */}
        <section className="container-custom py-16 md:py-24 bg-white/[0.01] rounded-[2rem] md:rounded-[3rem] border border-white/5 my-12 md:my-20">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Our Integration <span className="text-primary">Roadmap</span></h2>
            <p className="text-sm md:text-base text-muted-foreground">A structured approach to upgrading your college's technical output.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {/* Visual Line - Hidden on Mobile */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            
            {[
              { step: "01", title: "Consultation", desc: "We analyze your infrastructure and curriculum needs." },
              { step: "02", title: "Setup", desc: "Deployment of COE and onboarding of student cohorts." },
              { step: "03", title: "Execution", desc: "Industry-led training, hackathons, and project cycles." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center px-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 md:mb-6 text-lg md:text-xl font-black text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accreditation & Trust */}
        <section className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Certified Placement Support</h4>
                  <p className="text-sm text-muted-foreground">Direct pipeline for top performers to join RapidAI Global Tech ventures.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">NAAC/NBA Value Addition</h4>
                  <p className="text-sm text-muted-foreground">Our programs significantly boost the 'Industry Interaction' criteria for institutional rankings.</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Request Institutional Proposal</h3>
              <p className="text-muted-foreground text-sm mb-6 md:mb-8 leading-relaxed">
                Ready to take the next step? Send a request and our Institutional Head will contact you for a 1:1 briefing.
              </p>
              <Button onClick={() => window.location.href='#apply'} className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                Get a Custom Proposal <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CollegesPage;