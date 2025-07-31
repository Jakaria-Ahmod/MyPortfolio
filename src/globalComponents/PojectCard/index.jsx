import React from 'react';

const ProjectCard = ({ img, proectLInk, gitHubLink, name }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[400px] mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={img}
          alt="Project Screenshot"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 capitalize">
            Project Name: {name}
          </h3>

          <div className="flex justify-between items-center">
            <a
              href={proectLInk}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Live Site
            </a>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
