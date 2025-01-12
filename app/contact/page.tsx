'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <section className="section-container bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold gradient-text mb-4">Contact Us</h1>
            <p className="text-indigo-600">Contact page content coming soon...</p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}