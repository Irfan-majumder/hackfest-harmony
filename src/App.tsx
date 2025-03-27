
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForOrganizers from "./pages/ForOrganizers";
import ForParticipants from "./pages/ForParticipants";
import SignUp from "./pages/SignUp";
import SignUpOrganizer from "./pages/SignUpOrganizer";
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";
import AiBotIcon from "./components/AiBotIcon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-organizers" element={<ForOrganizers />} />
          <Route path="/for-participants" element={<ForParticipants />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-organizer" element={<SignUpOrganizer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-event" element={<CreateEvent />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <AiBotIcon />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
