
import React from 'react';
import HackathonCard from './HackathonCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const hackathons = [
  {
    id: '1',
    title: 'AI Innovation Challenge',
    organizer: 'TechCorp',
    description: 'Build cutting-edge AI solutions to solve real-world problems. Join us for a weekend of innovation, learning, and collaboration.',
    startDate: '2023-11-10',
    endDate: '2023-11-12',
    location: 'Virtual',
    teamSize: '2-5 members',
    prizes: '$10,000 in prizes',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    status: 'upcoming',
    featured: true,
  },
  {
    id: '2',
    title: 'HealthTech Hackathon',
    organizer: 'MedInnovate',
    description: 'Create solutions to improve healthcare delivery, patient experience, and medical outcomes using technology.',
    startDate: '2023-10-20',
    endDate: '2023-10-22',
    location: 'San Francisco, CA',
    teamSize: '3-4 members',
    prizes: '$5,000 + mentorship',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    status: 'active',
  },
  {
    id: '3',
    title: 'Climate Solutions Challenge',
    organizer: 'EcoTech Foundation',
    description: 'Tackle climate change challenges with innovative tech solutions. Create sustainable, scalable projects with real impact.',
    startDate: '2023-12-01',
    endDate: '2023-12-03',
    location: 'Berlin, Germany',
    teamSize: '1-4 members',
    prizes: '€7,500 in prizes',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    status: 'upcoming',
  },
];

const FeaturedHackathons: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Featured Hackathons</h2>
            <p className="text-muted-foreground">
              Discover the most exciting upcoming hackathons from around the world. 
              Register now to secure your spot and showcase your skills.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 group"
          >
            View All Hackathons
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={hackathon.id}
              {...hackathon}
              className={`animate-fade-in animate-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHackathons;
