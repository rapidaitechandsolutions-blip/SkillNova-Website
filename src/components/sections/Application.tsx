import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Send, User, Building2 } from 'lucide-react';

const programs = [
  'AI Product Sprint (5-Day)',
  '4-Week AI Builder Program',
  'Industry Internship Program',
  'Final Year Project Mentorship',
];

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

export function Application() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStudentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted! 🎉",
      description: "Thank you for your interest. We'll get back to you within 48 hours.",
    });
    
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  const handleCollegeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Partnership Request Sent! 🤝",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <section id="apply" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Apply as a student or partner with us as an institution.
          </p>
        </div>

        {/* Tabs */}
        <div className={cn(
          "max-w-2xl mx-auto transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-14 glass">
              <TabsTrigger 
                value="student" 
                data-tab="student"
                className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground h-12 gap-2"
              >
                <User className="w-4 h-4" />
                Student Application
              </TabsTrigger>
              <TabsTrigger 
                value="college"
                data-tab="college"
                className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground h-12 gap-2"
              >
                <Building2 className="w-4 h-4" />
                College Partnership
              </TabsTrigger>
            </TabsList>

            {/* Student Form */}
            <TabsContent value="student">
              <form onSubmit={handleStudentSubmit} className="p-8 rounded-2xl glass space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="student-name">Full Name *</Label>
                    <Input
                      id="student-name"
                      placeholder="Enter your full name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email Address *</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="student-college">College Name *</Label>
                    <Input
                      id="student-college"
                      placeholder="Your institution name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-branch">Branch *</Label>
                    <Input
                      id="student-branch"
                      placeholder="e.g., Computer Science"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="student-year">Year *</Label>
                    <Select required>
                      <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-phone">Phone Number *</Label>
                    <Input
                      id="student-phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-program">Program Interested *</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>{program}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-statement">Why do you want to join? *</Label>
                  <Textarea
                    id="student-statement"
                    placeholder="Tell us about your goals and what you hope to achieve..."
                    rows={4}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary-sm"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* College Form */}
            <TabsContent value="college">
              <form onSubmit={handleCollegeSubmit} className="p-8 rounded-2xl glass space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="college-name">Institution Name *</Label>
                    <Input
                      id="college-name"
                      placeholder="College/University name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college-coordinator">Coordinator Name *</Label>
                    <Input
                      id="college-coordinator"
                      placeholder="Point of contact name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="college-location">Location *</Label>
                    <Input
                      id="college-location"
                      placeholder="City, State"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college-students">Estimated Students *</Label>
                    <Input
                      id="college-students"
                      type="number"
                      placeholder="Number of students"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="college-email">Email Address *</Label>
                    <Input
                      id="college-email"
                      type="email"
                      placeholder="institutional@email.edu"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college-phone">Phone Number *</Label>
                    <Input
                      id="college-phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary-sm"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Request Partnership
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
