import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Programs } from '@/components/sections/Programs';
import { Impact } from '@/components/sections/Impact';
import { Comparison } from '@/components/sections/Comparison';
import { Industry } from '@/components/sections/Industry';
import { ForColleges } from '@/components/sections/ForColleges';
import { Application } from '@/components/sections/Application';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    /* We remove the bg-background here so the App.tsx background shows through */
    <div className="relative">
      <Navbar />
      
      <main className="relative">
        {/* HERO: The entrance point */}
        <Hero />
        
        {/* TRANSITION ZONE: We wrap sections in a div to manage flow */}
        <div className="flex flex-col">
          <Problem />
          <Programs />
          <Impact />
          
          {/* PRO TIP: We can add a global "Glow" here that 
            sits BETWEEN sections to blur the lines 
          */}
          <div className="relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none z-0" />
             <Comparison />
          </div>
          
          <Industry />
          <ForColleges />
          <Application />
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;