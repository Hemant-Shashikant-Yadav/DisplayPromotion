'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Code, Globe, Smartphone } from 'lucide-react';

const projects = [
  // Digital Marketing Projects
  {
    id: 1,
    title: 'Shivjal',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive digital marketing strategy and social media management for tech solutions.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Muktai Textile',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
    description: 'Digital presence enhancement and social media marketing for fashion industry.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'KMart',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800',
    description: 'Strategic digital marketing and online presence management for retail.',
    icon: <Globe className="w-6 h-6" />
  },
  
  // Web Development Projects
  {
    id: 4,
    title: 'Smart Empire',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'Multipurpose company website covering engineering, infrastructure, agro & food, and consultancy services.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'VMG Works - Construction',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive web platform for construction services, products, and project showcase.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'Display Promotions',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    description: 'Corporate website showcasing digital marketing and web development services.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 7,
    title: 'Trip Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'Travel and tourism platform with booking and itinerary management features.',
    icon: <Code className="w-6 h-6" />
  },
  
  // App Development Projects
  {
    id: 8,
    title: 'DP CRM + ERP',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Integrated CRM and ERP mobile application for business management.',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 9,
    title: 'Grocery Delivery App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800',
    description: 'Mobile app for seamless grocery ordering and delivery management.',
    icon: <Smartphone className="w-6 h-6" />
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ['all', 'Digital Marketing', 'Web Development', 'App Development'];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="section-container bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Work</h2>
          <p className="text-indigo-600 text-lg">Showcasing our best projects</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white text-indigo-950 hover:bg-indigo-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">
                      {project.icon}
                      <span className="ml-2">{project.category}</span>
                    </span>
                    <ExternalLink className="w-5 h-5 text-indigo-600 transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-2">{project.title}</h3>
                  <p className="text-indigo-600/80">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}