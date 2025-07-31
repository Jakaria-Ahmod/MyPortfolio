import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router'; // ✅ correct import
import Logo from '../Logo';
import HireMe from '../HireMe';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // Fullscreen overlay
    <div
      className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      `}
    >
      {/* Semi-transparent backdrop */}
      <div
        onClick={toggleMenu}
        className="absolute inset-0 bg-black opacity-40"
      ></div>
      {/* Side drawer */}
      <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 space-y-6 z-50">
        <div className="flex justify-between items-center">
          <div>
            <Logo></Logo>
          </div>
          <div>
            <button onClick={toggleMenu}>
              <IoCloseOutline size={30} className="cursor-pointer" />
            </button>
          </div>
        </div>
        <ul className="flex flex-col space-y-4">
          {menuLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={toggleMenu} // Close menu after click
                className="block font-Lato text-[18px] font-medium capitalize hover:text-blue-600 duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <HireMe></HireMe>
      </div>
      <div></div>
    </div>
  );
};

export default MobileMenu;
