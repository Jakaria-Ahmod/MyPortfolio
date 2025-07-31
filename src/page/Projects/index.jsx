import React, { useState } from 'react';
import GymImg from '../../assets/img/gym.png';
import movie from '../../assets/img/movie.png';
import landing from '../../assets/img/landing.png';
import pupy from '../../assets/img/pupy.png';
import ecom from '../../assets/img/ecom.png';
import Girl from '../../assets/img/girl.png';
import podcast from '../../assets/img/pod.png';
import builder from '../../assets/img/buil.png';
import Port from '../../assets/img/port.png';
import web from '../../assets/img/web.png';
import ProjectCard from '../../globalComponents/PojectCard';

const projectsData = [
  {
    name: 'body-filder',
    link: 'https://body-filder.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/body-filder',
    PojectImg: GymImg,
  },
  {
    name: 'Filmina',
    link: 'https://react-home-work-poject.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/react_Home_work_poject/',
    PojectImg: movie,
  },
  {
    name: 'landing-page',
    link: 'https://landing-page-iota-olive-26.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/landing_page',
    PojectImg: landing,
  },
  {
    name: 'potty',
    link: 'https://react-real-poject.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/react_Real_poject',
    PojectImg: pupy,
  },
  {
    name: 'web-aplicaition',
    link: 'https://web-aplicaiton.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/MERNIAN-WEB',
    PojectImg: web,
  },
  {
    name: 'e-commerce',
    link: 'https://jakaria-e-shop.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/e-shop',
    PojectImg: ecom,
  },
  {
    name: 'Landing-page',
    link: 'https://poject-girl.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/poject-girl',
    PojectImg: Girl,
  },
  {
    name: 'podcast',
    link: 'https://full-poject-7.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/full_poject_7',
    PojectImg: podcast,
  },
  {
    name: 'Builder',
    link: 'https://full-poject-8.vercel.app/',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/full_poject_8',
    PojectImg: builder,
  },
  {
    name: 'portfolio',
    link: 'https://poject-6-in-course.vercel.app',
    gitHubLink: 'https://github.com/Jakaria-Ahmod/poject_6_in_course',
    PojectImg: Port,
  },
];

const Projects = () => {
  const [poject, setPoject] = useState(6);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.slice(0, poject).map(item => (
          <div className="flex justify-center">
            <ProjectCard
              key={item.name}
              img={item.PojectImg}
              proectLInk={item.link}
              gitHubLink={item.gitHubLink}
              name={item.name}
            />
          </div>
        ))}
      </div>

      {poject < projectsData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPoject(prev => prev + 3)}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
