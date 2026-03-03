import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const comparisonData = [
  {
    feature: 'Primary Focus',
    traditional: 'Certificate-focused',
    skillnova: 'Skill-focused with certification',
  },
  {
    feature: 'Project Deployment',
    traditional: 'No deployment required',
    skillnova: 'Deployment mandatory',
  },
  {
    feature: 'AI Workflow Training',
    traditional: 'Not included',
    skillnova: 'Core curriculum component',
  },
  {
    feature: 'Mentorship',
    traditional: 'Minimal to none',
    skillnova: 'Structured 1-on-1 mentorship',
  },
  {
    feature: 'Demo Day',
    traditional: 'Not available',
    skillnova: 'Industry showcase event',
  },
  {
    feature: 'Real Products',
    traditional: 'Mock projects only',
    skillnova: 'Live product development',
  },
];

export function Comparison() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How SkillNova is <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why industry-backed training outperforms traditional internships.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="rounded-2xl glass overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border/50">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Traditional Internships</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium gradient-text">SkillNova</div>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-3 gap-4 p-6 transition-colors hover:bg-card/50",
                  index !== comparisonData.length - 1 && "border-b border-border/30"
                )}
              >
                <div className="text-sm font-medium text-foreground">{row.feature}</div>
                <div className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-sm text-muted-foreground text-center">{row.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground text-center">{row.skillnova}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
