import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Brain, Stethoscope, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
  { icon: Globe, label: 'Web Systems' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Brain, label: 'AI Solutions' },
  { icon: Stethoscope, label: 'Medical AI' },
];

export function Industry() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Authority Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border-primary/20 mb-10"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Industry Backed</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            Powered by <br />
            <span className="gradient-text italic font-semibold">RapidAI Services and Solutions</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            SkillNova is the edutech vertical of a global technology firm delivering 
            cutting-edge AI solutions to international clients across diverse domains.
          </motion.p>

          {/* Industry Expertise Grid */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {services.map((service, idx) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border-white/5 transition-all group cursor-default"
              >
                <service.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm font-bold tracking-tight text-slate-200">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Visit CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all group"
              onClick={() => window.open('https://rapidai-services-and-solutions.netlify.app/', '_blank')}
            >
              Explore Parent Company
              <ExternalLink className="w-4 h-4 ml-3 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}