import { useState } from 'react';

const ProjectCard = ({ img, projectLink, gitHubLink, name, technologies }) => {
  const [showAll, setShowAll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const maxTechnologiesToShow = 3;

  const visibleTechnologies = showAll
    ? technologies
    : technologies.slice(0, maxTechnologiesToShow);

  // Dynamic colors for different technologies
  const getTechColor = tech => {
    const colors = {
      React: 'from-cyan-400 to-blue-500',
      JavaScript: 'from-yellow-400 to-orange-500',
      HTML: 'from-orange-500 to-red-500',
      CSS: 'from-blue-500 to-indigo-600',
      'Node.js': 'from-green-500 to-emerald-600',
      Python: 'from-blue-600 to-indigo-700',
      MongoDB: 'from-green-600 to-teal-600',
      Express: 'from-gray-700 to-gray-900',
      TypeScript: 'from-blue-600 to-blue-800',
      'Next.js': 'from-gray-800 to-black',
      Tailwind: 'from-teal-400 to-cyan-500',
      Vue: 'from-green-400 to-emerald-500',
      Angular: 'from-red-500 to-pink-600',
      PHP: 'from-purple-600 to-indigo-700',
      MySQL: 'from-blue-700 to-indigo-800',
      Bootstrap: 'from-purple-500 to-pink-600',
    };
    return colors[tech] || 'from-purple-500 to-pink-500';
  };

  return (
    <div
      className="w-full max-w-md mx-auto group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        relative bg-white rounded-3xl shadow-lg overflow-hidden 
        transition-all duration-500 ease-out border border-gray-100
        ${
          isHovered
            ? 'shadow-2xl transform -translate-y-2 scale-[1.02]'
            : 'hover:shadow-xl'
        }
      `}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
          transition-opacity duration-300 z-10 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        />

        {/* Image container */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={img}
            alt={name}
            className={`
              w-full h-64 object-cover transition-all duration-700
              ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}
            `}
          />

          {/* Image overlay gradient */}
          <div
            className={`
            absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          />

          {/* Floating quick action buttons */}
          <div
            className={`
            absolute top-4 right-4 flex gap-2 transition-all duration-300
            ${
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }
          `}
          >
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Content section */}
        <div className="relative p-6 space-y-4 z-20">
          {/* Project title with animated underline */}
          <div className="relative">
            <h3
              className={`
              text-2xl font-extrabold capitalize tracking-wide transition-colors duration-300
              ${isHovered ? 'text-blue-700' : 'text-gray-900'}
            `}
            >
              {name}
            </h3>
            <div
              className={`
              absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
              transition-all duration-300 origin-left
              ${isHovered ? 'w-full' : 'w-0'}
            `}
            />
          </div>

          {/* Technologies section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
              Technologies Used
            </h4>

            <div className="flex flex-wrap gap-2 mb-3 max-h-20 overflow-hidden">
              {visibleTechnologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`
                    bg-gradient-to-r ${getTechColor(
                      tech
                    )} text-white text-xs px-4 py-2 
                    rounded-full font-semibold shadow-md hover:shadow-lg 
                    transform hover:scale-105 transition-all duration-200 cursor-default
                    ${isHovered ? 'animate-pulse' : ''}
                  `}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    animationDuration: '2s',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {technologies.length > maxTechnologiesToShow && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  setShowAll(!showAll);
                }}
                className={`
                  mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium 
                  bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full 
                  transition-all duration-200 hover:scale-105
                  ${showAll ? 'bg-blue-100' : ''}
                `}
              >
                {showAll
                  ? '← Show Less'
                  : `+${technologies.length - maxTechnologiesToShow} More`}
              </button>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-700 hover:to-blue-800 text-white text-sm 
                font-semibold py-3 px-4 rounded-xl text-center 
                transition-all duration-200 shadow-md hover:shadow-lg
                transform hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              `}
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Live Site
            </a>

            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 bg-gradient-to-r from-gray-800 to-gray-900 
                hover:from-gray-900 hover:to-black text-white text-sm 
                font-semibold py-3 px-4 rounded-xl text-center 
                transition-all duration-200 shadow-md hover:shadow-lg
                transform hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              `}
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom accent gradient line */}
        <div
          className={`
          absolute bottom-0 left-0 right-0 h-1 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        />

        {/* Corner decoration */}
        <div
          className={`
          absolute top-0 right-0 w-16 h-16 
          bg-gradient-to-bl from-blue-500/20 to-transparent 
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
