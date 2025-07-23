import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { Link } from 'react-router';
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <CiLinkedin size={25} />,
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
  return (
    <div>
      <div className="bg-gray-500 pt-[40px]  flex flex-col items-center justify-center px-6 ">
        <div className="w-full max-w-4xl space-y-12">
          {/* Logo */}
          <div className="text-center">
            <Link className="text-2xl font-bold text-orange-500" to="/">
              JAKARIA
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap gap-6 text-[#959595] font-medium">
              {[
                { menu: 'Home', to: '/' },
                { menu: 'Services', to: '/service' },
                { menu: 'About me', to: '/about' },
                { menu: 'Skills', to: '/skills' },
                { menu: 'Project', to: '/project' },
                { menu: 'Contact', to: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item?.to}
                    className="hover:text-[#575757] transition-colors"
                  >
                    {item?.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-x-[20px] justify-center mt-[20px]">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] border hover:bg-praimary hover:text-white transition-all border-gray-400 rounded-full flex items-center justify-center"
                title={item.name}
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center text-[#959595]">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#959595]" />
              <span>jakariaahmodmd@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#959595]" />
              <span>+8801889913945</span>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-[#bababa]"></div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-[#959595]">Copy Right </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
