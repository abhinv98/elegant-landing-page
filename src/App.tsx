import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import ContentBlocks from './components/ContentBlocks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <FeatureGrid />
          <ContentBlocks />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;