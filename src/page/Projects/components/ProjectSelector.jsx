import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactJsProjectt from './ReactProject';
import HtmlCssJsProjectt from './HtmlCssJsProject';
import BackendProjectt from './BackendProject';
import AppProjectt from './appProject';

const ProjectSelector = () => {
  const [mainCategory, setMainCategory] = useState('frontend');
  const [projectComponent, setProjectComponent] = useState(<ReactJsProjectt />);
  const [key, setKey] = useState('ReactJS'); // For triggering animation re-render

  const handleMainCategory = category => {
    setMainCategory(category);
    if (category === 'frontend') {
      setProjectComponent(<ReactJsProjectt />);
      setKey('ReactJS');
    } else if (category === 'backend') {
      setProjectComponent(<BackendProjectt />);
      setKey('Backend');
    } else if (category === 'mobile') {
      setProjectComponent(<AppProjectt />);
      setKey('MobileApp');
    }
  };

  const handleSubProject = (component, name) => {
    setProjectComponent(component);
    setKey(name);
  };

  return (
    <div className="p-5">
      {/* Main Category Buttons */}
      <div className="flex gap-4 mb-5 justify-center">
        {[
          { label: 'Frontend', value: 'frontend', bg: 'bg-blue-600' },
          { label: 'Backend', value: 'backend', bg: 'bg-green-600' },
          {
            label: 'Mobile App React Native',
            value: 'mobile',
            bg: 'bg-purple-600',
          },
        ].map(btn => (
          <motion.button
            key={btn.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMainCategory(btn.value)}
            className={`${btn.bg} text-white px-4 py-2 rounded cursor-pointer`}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Sub Category Buttons */}
      {mainCategory === 'frontend' && (
        <div className="flex gap-4 justify-center mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSubProject(<ReactJsProjectt />, 'ReactJS')}
            className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            React JS Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSubProject(<HtmlCssJsProjectt />, 'HTMLCSSJS')}
            className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            HTML CSS JS Project
          </motion.button>
        </div>
      )}

      {/* Render Selected Project with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {projectComponent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSelector;
