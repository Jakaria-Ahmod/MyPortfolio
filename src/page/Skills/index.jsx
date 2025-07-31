import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCheckCircle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiReactrouter,
  SiFormik,
} from 'react-icons/si';

import { MdAccessTime, MdViewCarousel } from 'react-icons/md';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e44d26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', level: 90 },
  { name: 'Day.js', icon: <MdAccessTime />, color: '#2d8cf0', level: 90 },
  { name: 'Swiper.js', icon: <MdViewCarousel />, color: '#00aaff', level: 90 },

  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f0db4f', level: 90 },
  {
    name: 'JavaScript (ES6+)',
    icon: <FaJsSquare />,
    color: '#f0db4f',
    level: 88,
  },
  { name: 'React.js', icon: <FaReact />, color: '#61dafb', level: 88 },
  { name: 'Redux', icon: <SiRedux />, color: '#764abc', level: 85 },
  { name: 'Redux Toolkit', icon: <SiRedux />, color: '#764abc', level: 80 },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: '#38bdf8',
    level: 92,
  },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#563d7c', level: 80 },
  { name: 'Ant Design', icon: <SiAntdesign />, color: '#fa541c', level: 75 },
  {
    name: 'DOM Manipulation',
    icon: <FaJsSquare />,
    color: '#f0db4f',
    level: 80,
  },
  {
    name: 'Component Based Architecture',
    icon: <FaReact />,
    color: '#61dafb',
    level: 85,
  },
  { name: 'Formik', icon: <SiFormik />, color: '#635bff', level: 78 },
  { name: 'Yup', icon: <FaCheckCircle />, color: '#34d399', level: 75 },
  {
    name: 'React Router',
    icon: <SiReactrouter />,
    color: '#ca4245',
    level: 85,
  },
  { name: 'React Icons', icon: <FaReact />, color: '#61dafb', level: 70 },
  {
    name: 'React Toastify',
    icon: <FaCheckCircle />,
    color: '#34d399',
    level: 70,
  },
  { name: 'Git', icon: <FaGitAlt />, color: '#f1502f', level: 85 },
  { name: 'GitHub', icon: <FaGithub />, color: '#333', level: 90 },
  { name: 'VS Code', icon: <FaGithub />, color: '#0078d7', level: 90 },
  { name: 'Vercel', icon: <SiVercel />, color: '#000', level: 80 },
  { name: 'Netlify', icon: <SiNetlify />, color: '#00c7b7', level: 85 },
  { name: 'Figma', icon: <FaFigma />, color: '#a259ff', level: 75 },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffa611', level: 80 },
  {
    name: 'Responsive Web Design',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 95,
  },
  {
    name: 'Component Reusability',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 90,
  },
  {
    name: 'Mobile First Design',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 88,
  },
  {
    name: 'Basic Firebase Auth',
    icon: <SiFirebase />,
    color: '#ffa611',
    level: 78,
  },
  {
    name: 'JSON Data Handling',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 80,
  },
  { name: 'Context API', icon: <FaReact />, color: '#61dafb', level: 75 },
  { name: 'State Management', icon: <SiRedux />, color: '#764abc', level: 80 },
  {
    name: 'Modal System',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 75,
  },
  {
    name: 'Form Validation',
    icon: <FaCheckCircle />,
    color: '#22c55e',
    level: 80,
  },
];

const Skills = () => {
  window.scrollTo(0, 0);
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto my-[100px]">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold">{skill.name}</h4>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                  transition: 'width 0.6s ease-in-out',
                }}
              ></div>
            </div>
            <p className="text-sm text-right mt-1 font-medium text-gray-700">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
