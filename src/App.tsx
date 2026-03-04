import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Page Imports
import Index from "./pages/Index";
import ProgramsPage from "./pages/ProgramsPage";
import ImpactPage from "./pages/ImpactPage";
import CollegesPage from "./pages/CollegesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop Helper Component
// This ensures that when you switch pages, the browser scrolls to the top automatically.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global Wrapper for the whole site */}
      <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-white">
        
        {/* The "Glue": Fixed grid and background that never moves */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] grid-pattern" />
        
        <Toaster />
        <Sonner />
        
        {/* Router and Page Content */}
        <div className="relative z-10">
          <BrowserRouter>
            {/* ScrollToTop must be inside BrowserRouter to work */}
            <ScrollToTop />
            
            <Routes>
              {/* Main Landing Page */}
              <Route path="/" element={<Index />} />

              {/* Individual Dedicated Pages */}
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/colleges" element={<CollegesPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;