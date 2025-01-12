'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}