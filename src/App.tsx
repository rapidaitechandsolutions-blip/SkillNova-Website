import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 1. Global Wrapper for the whole site */}
      <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-white">
        
        {/* 2. The "Glue": Fixed grid and background that never moves */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] grid-pattern" />
        
        <Toaster />
        <Sonner />
        
        {/* 3. Content sits on top of the fixed background */}
        <div className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;