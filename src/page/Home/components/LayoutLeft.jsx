import { Download, Mail, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const LayoutLeft = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

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
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/mdjakariaahmod/',
      color: '#0077B5',
      hoverColor: '#005885',
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://web.facebook.com/md.jakaria.ahmod.77357/',
      color: '#1877F2',
      hoverColor: '#166FE5',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/01889913945',
      color: '#25D366',
      hoverColor: '#20BA5A',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Jakaria-Ahmod',
      color: '#333333',
      hoverColor: '#24292e',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/jakaria.dev/',
      color: '#E4405F',
      hoverColor: '#C13584',
    },
    {
      name: 'Twitter/X',
      icon: <FaTwitter />,
      url: 'https://x.com/MdjakariaAhmod',
      color: '#1DA1F2',
      hoverColor: '#0d8bd9',
    },
  ];

  const statsData = [
    {
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      description: 'Building web solutions',
    },
    {
      value: 20,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful deliveries',
    },
    {
      value: 6,
      suffix: '+',
      label: 'Team Collaborations',
      description: 'Working with teams',
    },
  ];

  // Enhanced typewriter effect
  useEffect(() => {
    const word = typingWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex(
              prevIndex => (prevIndex + 1) % typingWords.length
            );
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, typingWords]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-5 w-24 h-24 bg-gradient-to-br from-green-200 to-teal-200 rounded-full blur-2xl opacity-40 animate-pulse delay-1000" />

      <div className="relative z-10 text-center md:text-left">
        {/* Greeting Section with enhanced styling */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <p className="font-semibold text-lg text-gray-700">Hi I am</p>
          </div>

          <h3 className="font-bold text-2xl md:text-3xl text-gray-800 mb-2">
            Md Jakaria Ahmod
          </h3>

          {/* Enhanced typewriter with gradient */}
          <div className="relative">
            <h1 className="font-black text-3xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mt-2 md:mt-0 min-h-[80px] md:min-h-[100px] flex items-center justify-center md:justify-start">
              {currentText}
              <span className="animate-pulse text-purple-600">|</span>
            </h1>
          </div>
        </div>

        {/* Enhanced Social Icons */}
        <div className="flex justify-center md:justify-start gap-3 mt-8 mb-10">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="group relative w-14 h-14 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:-translate-y-1"
              style={{
                '--hover-color': item.hoverColor,
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>

              {/* Hover tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.name}
              </div>
            </a>
          ))}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Hire Me</span>
            </div>
          </button>

          <a
            href="https://drive.google.com/file/d/1ssclT7KWf-w2ir7CO6IArMey_QyFDMIR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </div>
          </a>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 rounded-3xl" />
          <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Achievement Stats</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-between items-center">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="group text-center flex-1 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="relative">
                    {/* Animated counter */}
                    <h3 className="text-4xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.value}
                      {item.suffix}
                    </h3>

                    {/* Glow effect on hover */}
                    {hoveredStat === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-20 animate-pulse" />
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors duration-200">
                    {item.label}
                  </h4>

                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLeft;
