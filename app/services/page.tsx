'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  MessageSquare,
  Globe,
  Phone,
  Mail,
  Code,
  Paintbrush,
  Video,
  MessageCircle,
  Speaker
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <MessageSquare className="w-12 h-12 text-indigo-500" />,
    title: 'Social Media Marketing',
    description: `Elevate your brand's social presence with our comprehensive social media marketing services. We create engaging content, manage communities, and drive meaningful interactions across all major platforms.`,
    features: [
      'Strategic content planning and creation',
      'Community management and engagement',
      'Social media advertising campaigns',
      'Analytics and performance tracking',
      'Brand voice development'
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    icon: <Globe className="w-12 h-12 text-indigo-500" />,
    title: 'Digital Marketing',
    description: `Transform your online presence with our data-driven digital marketing strategies. We combine SEO, content marketing, and paid advertising to drive growth and increase your ROI.`,
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Conversion rate optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    icon: <Phone className="w-12 h-12 text-indigo-500" />,
    title: 'WhatsApp Promotion',
    description: `Leverage the power of WhatsApp Business to connect with your customers directly. We help you build meaningful relationships through personalized messaging and targeted campaigns.`,
    features: [
      'WhatsApp Business account setup',
      'Automated messaging workflows',
      'Broadcast message campaigns',
      'Customer support integration',
      'Performance analytics'
    ],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    icon: <Mail className="w-12 h-12 text-indigo-500" />,
    title: 'Email Marketing',
    description: `Create impactful email campaigns that convert. Our email marketing services help you nurture leads, retain customers, and drive sales through personalized communication.`,
    features: [
      'Email template design',
      'Automated email sequences',
      'List segmentation and management',
      'A/B testing and optimization',
      'Campaign performance analysis'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    icon: <Code className="w-12 h-12 text-indigo-500" />,
    title: 'Web + APP Development',
    description: `Build powerful digital experiences with our custom web and mobile app development services. We create scalable, user-friendly solutions that drive business growth.`,
    features: [
      'Custom website development',
      'Mobile app development',
      'E-commerce solutions',
      'UI/UX design',
      'Maintenance and support'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    icon: <Paintbrush className="w-12 h-12 text-indigo-500" />,
    title: 'Graphic Design',
    description: `Stand out with stunning visual designs that capture your brand's essence. Our graphic design services cover everything from logos to marketing materials.`,
    features: [
      'Logo and brand identity design',
      'Marketing collateral',
      'Social media graphics',
      'Packaging design',
      'Print materials'
    ],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    icon: <Video className="w-12 h-12 text-indigo-500" />,
    title: 'Reelography',
    description: `Capture attention with engaging short-form video content. Our reelography services help you create viral-worthy content for social media platforms.`,
    features: [
      'Short-form video production',
      'Social media reels',
      'Story creation',
      'Video editing and effects',
      'Content strategy'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    icon: <MessageCircle className="w-12 h-12 text-indigo-500" />,
    title: 'Bulk Call & SMS',
    description: `Reach your audience effectively with our bulk communication solutions. We provide reliable call and SMS services for large-scale customer outreach.`,
    features: [
      'Automated voice calls',
      'Bulk SMS campaigns',
      'Contact list management',
      'Delivery tracking',
      'Response analytics'
    ],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    icon: <Speaker className="w-12 h-12 text-indigo-500" />,
    title: 'Audio Ads',
    description: `Make your brand heard with compelling audio advertisements. We create engaging audio content for various platforms and streaming services.`,
    features: [
      'Radio ad production',
      'Podcast advertising',
      'Streaming platform ads',
      'Voice-over services',
      'Audio branding'
    ],
    image: 'https://images.unsplash.com/photo-1615651951235-fd501c36e271?auto=format&fit=crop&q=80&w=800'
  }
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const isEven = index % 2 === 0;
  
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 py-16 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-1/2 transform transition-all duration-1000 ${
          inView
            ? 'translate-x-0 opacity-100'
            : `${isEven ? '-translate-x-16' : 'translate-x-16'} opacity-0`
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 transform transition-all duration-1000 delay-300 ${
          inView
            ? 'translate-x-0 opacity-100'
            : `${isEven ? 'translate-x-16' : '-translate-x-16'} opacity-0`
        }`}
      >
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            {service.icon}
            <h3 className="text-3xl font-bold text-indigo-950">{service.title}</h3>
          </div>
          <p className="text-lg text-indigo-950/80 mb-8">{service.description}</p>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-indigo-950/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold gradient-text mb-6">Our Services</h1>
              <p className="text-xl text-indigo-600">
                Comprehensive digital solutions to help your business grow
              </p>
            </div>

            <div className="divide-y divide-indigo-100">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}