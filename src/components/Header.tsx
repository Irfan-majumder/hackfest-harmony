
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Plus } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname.includes('/signup-');
  const isLoggedIn = false; 
  
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Hack Fest
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={`text-sm transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Home
          </Link>
          <Link to="/for-organizers" className={`text-sm transition-colors hover:text-primary ${location.pathname === '/for-organizers' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            For Organizers
          </Link>
          <Link to="/for-participants" className={`text-sm transition-colors hover:text-primary ${location.pathname === '/for-participants' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            For Participants
          </Link>
          <Link to="/browse-hackathons" className={`text-sm transition-colors hover:text-primary ${location.pathname === '/browse-hackathons' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Browse Hackathons
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {!isAuthPage && (
            <>
              {isLoggedIn ? (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/create-event">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Event
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </>
          )}
          
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/for-organizers">For Organizers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/for-participants">For Participants</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/browse-hackathons">Browse Hackathons</Link>
                </DropdownMenuItem>
                {!isLoggedIn && !isAuthPage && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/signin">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/signup">Sign Up</Link>
                    </DropdownMenuItem>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/create-event">Create Event</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
