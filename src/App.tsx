import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bio from "./pages/Bio";
import Publications from "./pages/Publications";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Teaching from "./pages/Teaching";
import Others from "./pages/Others";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/bio" element={<Navigate to="/" replace />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/others" element={<Others />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
