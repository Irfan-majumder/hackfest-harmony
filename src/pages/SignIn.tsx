
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignInForm from '@/components/auth/SignInForm';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Welcome Back</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sign in to access your account and continue your hackathon journey.
            </p>
          </div>
          
          <SignInForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
