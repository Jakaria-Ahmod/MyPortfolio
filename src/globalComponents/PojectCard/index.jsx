// const ProjectCard = ({ img, projectLink, gitHubLink, name, technologies }) => {
//   const maxTechnologiesToShow = 3;
//   const showEllipsis = technologies.length > maxTechnologiesToShow;
//   const visibleTechnologies = technologies.slice(0, maxTechnologiesToShow);

//   return (
//     <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[400px] mx-auto">
//       <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
//         <img src={img} alt={name} className="w-full h-52 object-cover" />

//         <div className="p-5 space-y-4">
//           <h3 className="text-2xl font-bold text-gray-800 capitalize">
//             Name: {name}
//           </h3>

//           <div>
//             <h4 className="text-sm font-semibold text-gray-700 mb-1">
//               Technologies Used:
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {visibleTechnologies.map((tech, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-[navy]  text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//               {showEllipsis && (
//                 <span className="text-gray-500 text-sm font-medium">...</span>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-between mt-4">
//             <a
//               href={projectLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition"
//             >
//               Live Site
//             </a>
//             <a
//               href={gitHubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-md font-medium transition"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import { useState } from 'react';

const ProjectCard = ({ img, projectLink, gitHubLink, name, technologies }) => {
  const [showAll, setShowAll] = useState(false);
  const maxTechnologiesToShow = 3;

  const visibleTechnologies = showAll
    ? technologies
    : technologies.slice(0, maxTechnologiesToShow);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img
          src={img}
          alt={name}
          className="w-full h-64 object-cover rounded-t-3xl"
        />

        <div className="p-4 space-y-4">
          <h3 className="text-2xl font-extrabold text-gray-900 capitalize tracking-wide">
            {name}
          </h3>

          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2 max-h-20 overflow-hidden">
              {visibleTechnologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {technologies.length > maxTechnologiesToShow && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-2 text-blue-600 hover:underline text-sm font-medium"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 mr-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg text-center transition"
            >
              Live Site
            </a>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 ml-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg text-center transition"
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
