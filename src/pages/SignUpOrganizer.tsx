
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignUpForm from '@/components/auth/SignUpForm';

const SignUpOrganizer: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Become a Hackathon Organizer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our platform to host and manage your own hackathons. Create innovative challenges and inspire the next generation of developers.
            </p>
          </div>
          
          <SignUpForm defaultUserType="organizer" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpOrganizer;
