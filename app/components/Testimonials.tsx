'use client';

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

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container bg-gradient-to-b from-sky-100 to-white">
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