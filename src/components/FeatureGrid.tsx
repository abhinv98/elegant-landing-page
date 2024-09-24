import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { LightBulbIcon, UsersIcon, ChartBarIcon, LockClosedIcon, CogIcon, ClockIcon } from '@heroicons/react/24/outline';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const features: FeatureItem[] = [
  {
    title: "Intuitive Design",
    description: "User-friendly interface for seamless navigation",
    icon: <LightBulbIcon className="w-8 h-8" />
  },
  {
    title: "Collaborative Tools",
    description: "Work together in real-time with your team",
    icon: <UsersIcon className="w-8 h-8" />
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights with powerful data visualization",
    icon: <ChartBarIcon className="w-8 h-8" />
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security for your peace of mind",
    icon: <LockClosedIcon className="w-8 h-8" />
  },
  {
    title: "Customizable Workflow",
    description: "Tailor processes to fit your unique needs",
    icon: <CogIcon className="w-8 h-8" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it",
    icon: <ClockIcon className="w-8 h-8" />
  }
];

const FeatureGrid: React.FC = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="features" className="py-20 bg-secondary-50 dark:bg-secondary-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Features</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Discover the tools that will revolutionize your workflow
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-secondary-700 rounded-lg shadow-smooth p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="mb-4 text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 group-hover:text-secondary-700 dark:group-hover:text-secondary-200 transition-colors duration-300">{feature.description}</p>
              <motion.button
                className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;