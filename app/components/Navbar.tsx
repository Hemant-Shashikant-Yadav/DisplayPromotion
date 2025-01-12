'use client';

import { Home, Info, Image, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-sky-950">DP</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#hero" className="nav-link"><Home className="inline-block w-4 h-4 mr-1" /> Home</Link>
            <Link href="#services" className="nav-link"><Info className="inline-block w-4 h-4 mr-1" /> Services</Link>
            <Link href="#testimonials" className="nav-link"><Image className="inline-block w-4 h-4 mr-1" /> Testimonials</Link>
            <Link href="#contact" className="nav-link"><Phone className="inline-block w-4 h-4 mr-1" /> Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}