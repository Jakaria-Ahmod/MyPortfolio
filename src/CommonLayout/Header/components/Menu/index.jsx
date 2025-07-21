import React from 'react';
import { Link } from 'react-router';

const MenuBar = () => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <div>
      <div>
        <ul className="flex items-center space-x-[60px]">
          {menuLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="font-Lato text-[20px] font-medium capitalize"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
