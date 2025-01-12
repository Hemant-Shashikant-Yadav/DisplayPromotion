'use client';

import { useCallback } from 'react';
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
    icon: <MessageSquare className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Social Media Marketing',
    description: 'Leverage the power of social platforms to build brand awareness through strategic campaigns, targeted advertising, engaging content, and community management to connect with your audience effectively, ensuring consistent growth and engagement.'
  },
  {
    id: 2,
    icon: <Globe className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital strategies, including SEO, PPC, and content marketing, are designed to enhance your online presence and achieve measurable results, driving targeted traffic and boosting your brand\'s visibility.'
  },
  {
    id: 3,
    icon: <Phone className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Whatsapp Promotion',
    description: 'Reach customers directly with personalized messages, promotions, and updates through WhatsApp, enhancing engagement and fostering customer loyalty with timely and relevant communication.'
  },
  {
    id: 4,
    icon: <Mail className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Email Marketing',
    description: 'Develop and execute email campaigns that deliver personalized, relevant content, helping to nurture leads and maintain strong customer relationships, ensuring consistent communication and growth.'
  },
  {
    id: 5,
    icon: <Code className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Web + APP Development',
    description: 'Create responsive and user-friendly websites and apps that reflect your brand identity and provide an intuitive experience, ensuring your business is accessible and efficient across all platforms, enhancing user engagement.'
  },
  {
    id: 6,
    icon: <Paintbrush className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Graphic Design',
    description: 'Professional design services that bring your brand to life with eye-catching visuals, logos, banners, and marketing materials, creating a strong and consistent brand identity, making a lasting impression on your audience.'
  },
  {
    id: 7,
    icon: <Video className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Reelography',
    description: 'Specialize in the creation of dynamic short videos and reels that capture attention on social media, highlighting your products and services in an engaging format, ensuring high visibility and engagement with your audience.'
  },
  {
    id: 8,
    icon: <MessageCircle className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Bulk Call & SMS',
    description: 'Offer scalable solutions for mass communication, allowing businesses to send automated calls and messages to a large audience efficiently, perfect for promotions and alerts, ensuring timely and effective outreach.'
  },
  {
    id: 9,
    icon: <Speaker className="w-12 h-12 text-sky-500 mb-4" />,
    title: 'Audio Ads',
    description: 'Engage audiences through impactful audio advertising on digital platforms and streaming services, crafted to resonate with your target market and amplify your brand\'s voice, ensuring memorable and effective campaigns.'
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

  return (
    <section id="services" className="section-container bg-gradient-to-b from-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text">
            We Provide <TypewriterText texts={typewriterTexts} /> to make your Business Grow!
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <div className="service-card h-full">
                    {service.icon}
                    <h3 className="text-xl font-bold text-sky-950 mb-2">{service.title}</h3>
                    <p className="text-sky-900/80">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}