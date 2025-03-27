
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  imageUrl,
  className,
}) => {
  return (
    <Card className={cn(
      "border border-border rounded-xl overflow-hidden transition-all duration-300",
      "hover:border-primary/30 hover:shadow-soft",
      className
    )}>
      <CardContent className="p-8">
        <QuoteIcon className="h-8 w-8 text-primary/30 mb-4" />
        <p className="text-foreground/90 mb-6">{quote}</p>
        
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={imageUrl} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{role}, {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "HackFest made organizing our university's annual hackathon incredibly smooth. We saved dozens of hours on logistics and could focus on creating an amazing experience for participants.",
      author: "Sarah Johnson",
      role: "Events Coordinator",
      company: "MIT Tech Club",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "As a first-time hackathon participant, I was amazed at how easy it was to find teammates and submit our project. The platform's intuitive design made the whole experience stress-free.",
      author: "David Chen",
      role: "Computer Science Student",
      company: "Stanford University",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "The analytics dashboard has transformed how we run our corporate hackathons. We now have insights that help us improve engagement and measure impact across all our innovation events.",
      author: "Michael Rodriguez",
      role: "Innovation Lead",
      company: "TechCorp Inc.",
      imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by organizers and participants
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from the community that has
            experienced the difference our platform makes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.author}
              {...testimonial}
              className={`animate-fade-in animate-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
