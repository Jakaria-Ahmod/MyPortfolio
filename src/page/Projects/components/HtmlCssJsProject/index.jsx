import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsDataHtmlCss } from '../project.api';
import ProjectCard from '../../../../globalComponents/PojectCard';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HtmlCssJsProjectt = () => {
  const [poject, setPoject] = useState(3);

  return (
    <div className="mt-[50px]">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsDataHtmlCss.slice(0, poject).map(item => (
          <motion.div
            key={item?.name}
            className="flex justify-center"
            variants={itemVariants}
          >
            <ProjectCard
              img={item?.PojectImg}
              projectLink={item?.link}
              gitHubLink={item?.gitHubLink}
              name={item?.name}
              technologies={item?.technologies}
            />
          </motion.div>
        ))}
      </motion.div>

      {poject < projectsDataHtmlCss.length && (
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setPoject(prev => prev + 3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default HtmlCssJsProjectt;
