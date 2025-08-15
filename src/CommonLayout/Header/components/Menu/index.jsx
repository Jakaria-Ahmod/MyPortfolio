import { NavLink } from 'react-router';

const MenuBar = () => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/project' },
    { name: 'Future Projects', path: '/futureprojects' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkStyles = 'text-orange-500 border-b-2 border-orange-500 pb-1';
  const linkStyles =
    'text-gray-600 hover:text-orange-500 transition-colors duration-300';

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center space-x-6 xl:space-x-10">
        {menuLinks.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-medium capitalize text-lg ${
                  isActive ? activeLinkStyles : linkStyles
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
