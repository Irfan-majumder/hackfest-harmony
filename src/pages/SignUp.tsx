
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignUpForm from '@/components/auth/SignUpForm';
import { UserType } from '@/components/auth/SignUpForm';

interface SignUpPageProps {
  defaultUserType?: UserType;
}

const SignUp: React.FC<SignUpPageProps> = ({ defaultUserType = "participant" }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Join Our Hackathon Platform</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create an account to {defaultUserType === "organizer" ? "organize" : "participate in"} amazing hackathons 
              and connect with innovators from around the world.
            </p>
          </div>
          
          <SignUpForm defaultUserType={defaultUserType} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
