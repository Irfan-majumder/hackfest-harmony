
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-secondary/10 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-soft animate-scale-in">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your hackathon experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of organizers and participants who are creating, collaborating,
              and innovating on our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Started for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group"
              >
                Schedule a Demo
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. Free plan available for community hackathons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
