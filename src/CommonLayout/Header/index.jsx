import React, { useState } from 'react';
import Logo from './components/Logo';
import MenuBar from './components/Menu';
import HireMe from './components/HireMe';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <MenuBar />
          <HireMe />
          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              <FiMenu />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 flex flex-col items-start gap-y-4">
            <MenuBar />
            <HireMe />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
