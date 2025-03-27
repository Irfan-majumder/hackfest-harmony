
import React from 'react';
import { Calendar, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface HackathonCardProps {
  id: string;
  title: string;
  organizer: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  teamSize: string;
  prizes: string;
  imageUrl: string;
  status: 'upcoming' | 'active' | 'ended';
  featured?: boolean;
  className?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  title,
  organizer,
  description,
  startDate,
  endDate,
  location,
  teamSize,
  prizes,
  imageUrl,
  status,
  featured = false,
  className,
}) => {
  const navigate = useNavigate();

  const statusColors = {
    upcoming: 'bg-blue-500',
    active: 'bg-green-500',
    ended: 'bg-gray-500'
  };

  const handleClick = () => {
    navigate(`/hackathons/${id}`);
  };

  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300",
        "border border-border hover:border-primary/50",
        "hover:shadow-soft hover:-translate-y-1",
        featured ? "md:col-span-2 h-auto" : "h-full",
        className
      )}
      onClick={handleClick}
    >
      <div className="absolute top-4 right-4 z-10">
        <Badge 
          className={cn(
            "px-3 py-1 font-medium capitalize",
            statusColors[status]
          )}
        >
          {status}
        </Badge>
        {featured && <Badge className="ml-2 bg-secondary px-3 py-1 font-medium">Featured</Badge>}
      </div>
      
      <div className="flex flex-col h-full">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm">Organized by {organizer}</p>
          </div>
          
          <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-primary" />
              <span>{teamSize}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Award className="h-4 w-4 mr-2 text-primary" />
              <span>{prizes}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 transition-colors"
              variant="default"
            >
              {status === 'upcoming' ? 'Register Now' : status === 'active' ? 'Join Event' : 'View Results'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
