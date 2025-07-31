import React, { useState } from 'react';
import Logo from './components/Logo';
import MenuBar from './components/Menu';
import HireMe from './components/HireMe';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './components/MobileMenu'; // ✅ ঠিক করো নামটা

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <MenuBar />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <HireMe />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none cursor-pointer"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide Menu */}
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
