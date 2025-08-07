import { motion } from 'framer-motion';
import ProjectSelector from './components/ProjectSelector';

const Projects = () => {
  window.scrollTo(0, 0);

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-[150px] lg:py-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-blue-600"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectSelector />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
