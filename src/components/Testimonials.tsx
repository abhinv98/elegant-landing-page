import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "AR has revolutionized our workflow. It's intuitive, powerful, and a joy to use.",
    author: "Jane Doe",
    title: "CEO, TechCorp",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The analytics features have given us insights we never knew we needed. Game-changer!",
    author: "John Smith",
    title: "Data Analyst, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Customer support is top-notch. They're always there when we need them.",
    author: "Emily Brown",
    title: "Product Manager, StartUp Co.",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
];

const Testimonials: React.FC = () => {
  // const { theme } = useTheme();

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-smooth"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-secondary-600 dark:text-secondary-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-secondary-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;