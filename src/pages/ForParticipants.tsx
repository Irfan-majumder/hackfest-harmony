
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight, Search, Users, Calendar, Award, Code, MessageSquare, Bookmark } from 'lucide-react';

const ForParticipants: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-10 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 -z-10" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl -z-10 animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  Discover & Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Amazing Hackathons</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Connect with fellow innovators, showcase your skills, and build awesome projects that matter. Find the perfect hackathon for you.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 transition-colors">
                    Explore Hackathons
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Create Your Profile
                  </Button>
                </div>
                <div className="mt-8 flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Badge variant="secondary" className="py-1">Free registration</Badge>
                  <Badge variant="secondary" className="py-1">10,000+ registered participants</Badge>
                </div>
              </div>
              <div className="animate-scale-in">
                <div className="relative">
                  <div className="absolute -top-5 -right-5 w-full h-full bg-accent/20 rounded-2xl"></div>
                  <div className="absolute -bottom-5 -left-5 w-full h-full bg-secondary/20 rounded-2xl"></div>
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Hackathon participants" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-6 md:px-10 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-4 border-accent/30">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need To Succeed In Hackathons
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform provides all the tools and features participants need to discover, join, and excel in hackathons.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 group-hover:bg-accent/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-accent/10 w-fit rounded-lg mb-4">
                    <Search className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Hackathon Discovery</CardTitle>
                  <CardDescription>
                    Find the perfect hackathon for your skills and interests.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Advanced filtering and search capabilities
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Personalized recommendations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Comprehensive event details
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0 group-hover:bg-secondary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-secondary/10 w-fit rounded-lg mb-4">
                    <Bookmark className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Easy Registration</CardTitle>
                  <CardDescription>
                    Seamless sign-up process for multiple events.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • One-click registration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Social media login integration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Personalized participant profile
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 group-hover:bg-primary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Team Formation</CardTitle>
                  <CardDescription>
                    Find team members or join existing teams easily.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Skill-based team matching
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Team creation and management
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • In-app team communication
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 group-hover:bg-accent/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-accent/10 w-fit rounded-lg mb-4">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Project Submission</CardTitle>
                  <CardDescription>
                    Easy-to-use interface for showcasing your work.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Streamlined submission process
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • GitHub repository integration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Multiple file format support
                  </p>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0 group-hover:bg-secondary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-secondary/10 w-fit rounded-lg mb-4">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Communication Tools</CardTitle>
                  <CardDescription>
                    Stay connected with organizers and teammates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Real-time messaging system
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Event-based chatrooms
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Important notifications and updates
                  </p>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 group-hover:bg-primary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Recognition & Rewards</CardTitle>
                  <CardDescription>
                    Showcase your achievements and win prizes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Digital certificates and badges
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Public portfolio of projects
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Prize distribution system
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-4 border-accent/30">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hear From Our Participants
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover what participants are saying about their experiences on our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl font-semibold text-accent">JD</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Jane Doe</CardTitle>
                      <CardDescription>Software Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "The team formation feature helped me find the perfect teammates with complementary skills. We ended up winning first place!"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-xl font-semibold text-secondary">MS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Michael Smith</CardTitle>
                      <CardDescription>UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "I've participated in over 10 hackathons through this platform. The submission process is seamless and the communication tools are top-notch."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-semibold text-primary">AJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Alex Johnson</CardTitle>
                      <CardDescription>Data Scientist</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "The hackathon discovery feature helped me find events specifically focused on AI and machine learning, which perfectly matched my interests."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-accent/5 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Join Your Next Hackathon?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Create your profile, discover events, and connect with fellow innovators to build something amazing.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 transition-colors"
                  >
                    Get Started Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group"
                  >
                    Browse Hackathons
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForParticipants;
