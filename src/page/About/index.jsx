import React from 'react';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import CommonHeding from '../../globalComponents/CommonHeading';

const About = () => {
  return (
    <div className="container">
      <div>
        <CommonHeding
          Services="About Me"
          p="User Interface and User Experience and Also video editing "
        ></CommonHeding>
      </div>
      <div className="grid grid-cols-2 mt-[40px] items-center">
        <AboutLeft></AboutLeft>
        <AboutRight></AboutRight>
      </div>
    </div>
  );
};

export default About;
