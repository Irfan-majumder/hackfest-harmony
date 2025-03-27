import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import AiChat from './AiChat';

const AiBotIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <>
      <div 
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className={`rounded-full p-3.5 bg-gradient-to-r from-primary to-accent shadow-lg flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                aria-label="AI Assistant"
                onClick={() => setIsChatOpen(true)}
              >
                <Bot size={26} className="text-white" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Need help? Ask our AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <AiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default AiBotIcon;
