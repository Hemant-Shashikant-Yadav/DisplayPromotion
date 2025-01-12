'use client';

import { Phone, Mail, Facebook, Twitter, Linkedin, MapPin, PhoneCall, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-sky-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-sky-950">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Display Promotions</h3>
            <p className="text-sky-900/80 leading-relaxed">
              Empowering businesses with innovative digital solutions. Your prime choice for professional growth and digital excellence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-sky-500" />
              Contact Info
            </h3>
            <div className="space-y-3">
              <a href="mailto:info@displaypromotions.com" 
                 className="flex items-center gap-2 text-sky-900/80 hover:text-sky-600 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                info@displaypromotions.com
              </a>
              <a href="tel:+12345678901" 
                 className="flex items-center gap-2 text-sky-900/80 hover:text-sky-600 transition-colors duration-300">
                <PhoneCall className="w-4 h-4" />
                +1 234 567 8901
              </a>
              <div className="flex items-center gap-2 text-sky-900/80">
                <MapPin className="w-4 h-4" />
                123 Business Avenue, NY 10001
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-sky-500" />
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" 
                 className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" 
                 className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" 
                 className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sky-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sky-900/60">
            <p>© 2024 Display Promotions. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-sky-600 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-sky-600 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}