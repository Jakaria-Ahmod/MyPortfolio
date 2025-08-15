import { ArrowLeft, Home, RefreshCw, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchText, setGlitchText] = useState('404');

  useEffect(() => {
    setIsVisible(true);

    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['4', '0', '4', '∅', '⊘', '※'];
      const randomGlitch = Array(3)
        .fill()
        .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
        .join('');
      setGlitchText(randomGlitch);

      setTimeout(() => setGlitchText('404'), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`text-center z-10 max-w-2xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* 404 Number with glitch effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 leading-none select-none">
            {glitchText}
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-pink-500/20 animate-ping">
            404
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">
            Page Not Found
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Oops! The page you're looking for doesn't exist. <br />
          It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => (window.location.href = '/')}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700 cursor-pointer"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Go Home
          </button>

          <button
            onClick={handleGoBack}
            className="group flex cursor-pointer items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-full border border-gray-600 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <button
            onClick={handleRefresh}
            className="group flex items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-full border border-gray-600 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50 cursor-pointer"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Refresh
          </button>
        </div>

        {/* Search suggestion */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex items-center justify-center gap-2 text-gray-300 mb-3">
            <Search className="w-5 h-5" />
            <span className="font-medium">Or search for</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {['Home', 'Service', 'Contact'].map(item => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`} // string কে path বানানো
                className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm hover:bg-purple-600/30 cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer message */}
        <p className="text-gray-500 text-sm mt-8 opacity-75">
          If the problem persists, please contact our support team
        </p>
      </div>

      {/* Floating particles */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  );
};

export default NotFound;
