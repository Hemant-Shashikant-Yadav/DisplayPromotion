'use client';

import { Home, Info, Image, Phone, Mail, Code, Paintbrush } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Shivjal',
    company: 'Tech Solutions',
    text: 'The platform has been instrumental in helping us scale our business. The robust features and reliable performance have exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Muktai Textile',
    company: 'Fashion Industry',
    text: 'The platform has been a game-changer for our business. The seamless integration and intuitive interface have allowed us to streamline our workflows.'
  },
  {
    id: 3,
    name: 'KMart',
    company: 'Retail',
    text: 'I was hesitant at first, but the onboarding process was seamless, and the support team was incredibly helpful. Now, I can\'t imagine our workflow without this platform.'
  }
];

const services = [
  {
    id: 1,
    icon: <Mail className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Email Marketing',
    description: 'Execute email campaigns that deliver relevant content, helping to nurture leads and build strong customer relationships.'
  },
  {
    id: 2,
    icon: <Code className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Web Development',
    description: 'Create responsive and user-friendly websites that reflect your brand identity and provide an intuitive experience.'
  },
  {
    id: 3,
    icon: <Paintbrush className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Graphic Design',
    description: 'Professional design services that bring your brand to life with eye-catching visuals and consistent branding.'
  }
];

function Navbar() {
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

function Hero() {
  return (
    <section id="hero" className="scroll-section bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold gradient-text mb-6">
          Display Promotion
        </h1>
        <p className="text-xl text-sky-950/90 max-w-2xl mx-auto mb-12">
          An advertising company emerged to address the fragmented nature of online advertising services. We offer a comprehensive suite of marketing and promotional services under one roof.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-section bg-gradient-to-b from-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">Services We Provide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="service-card">
              {service.icon}
              <h3 className="text-xl font-bold text-sky-950 mb-2">{service.title}</h3>
              <p className="text-sky-900/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-section bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-lg font-bold text-sky-950">{testimonial.name}</h4>
                  <p className="text-sky-900/80">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sky-900/90">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="contact" className="scroll-section bg-gradient-to-b from-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-sky-950">
          <div>
            <h3 className="text-xl font-bold mb-4">Display Promotions</h3>
            <p className="text-sky-900/80">Prime Choice to Grow Your Profession</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sky-900/80">Email: info@displaypromotions.com</p>
            <p className="text-sky-900/80">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-900/80 hover:text-sky-600">Facebook</a>
              <a href="#" className="text-sky-900/80 hover:text-sky-600">Twitter</a>
              <a href="#" className="text-sky-900/80 hover:text-sky-600">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sky-200 text-center text-sky-900/60">
          <p>© 2024 Display Promotions. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="scroll-container">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}