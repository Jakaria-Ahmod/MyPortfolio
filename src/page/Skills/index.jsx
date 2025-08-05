import { skills } from './SkillsApi';
import { motion } from 'framer-motion';

const Skills = () => {
  window.scrollTo(0, 0);
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto my-[100px]">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div
              className="text-5xl mb-4 mx-auto flex justify-center"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {skill.description ||
                'Experienced and confident in building real-world projects using this technology.'}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
