
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search, Award, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)] py-16">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary font-medium">
                <span className="animate-pulse mr-1">●</span> Launching Soon!
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Where Innovation <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Meets Collaboration
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              The ultimate platform for organizing and participating in hackathons. 
              Connect with brilliant minds, showcase your skills, and build the future.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all">
                <Search className="mr-2 h-5 w-5" />
                Find Hackathons
              </Button>
              <Button size="lg" variant="outline" className="group">
                Create an Event
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                <span>500+ Hackathons</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span>10,000+ Participants</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>Events All Year</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-fade-in-right glass-panel rounded-2xl overflow-hidden p-1">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Hackathon participants" 
                className="w-full h-auto rounded-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 p-4 glass-panel rounded-lg w-48 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-sm font-medium">Next Big Event</div>
                <div className="text-xs text-muted-foreground mt-1">Starting in 3 days</div>
                <Link to="/hackathons/upcoming" className="mt-2 text-xs text-primary inline-flex items-center">
                  Learn more
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
              
              <div className="absolute -top-4 -left-4 glass-panel rounded-lg p-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="font-semibold text-sm">Global Reach</div>
                <div className="flex items-center mt-1">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-xs ml-2 text-muted-foreground">40+ countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
