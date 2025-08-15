import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { skills } from './SkillsApi'; // আলাদা ফাইল থেকে skills import

const Skills = () => {
  // Page load এ scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="px-4  max-w-6xl mx-auto my-[100px] lg:my-[150px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 mt-2">
            Here are some of the technologies I excel at
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {skills.map((skill, index) => {
            const isHovered = hoveredSkill === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                {/* Glow border on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                    isHovered
                      ? 'p-0.5 opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
                      : 'opacity-0'
                  }`}
                >
                  <div className="h-full bg-white rounded-3xl" />
                </div>

                {/* Icon */}
                <div
                  className={`text-6xl mb-4 flex justify-center mx-auto transition-transform duration-500 ${
                    isHovered ? 'transform scale-110 rotate-3' : ''
                  }`}
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 transition-colors duration-300">
                  {skill.description ||
                    'Experienced and confident in building real-world projects using this technology.'}
                </p>

                {/* Floating sparkles (Framer Motion) */}
                {isHovered && (
                  <>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
