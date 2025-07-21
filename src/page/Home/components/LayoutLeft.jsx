import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import CommonButton from '../../../globalComponents/CommonButton';

const LayoutLeft = () => {
  const typingWords = [
    'Frontend Developer',
    'React.js Developer',
    'MERN Stack Learner',
    'JavaScript Developer',
    'Software Engineer Learner',
    'Full-Stack Developer Learner',
    'Web Application Builder',
    'Clean UI Designer',
    'Tech Enthusiast',
    'Problem Solver',
    'Open Source Contributor',
  ];
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
  const statsData = [
    {
      value: '2+',
      label: 'Years of Experience',
    },
    {
      value: '10+',
      label: 'Completed Projects',
    },
    {
      value: '3+',
      label: 'Team Collaborations',
    },
  ];

  return (
    <div>
      <div>
        <p className="font-Lato text-[24px] font-semibold">Hi I am</p>
        <h3 className="font-Lato text-[24px] font-semibold">
          Md Jakaria Ahmod
        </h3>
        <h1 className="font-Lato text-[50px] font-black text-praimary">
          <Typewriter
            words={typingWords}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div className="flex gap-x-[20px] mt-[20px]">
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
        <div className="mt-[61px] flex gap-x-[24px] items-center">
          <CommonButton children="Hire Me"></CommonButton>
          <div>
            <a
              href="https://drive.google.com/file/d/1y0vDrmTKlOdyFOPFmM8YZU_wihc5AQrI/view?usp=drive_link"
              target="_blank"
              className="py-[12px] px-[40px] capitalize bg-praimary text-white font-Lato text-base font-bold cursor-pointer rounded-md"
            >
              Downlead CV
            </a>
          </div>
        </div>
        <div className="p-[24px] bg-amber-100 max-w-[710px] flex mt-[104px] gap-x-[30px]">
          {statsData.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <h3 className="text-praimary font-Lato font-extrabold text-[24px]">
                  {item.value}
                </h3>
                <h3 className="font-Lato text-[20px] font-bold">
                  {item.label}
                </h3>
              </div>
              {/* Divider between items except after the last item */}
              {index !== statsData.length - 1 && (
                // <div className="w-[1px] h-full bg-gray-300"></div>
                <div className="w-[1px]  h-[full] bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutLeft;
