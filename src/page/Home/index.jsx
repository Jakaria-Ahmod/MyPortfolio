import React from 'react';
import LayoutLeft from './components/LayoutLeft';
import LayoutRight from './components/LayoutRight';
import Services from '../Services';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="container mx-auto px-4 md:py-16">
      {/* Top Layout Section (Left + Right) */}
      <div className="grid mt-[106px]  grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">
        <LayoutLeft />
        <LayoutRight />
      </div>

      {/* Content Sections (Responsive with spacing) */}
      <div className="mt-16 space-y-16">
        <Services />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
