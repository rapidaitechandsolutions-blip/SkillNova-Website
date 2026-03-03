import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Is this a paid program?',
    answer: 'Yes, our programs are paid. We offer industry-standard training with affordable pricing designed specifically for students. The investment covers 1-on-1 mentorship, live project deployment, professional certification, and placement assistance.',
  },
  {
    question: 'Will we receive certification?',
    answer: 'Absolutely. Upon successful completion, you receive an industry-recognized certification from SkillNova, officially backed by RapidAI Services and Solutions. This serves as a powerful validation of your AI-native engineering skills for employers.',
  },
  {
    question: 'Is the program online or offline?',
    answer: 'We follow a high-impact hybrid model. For partner institutions, we conduct on-campus workshops. For individual students, we provide intensive online sessions combined with virtual collaborative building labs.',
  },
  {
    question: 'Are projects actually deployed?',
    answer: 'Yes. Every single program requires a mandatory live deployment. You won’t just leave with a certificate; you’ll leave with a live URL and a portfolio of functioning products that showcase your ability to build in the real world.',
  },
  {
    question: 'Who are the mentors?',
    answer: 'Our mentors are active engineers and product specialists from RapidAI Services and Solutions. They bring real-world experience from building products for national and international clients, ensuring you learn industry-standard workflows.',
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Static Header Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
                Support
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Everything you <br />
                <span className="gradient-text">Need to Know.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm">
                Can't find what you're looking for? Reach out to our support team for specialized institutional queries.
              </p>
              
              <div className="pt-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 w-fit">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Still have questions?</p>
                    <p className="text-sm text-slate-200">contact@skillnova.in</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] px-6 transition-all duration-300 data-[state=open]:bg-white/[0.05] data-[state=open]:border-primary/30 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-200 hover:text-white hover:no-underline py-6 transition-all [&[data-state=open]>svg]:rotate-90">
                      <span className="flex items-center gap-4">
                        <ChevronRight className="w-4 h-4 text-primary transition-transform duration-300" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 text-sm md:text-base pb-6 leading-relaxed pl-8 border-t border-white/5 pt-4 mt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}