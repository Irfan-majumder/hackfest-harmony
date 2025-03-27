
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CreateEventForm from '@/components/events/CreateEventForm';

const CreateEvent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-6 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Create a New Hackathon</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to create and launch your hackathon event.
            </p>
          </div>
          
          <CreateEventForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateEvent;
