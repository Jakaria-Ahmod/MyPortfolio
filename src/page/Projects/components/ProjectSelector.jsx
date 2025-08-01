import React, { useEffect, useState } from 'react';
import ReactJsProjectt from './ReactProject';
import HtmlCssJsProjectt from './HtmlCssJsProject';
import BackendProjectt from './BackendProject';
import AppProjectt from './appProject';

const BackendProject = Backend => <div className="text-lg mt-4">{Backend}</div>;
const MobileAppProject = mobile => <div className="text-lg mt-4">{mobile}</div>;

const ProjectSelector = () => {
  const [mainCategory, setMainCategory] = useState('frontend'); // default frontend
  const [projectComponent, setProjectComponent] = useState(<ReactJsProjectt />); // default ReactJS project

  const handleMainCategory = category => {
    setMainCategory(category);
    if (category === 'frontend') {
      setProjectComponent(<ReactJsProjectt />); // set default sub project
    } else if (category === 'backend') {
      setProjectComponent(<BackendProjectt />);
    } else if (category === 'mobile') {
      setProjectComponent(<AppProjectt />);
    }
  };

  const handleSubProject = component => {
    setProjectComponent(component);
  };

  return (
    <div className="p-5">
      {/* Main Category Buttons */}
      <div className="flex gap-4 mb-5 justify-center">
        <button
          onClick={() => handleMainCategory('frontend')}
          className="bg-blue-600 text-white px-4 cursor-pointer py-2 rounded"
        >
          Frontend
        </button>
        <button
          onClick={() => handleMainCategory('backend')}
          className="bg-green-600 text-white px-4 cursor-pointer py-2 rounded"
        >
          Backend
        </button>
        <button
          onClick={() => handleMainCategory('mobile')}
          className="bg-purple-600 text-white px-4 cursor-pointer py-2 rounded"
        >
          Mobile App React Native
        </button>
      </div>

      {/* Sub Category Buttons */}
      {mainCategory === 'frontend' && (
        <div className="flex gap-4 justify-center mb-4">
          <button
            onClick={() => handleSubProject(<ReactJsProjectt />)}
            className="bg-orange-500 text-white px-4 cursor-pointer py-2 rounded"
          >
            React JS Project
          </button>
          <button
            onClick={() => handleSubProject(<HtmlCssJsProjectt />)}
            className="bg-yellow-500 text-white px-4 cursor-pointer py-2 rounded"
          >
            HTML CSS JS Project
          </button>
        </div>
      )}

      {/* Render Selected Project */}
      <div>{projectComponent}</div>
    </div>
  );
};

export default ProjectSelector;
