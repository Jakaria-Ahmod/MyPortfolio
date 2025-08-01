import React from 'react';
import { motion } from 'framer-motion';
import LayoutLeft from './components/LayoutLeft';
import LayoutRight from './components/LayoutRight';
import Services from '../Services';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

const HomePage = () => {
  window.scrollTo(0, 0);

  return (
    <motion.div
      className="container mx-auto px-4 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Layout Section (Left + Right) */}
      <motion.div
        className="grid mt-[106px] grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LayoutLeft />
        <LayoutRight />
      </motion.div>

      {/* Content Sections (Animated on Scroll) */}
      <div className="mt-16 space-y-16">
        {[Services, About, Skills, Projects].map((Section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Section />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;
