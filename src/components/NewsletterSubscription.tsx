import React from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useFormValidation } from '../hooks/useFormValidation';
import { useDarkMode } from '../context/DarkModeContext';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const NewsletterSubscription: React.FC = () => {
  const { darkMode } = useDarkMode();
  const { register, handleSubmit, errors, isSubmitting, reset } = useFormValidation(schema);

  const onSubmit = async (data: { email: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Subscribed:', data.email);
    alert('Subscribed successfully!');
    reset();
  };

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-muted mb-8 text-center">Stay updated with our latest news and offers</p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            className={`flex-grow px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>
        {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email.message}</p>}
      </div>
    </section>
  );
};

export default NewsletterSubscription;