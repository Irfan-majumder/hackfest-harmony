
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight, Users, Calendar, Award, BarChart, Layers, CheckCircle, Settings, Filter, MessageSquare } from 'lucide-react';

const ForOrganizers: React.FC = () => {
  // Check if user is logged in - this would be from your auth context in a real app
  const isLoggedIn = false;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-10 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  Organize Hackathons <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Without The Hassle</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Powerful tools to create, manage, and scale your hackathons with ease. Focus on what matters – inspiring innovation and creativity.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {isLoggedIn ? (
                    <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors" asChild>
                      <Link to="/create-event">
                        Create Your Hackathon
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </Link>
                    </Button>
                  ) : (
                    <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors" asChild>
                      <Link to="/signup-organizer">
                        Get Started
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </div>
                <div className="mt-8 flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Badge variant="secondary" className="py-1">No credit card required</Badge>
                  <Badge variant="secondary" className="py-1">30-day free trial</Badge>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-scale-in">
                <div className="relative">
                  <div className="absolute -top-5 -left-5 w-full h-full bg-secondary/20 rounded-2xl"></div>
                  <div className="absolute -bottom-5 -right-5 w-full h-full bg-primary/20 rounded-2xl"></div>
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Hackathon organizers" 
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
              <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/30">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need To Run Successful Hackathons
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive platform provides all the tools and features you need to create, manage, and scale hackathons of any size.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 group-hover:bg-primary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customizable Landing Pages</CardTitle>
                  <CardDescription>
                    Create branded event pages with customizable sections and media integration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Visually appealing, branded event pages
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Customizable sections for event details
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Media integration and real-time updates
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0 group-hover:bg-secondary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-secondary/10 w-fit rounded-lg mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Registration Management</CardTitle>
                  <CardDescription>
                    Monitor and manage participant registrations with ease.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Comprehensive registration dashboard
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Email integration for confirmations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Dynamic forms for participant details
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 group-hover:bg-accent/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-accent/10 w-fit rounded-lg mb-4">
                    <BarChart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Track trends, demographics, and engagement metrics.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Real-time registration analytics
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Participant demographics tracking
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Exportable reports and insights
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 group-hover:bg-primary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Team Formation Tools</CardTitle>
                  <CardDescription>
                    Help participants find and join the perfect teams.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Skill-based team matching
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Team management dashboard
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Team communication tools
                  </p>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0 group-hover:bg-secondary/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-secondary/10 w-fit rounded-lg mb-4">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Project Submission Portal</CardTitle>
                  <CardDescription>
                    Streamlined submission process for participants.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Easy-to-use submission forms
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Support for various submission types
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Centralized submission management
                  </p>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 group-hover:bg-accent/10 transition-colors"></div>
                <CardHeader className="relative z-10">
                  <div className="p-3 bg-accent/10 w-fit rounded-lg mb-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Judging System</CardTitle>
                  <CardDescription>
                    Structured judging interface with customizable criteria.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Customizable judging criteria
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Real-time scoring and feedback
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Dynamic leaderboard integration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/30">Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our simple yet powerful process makes organizing hackathons easier than ever before.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Create Your Hackathon</h3>
                <p className="text-muted-foreground">
                  Set up your hackathon in minutes with our intuitive dashboard. Customize every aspect to match your brand and vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Manage Registrations</h3>
                <p className="text-muted-foreground">
                  Track registrations, communicate with participants, and organize teams all from a centralized dashboard.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Run Your Event</h3>
                <p className="text-muted-foreground">
                  Leverage our tools for project submissions, judging, and announcing winners to ensure a smooth event from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Create Your Next Hackathon?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of hackathon organizers who trust our platform to create unforgettable innovation experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {isLoggedIn ? (
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 transition-colors"
                      asChild
                    >
                      <Link to="/create-event">Create Your Hackathon</Link>
                    </Button>
                  ) : (
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 transition-colors"
                      asChild
                    >
                      <Link to="/signup-organizer">Create Your Hackathon</Link>
                    </Button>
                  )}
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group"
                  >
                    View Pricing
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

export default ForOrganizers;
