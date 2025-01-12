'use client';

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Shivjal',
    company: 'Tech Solutions',
    text: 'The platform has been instrumental in helping us scale our business. The robust features and reliable performance have exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 2,
    name: 'Muktai Textile',
    company: 'Fashion Industry',
    text: 'The platform has been a game-changer for our business. The seamless integration and intuitive interface have allowed us to streamline our workflows.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 3,
    name: 'KMart',
    company: 'Retail',
    text: 'I was hesitant at first, but the onboarding process was seamless, and the support team was incredibly helpful. Now, I can\'t imagine our workflow without this platform.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

export default function Testimonials() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="testimonials" className="section-container bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -top-48 -left-48 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-purple-200/20 rounded-full blur-3xl top-48 left-48 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -bottom-48 -right-48 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="testimonial-card group bg-white/80 hover:bg-white/90 border border-indigo-100">
                <Quote className="w-10 h-10 text-indigo-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <p className="text-indigo-950/80 mb-6 relative z-10">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-indigo-400 group-hover:ring-purple-400 transition-all duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-indigo-600/80">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transform group-hover:scale-110 transition-all duration-300"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}