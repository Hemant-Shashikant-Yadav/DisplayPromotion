'use client';

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Services />
        <Footer />
      </div>
    </>
  );
}