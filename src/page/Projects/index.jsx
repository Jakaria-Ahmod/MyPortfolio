import React from 'react';

const projectsData = [
  { name: 'body-filder', link: 'https://body-filder.vercel.app/' },
  { name: 'Filmina', link: 'https://react-home-work-poject.vercel.app/' },
  {
    name: 'landing-page',
    link: 'https://landing-page-iota-olive-26.vercel.app/',
  },
  { name: 'potty', link: 'https://react-real-poject.vercel.app/' },
  { name: 'web-aplicaition', link: 'https://web-aplicaition.vercel.app/' },
  { name: 'e-commerce', link: 'https://jakaria-e-shop.vercel.app/' },
  { name: 'Landing-page', link: 'https://poject-girl.vercel.app/' },
  { name: 'podcast', link: 'https://full-poject-7.vercel.app/' },
  { name: 'Builder', link: 'https://full-poject-8.vercel.app/' },
  { name: 'portfolio', link: 'https://poject-6-in-course.vercel.app' },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        My Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projectsData.map(({ name, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 capitalize">
              {name.replace(/-/g, ' ')}
            </h3>
            <p className="text-blue-500 underline">View Live Project</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
