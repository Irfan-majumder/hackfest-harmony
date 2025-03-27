
import React from 'react';
import { 
  Award, Users, Calendar, Layout, BarChart, MessageSquare,
  Search, UserPlus, FileCode, Truck, HeartHandshake, Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "relative group p-6 rounded-xl border border-border bg-card transition-all duration-300",
      "hover:border-primary/50 hover:shadow-soft hover:-translate-y-1",
      className
    )}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-12 w-12 flex items-center justify-center rounded-lg mb-4 bg-primary/10 text-primary">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const organizerFeatures = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Customizable Event Pages",
      description: "Create branded landing pages with custom sections, media, and real-time updates."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Registration Management",
      description: "Monitor registrations, send automated emails, and collect participant information."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Participant Analytics",
      description: "Track registration trends, demographics, and engagement metrics in real-time."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Judging System",
      description: "Structured interface for judging submissions with customizable criteria and leaderboards."
    },
  ];

  const participantFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Discover Hackathons",
      description: "Find events that match your skills and interests with advanced filters and recommendations."
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Team Formation",
      description: "Find teammates with complementary skills through our dynamic team creation interface."
    },
    {
      icon: <FileCode className="h-6 w-6" />,
      title: "Project Submission",
      description: "Submit your projects easily with our intuitive submission interface and receive instant confirmation."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Communication Tools",
      description: "Connect with organizers, teams, and participants through our real-time messaging system."
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary font-medium mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need to run successful hackathons
          </h2>
          <p className="text-muted-foreground">
            Our platform provides powerful tools for both organizers and participants, 
            making it easier than ever to create, manage, and participate in hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* Organizer Features */}
          <div>
            <div className="flex items-center mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold">For Organizers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizerFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  className={`animate-fade-in animate-delay-${index * 100}`}
                />
              ))}
            </div>
          </div>

          {/* Participant Features */}
          <div>
            <div className="flex items-center mb-8">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mr-4">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold">For Participants</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {participantFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  className={`animate-fade-in animate-delay-${index * 100}`}
                />
              ))}
            </div>
          </div>

          {/* Platform Highlights */}
          <div className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-primary/20 animate-scale-in">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-medium">Powered by cutting-edge technology</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                A seamless platform for innovation and collaboration
              </h2>
              
              <p className="text-lg mb-8">
                Join thousands of hackathon organizers and participants who are building 
                the future together on our platform.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Hackathons Hosted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Participants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2.5k+</div>
                  <div className="text-sm text-muted-foreground">Projects Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
