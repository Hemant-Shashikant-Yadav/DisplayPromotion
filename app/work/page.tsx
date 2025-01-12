'use client';

import Navbar from '../components/Navbar';
import Work from '../components/Work';
import Footer from '../components/Footer';

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Work />
        <Footer />
      </div>
    </>
  );
}