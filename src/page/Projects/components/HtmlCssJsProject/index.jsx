import React, { useState } from 'react';
import { projectsDataHtmlCss, projectsDataReactjs } from '../project.api';
import ProjectCard from '../../../../globalComponents/PojectCard';

const HtmlCssJsProjectt = () => {
  const [poject, setPoject] = useState(3);

  return (
    <div>
      <div>
        <div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsDataHtmlCss.slice(0, poject).map(item => (
                <div className="flex justify-center">
                  <ProjectCard
                    key={item?.name}
                    img={item?.PojectImg}
                    projectLink={item?.link}
                    gitHubLink={item?.gitHubLink}
                    name={item?.name}
                    technologies={item?.technologies}
                  />
                </div>
              ))}
            </div>
          </div>
          {poject < projectsDataReactjs.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setPoject(prev => prev + 3)}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HtmlCssJsProjectt;
