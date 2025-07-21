import React from 'react';
import LayoutLeft from './components/LayoutLeft';
import LayoutRight from './components/LayoutRight';

const HomePage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-[2.5fr_1fr] items-center">
        <LayoutLeft></LayoutLeft>
        <LayoutRight></LayoutRight>
      </div>
    </div>
  );
};

export default HomePage;
