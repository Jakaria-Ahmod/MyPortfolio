import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const SerVicesCard = ({
  icon,
  title,
  description,
  gradient = 'from-blue-600 to-purple-600',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
      ></div>

      {/* Main card */}
      <div className="relative h-96 bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform rotate-45"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>

        {/* Icon container with enhanced styling */}
        <div className="relative mb-6">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <div className="text-3xl">{icon}</div>
          </div>

          {/* Icon glow effect */}
          <div
            className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 blur-md transition-all duration-500 group-hover:opacity-50`}
          ></div>
        </div>

        {/* Content section */}
        <div className="relative z-10 space-y-4">
          {/* Title with underline animation */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-gray-900">
              {title}
            </h3>
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-500 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base transition-colors duration-300 group-hover:text-gray-700">
            {description}
          </p>

          {/* Action button */}
          <div className="pt-4">
            <button
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
          <div
            className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${gradient} opacity-10 rounded-tl-full transition-all duration-500 group-hover:opacity-20`}
          ></div>
        </div>

        {/* Sparkle effect on hover */}
        {isHovered && (
          <div className="absolute top-4 right-4 animate-bounce">
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SerVicesCard;
