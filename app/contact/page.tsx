"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/displaypromotions",
    icon: <Facebook className="w-6 h-6" />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/displaypromotions",
    icon: <Twitter className="w-6 h-6" />,
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/displaypromotions",
    icon: <Linkedin className="w-6 h-6" />,
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/displaypromotions",
    icon: <Instagram className="w-6 h-6" />,
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/displaypromotions",
    icon: <Youtube className="w-6 h-6" />,
    color: "bg-red-600 hover:bg-red-700",
  },
];

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [companyRef, companyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [founderRef, founderInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [socialRef, socialInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [mapRef, mapInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Company Information */}
            <div
              ref={companyRef}
              className={`flex flex-col md:flex-row items-center gap-12 mb-24 transform transition-all duration-1000 ${
                companyInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/dplogo.png"
                    alt="Local image description"
                    width={70}
                    height={70}
                    priority
                  />
                  <h1 className="text-4xl font-bold gradient-text">
                    Display Promotions
                  </h1>
                </div>
                <p className="text-lg text-indigo-950/80 mb-8">
                  Leading digital marketing agency specializing in comprehensive
                  online solutions. We help businesses grow their digital
                  presence and achieve their marketing goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-indigo-950/80">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <span>displaypromo0110@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-indigo-950/80">
                    <Phone className="w-5 h-5 text-indigo-600" />
                    <span>+91 96894 33293</span>
                  </div>
                  <div className="flex items-center gap-3 text-indigo-950/80">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span>AIP Katphal Tel. Baramati, Dist. Pune.</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/dplogo.png"
                  alt="Local image description"
                  width={350}
                  height={350}
                  priority
                />
              </div>
            </div>

            {/* Founder Information */}
            <div
              ref={founderRef}
              className={`flex flex-col-reverse md:flex-row items-center gap-12 mb-24 transform transition-all duration-1000 ${
                founderInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/CEO.webp"
                  alt="Local image description"
                  width={350}
                  height={350}
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Meet Our Founder
                </h2>
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                  Prathamesh Dhapate
                </h3>
                <p className="text-indigo-600 mb-6">CEO & Founder</p>
                <p className="text-lg text-indigo-950/80 mb-8">
                  Hi, I'm Prathmesh Govind Dhapte, the founder of this company.
                  My journey began at an Autonomous Engineering Institute, where
                  I explored my passions through Public Speaking, anchoring, and
                  connecting with people, and took a deep dive into magazine
                  publication. Serving as a class representative and
                  participating in leadership programs helped me develop strong
                  communication and decision-making skills. These experiences
                  have shaped me into a dedicated leader, committed to driving
                  innovation and excellence in everything we do at our company.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/johnsmith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div
              ref={socialRef}
              className={`mb-24 transform transition-all duration-1000 ${
                socialInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold gradient-text text-center mb-12">
                Connect With Us
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${social.color} text-white p-4 rounded-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div
              ref={mapRef}
              className={`transform transition-all duration-1000 ${
                mapInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold gradient-text text-center mb-12">
                Visit Us
              </h2>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.5675547679134!2d74.60191241147056!3d18.183824482774035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc375660e5e95dd%3A0xc1b155a626104ffd!2sDisplay%20Promotion!5e0!3m2!1sen!2sin!4v1737641956042!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
