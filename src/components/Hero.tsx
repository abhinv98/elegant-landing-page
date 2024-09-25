import React from 'react';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {
  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-primary-900">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" className="text-primary-300 dark:text-primary-700" />
        </svg>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-secondary-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="text-primary-600 dark:text-primary-400">AR</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the power of seamless collaboration and unlock your team's full potential
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 bg-primary-600 text-white rounded-full text-lg font-medium hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 rounded-full text-lg font-medium hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;