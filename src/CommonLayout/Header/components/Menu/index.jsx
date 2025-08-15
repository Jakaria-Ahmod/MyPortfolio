import { Link } from 'react-router';

const MenuBar = () => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/project' },
    { name: 'future projects', path: '/futureprojects' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <div>
      <div>
        <ul className="flex items-center  md:space-x-6 xl:space-x-[60px]">
          {menuLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="font-Lato sm:text-[14px] text-[18px] lg:text-[20px] font-medium capitalize"
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
