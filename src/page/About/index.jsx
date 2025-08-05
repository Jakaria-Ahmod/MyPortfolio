import React from 'react';
import { motion } from 'framer-motion';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import CommonHeding from '../../globalComponents/CommonHeading';

const About = () => {
  window.scrollTo(0, 0);

  return (
    <motion.div
      className="container my-[150px] lg:my-[10px] px-4 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading Animation */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CommonHeding
          Services="About Me"
          p="User Interface and User Experience and Also video editing"
        />
      </motion.div>

      {/* Responsive Grid */}
      <div className="lg:grid grid-cols-1 md:grid-cols-2 mt-[40px] gap-10 items-center">
        {/* Left Side Animation */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AboutLeft />
        </motion.div>

        {/* Right Side Animation */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AboutRight />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
