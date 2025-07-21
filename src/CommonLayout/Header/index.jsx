import React from 'react';
import Logo from './components/Logo';
import MenuBar from './components/Menu';
import HireMe from './components/HireMe';

const Header = () => {
  return (
    <div>
      <div className="container">
        <nav className="my-[57px]">
          <div className="flex justify-between items-center">
            <Logo></Logo>
            <MenuBar></MenuBar>
            <HireMe></HireMe>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
