
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedHackathons from '../components/FeaturedHackathons';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedHackathons />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
