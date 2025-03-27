
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export type HackathonStatus = 'upcoming' | 'active' | 'ended';

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
  status: HackathonStatus;
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
  const getStatusBadge = () => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Upcoming</Badge>;
      case 'active':
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>;
      case 'ended':
        return <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/20">Ended</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {getStatusBadge()}
          {featured && <Badge variant="secondary">Featured</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-1">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{organizer}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{startDate} - {endDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{teamSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span>{prizes}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;
