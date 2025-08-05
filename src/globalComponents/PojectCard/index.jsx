import React from 'react';

const ProjectCard = ({ img, projectLink, gitHubLink, name, technologies }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[400px] mx-auto">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <img src={img} alt={name} className="w-full h-52 object-cover" />
        <div className="p-5 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 capitalize">
            Name: {name}
          </h3>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-1">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition"
            >
              Live Site
            </a>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-md font-medium transition"
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
