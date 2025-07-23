import React from 'react';
import LayoutLeft from './components/LayoutLeft';
import LayoutRight from './components/LayoutRight';
import Services from '../Services';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

const HomePage = () => {
  return (
    <div className="container">
      <div className="grid mt-[106px] grid-cols-[2.5fr_1fr] items-center">
        <LayoutLeft></LayoutLeft>
        <LayoutRight></LayoutRight>
      </div>
      <div>
        <Services></Services>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default HomePage;
