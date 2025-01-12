'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TypewriterText from './TypewriterText';
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
    icon: <MessageSquare className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Social Media Marketing',
    description: 'Leverage the power of social platforms to build brand awareness through strategic campaigns, targeted advertising, engaging content, and community management.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    icon: <Globe className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital strategies, including SEO, PPC, and content marketing, designed to enhance your online presence and achieve measurable results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    icon: <Phone className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Whatsapp Promotion',
    description: 'Reach customers directly with personalized messages, promotions, and updates through WhatsApp, enhancing engagement and fostering customer loyalty.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    icon: <Mail className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Email Marketing',
    description: 'Develop and execute email campaigns that deliver personalized, relevant content, helping to nurture leads and maintain strong customer relationships.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    icon: <Code className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Web + APP Development',
    description: 'Create responsive and user-friendly websites and apps that reflect your brand identity and provide an intuitive experience across all platforms.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    icon: <Paintbrush className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Graphic Design',
    description: 'Professional design services that bring your brand to life with eye-catching visuals, logos, banners, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    icon: <Video className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Reelography',
    description: 'Specialize in the creation of dynamic short videos and reels that capture attention on social media, highlighting your products and services.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    icon: <MessageCircle className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Bulk Call & SMS',
    description: 'Offer scalable solutions for mass communication, allowing businesses to send automated calls and messages to a large audience efficiently.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    icon: <Speaker className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Audio Ads',
    description: 'Engage audiences through impactful audio advertising on digital platforms and streaming services, crafted to resonate with your target market.',
    image: 'https://images.unsplash.com/photo-1615651951235-fd501c36e271?auto=format&fit=crop&q=80&w=800'
  }
];

const typewriterTexts = [
  "Digital Excellence",
  "Brand Growth",
  "Online Success",
  "Market Leadership",
  "Business Innovation"
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll effect
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Scroll every 5 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section id="services" className="section-container bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-2xl font-bold">
            We Provide <TypewriterText texts={typewriterTexts} /> to make your Business Grow!
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <div className="service-card group">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
                    </div>
                    {service.icon}
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{service.title}</h3>
                    <p className="text-indigo-800/80">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}