import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ChartBarIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface ContentBlockItem {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const contentBlocks: ContentBlockItem[] = [
  {
    title: "Streamlined Workflow",
    description: "Our platform simplifies your daily tasks, allowing you to focus on what truly matters. With intuitive interfaces and powerful automation, you'll wonder how you ever managed without it.",
    icon: <LightBulbIcon className="w-12 h-12" />
  },
  {
    title: "Collaborative Environment",
    description: "Foster teamwork and boost productivity with our collaborative tools. Real-time editing, commenting, and sharing features make working together a breeze, no matter where your team is located.",
    icon: <UsersIcon className="w-12 h-12" />
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with our advanced analytics. Our platform provides deep insights into your processes, helping you identify areas for improvement and drive growth.",
    icon: <ChartBarIcon className="w-12 h-12" />
  }
];

const ContentBlocks: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="why-choose-us" className="py-20 bg-secondary-50 dark:bg-secondary-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Discover the advantages of our platform and how it can transform your workflow
          </p>
        </div>
        <div className="space-y-12">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-secondary-700 rounded-lg shadow-smooth overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:w-1/3 p-6 flex justify-center">
                <div className="text-primary-500 dark:text-primary-400">
                  {block.icon}
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">{block.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300">{block.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlocks;