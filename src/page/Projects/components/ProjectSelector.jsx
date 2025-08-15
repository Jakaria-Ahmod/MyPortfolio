import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import BackendProjectt from './BackendProject';
import HtmlCssJsProjectt from './HtmlCssJsProject';
import ReactJsProjectt from './ReactProject';
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
    <div className="p-8 bg-gradient-to-br  min-h-screen ">
      {/* Main Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {[
          {
            label: 'Frontend',
            value: 'frontend',
            gradient: 'from-blue-500 to-cyan-500',
            activeGradient: 'from-blue-600 to-cyan-600',
            icon: '🎨',
          },
          {
            label: 'Backend',
            value: 'backend',
            gradient: 'from-green-500 to-emerald-500',
            activeGradient: 'from-green-600 to-emerald-600',
            icon: '⚙️',
          },
          {
            label: 'Mobile App React Native',
            value: 'mobile',
            gradient: 'from-purple-500 to-pink-500',
            activeGradient: 'from-purple-600 to-pink-600',
            icon: '📱',
          },
        ].map(btn => (
          <motion.button
            key={btn.value}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMainCategory(btn.value)}
            className={`
              relative overflow-hidden px-6 py-4 rounded-2xl cursor-pointer font-semibold text-white
              transition-all duration-300 shadow-lg hover:shadow-xl
              ${
                mainCategory === btn.value
                  ? `bg-gradient-to-r ${btn.activeGradient} ring-4 ring-white text-balance ring-opacity-50 shadow-2xl`
                  : `bg-gradient-to-r ${btn.gradient} hover:shadow-xl`
              }
            `}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{btn.icon}</span>
              <span className="text-sm md:text-base">{btn.label}</span>
            </div>

            {/* Active indicator */}
            {mainCategory === btn.value && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0  bg-opacity-20 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 -skew-x-12 transition-all duration-500 transform -translate-x-full hover:translate-x-full" />
          </motion.button>
        ))}
      </div>

      {/* Sub Category Buttons */}
      {mainCategory === 'frontend' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          {[
            {
              component: <ReactJsProjectt />,
              name: 'ReactJS',
              label: 'React JS Project',
              gradient: 'from-cyan-400 to-blue-500',
              activeGradient: 'from-cyan-500 to-blue-600',
              icon: '⚛️',
            },
            {
              component: <HtmlCssJsProjectt />,
              name: 'HTMLCSSJS',
              label: 'HTML CSS JS Project',
              gradient: 'from-orange-400 to-red-500',
              activeGradient: 'from-orange-500 to-red-600',
              icon: '🌐',
            },
          ].map(btn => (
            <motion.button
              key={btn.name}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSubProject(btn.component, btn.name)}
              className={`
                relative px-6 py-3 rounded-xl font-medium text-white
                transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer
                ${
                  key === btn.name
                    ? `bg-gradient-to-r ${btn.activeGradient} ring-2 ring-white ring-opacity-70 shadow-lg transform scale-105`
                    : `bg-gradient-to-r ${btn.gradient} hover:shadow-md`
                }
              `}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-lg">{btn.icon}</span>
                <span>{btn.label}</span>
              </div>

              {/* Active pulse effect */}
              {key === btn.name && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Render Selected Project with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          // className="w-full max-w-4xl mx-auto"
        >
          <div>
            <div className=" rounded-xl p-6 shadow-inner">
              {projectComponent}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSelector;
