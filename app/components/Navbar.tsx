'use client';

import { useState, useEffect } from 'react';
import { 
  Home,
  Briefcase,
  Layers,
  Phone,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { href: '/services', label: 'Services', icon: <Layers className="w-5 h-5" /> },
  { href: '/work', label: 'Our Work', icon: <Briefcase className="w-5 h-5" /> },
  { href: '/contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'hover:bg-indigo-100 text-indigo-950'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 ml-1" />}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-indigo-950" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-950" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'hover:bg-indigo-100 text-indigo-950'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}