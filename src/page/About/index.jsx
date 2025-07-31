import React from 'react';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import CommonHeding from '../../globalComponents/CommonHeading';

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="container my-[150px] px-4 mx-auto ">
      <div>
        <CommonHeding
          Services="About Me"
          p="User Interface and User Experience and Also video editing"
        />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] gap-10 items-center">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default About;
