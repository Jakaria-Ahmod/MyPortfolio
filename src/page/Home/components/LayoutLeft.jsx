import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import CountUp from 'react-countup';

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
    <div className="w-full">
      <div className="text-center md:text-left">
        <p className="font-Lato text-[20px] md:text-[24px] font-semibold">
          Hi I am
        </p>
        <h3 className="font-Lato text-[20px] md:text-[24px] font-semibold">
          Md Jakaria Ahmod
        </h3>
        <h1 className="font-Lato text-[28px] md:text-[50px] font-black text-praimary mt-2 md:mt-0">
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

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-x-4 mt-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="w-[40px] h-[40px] border hover:bg-praimary hover:text-white transition-all border-gray-400 rounded-full flex items-center justify-center"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
          <Link
            to="/contact"
            className="py-3 px-8 capitalize bg-praimary text-white font-Lato text-base font-bold rounded-md"
          >
            Hire Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1cAfUdGmlQ6mBnccV-dXnyNqmjRYDuJXb/view?usp=drive_link"
            target="_blank"
            className="py-3 px-8 capitalize bg-praimary text-white font-Lato text-base font-bold rounded-md"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-amber-100 p-5 rounded-md flex flex-col sm:flex-row gap-6 justify-between items-center max-w-full md:max-w-[710px] mx-auto md:mx-0">
          {statsData.map((item, index) => {
            const numericValue = parseInt(item.value);
            return (
              <div key={index} className="text-center">
                <h3 className="text-praimary font-extrabold text-2xl">
                  <CountUp
                    end={numericValue}
                    duration={2}
                    suffix={item.value.includes('+') ? '+' : ''}
                  />
                </h3>
                <h4 className="text-base font-bold mt-1">{item.label}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LayoutLeft;
