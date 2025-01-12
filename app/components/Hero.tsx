'use client';

import { useEffect, useState } from 'react';
import { 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  BarChart
} from 'lucide-react';
import TypewriterText from './TypewriterText';

const stats = [
  { icon: <Target className="w-6 h-6 text-indigo-500" />, label: 'Targeted Reach', value: '10M+' },
  { icon: <Users className="w-6 h-6 text-indigo-500" />, label: 'Happy Clients', value: '500+' },
  { icon: <TrendingUp className="w-6 h-6 text-indigo-500" />, label: 'Growth Rate', value: '300%' },
  { icon: <Award className="w-6 h-6 text-indigo-500" />, label: 'Awards Won', value: '25+' }
];

const typewriterTexts = [
  "Transform Your Digital Presence",
  "Boost Your Online Growth",
  "Maximize ROI",
  "Drive Engagement",
  "Scale Your Business"
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="section-container bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-indigo-100 rounded-full blur-3xl -top-48 -right-48"></div>
        <div className="absolute w-96 h-96 bg-purple-100 rounded-full blur-3xl bottom-48 -left-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-800">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Leading Digital Marketing Agency</span>
            </div>

            <h1 className="text-6xl font-bold">
              <span className="gradient-text">Display Promotion</span>
              <br />
              <TypewriterText texts={typewriterTexts} speed={50} />
            </h1>

            <p className="text-xl text-indigo-950/80 max-w-2xl">
              An advertising company emerged to address the fragmented nature of online advertising services. 
              We offer a comprehensive suite of marketing and promotional services under one roof.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-indigo-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="font-bold text-2xl text-indigo-950">{stat.value}</div>
                  <div className="text-sm text-indigo-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                alt="Digital Marketing"
                className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <BarChart className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-600 font-semibold">Monthly Growth</div>
                    <div className="text-2xl font-bold text-indigo-950">+125%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}