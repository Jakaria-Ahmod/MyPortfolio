import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router'; // Changed to react-router-dom for proper usage

const AppFooter = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={25} />,
      url: 'https://www.linkedin.com/in/mdjakariaahmod/',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={25} />,
      url: 'https://web.facebook.com/md.jakaria.ahmod.77357/',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={25} />,
      url: 'https://wa.me/01889913945',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={25} />,
      url: 'https://github.com/Jakaria-Ahmod',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-4xl space-y-10">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <Link
            className="text-3xl font-extrabold text-orange-500 hover:text-orange-400 transition-colors"
            to="/"
          >
            JAKARIA
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium">
              {[
                { menu: 'Home', to: '/' },
                { menu: 'Services', to: '/service' },
                { menu: 'About me', to: '/about' },
                { menu: 'Skills', to: '/skills' },
                { menu: 'Project', to: '/project' },
                { menu: 'Contact', to: '/contact' },
                { menu: 'future projects', to: '/futureprojects' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item?.to}
                    className="hover:text-white transition-colors"
                  >
                    {item?.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>jakariaahmodmd@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone />
            <span>+8801889913945</span>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          <p>&copy; {currentYear} Jakaria. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
