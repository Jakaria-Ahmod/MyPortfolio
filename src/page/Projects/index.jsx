import ProjectSelector from './components/ProjectSelector';

const Projects = () => {
  window.scrollTo(0, 0);
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-[150px]">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">
        My Projects
      </h2>
      <ProjectSelector></ProjectSelector>
    </section>
  );
};

export default Projects;
