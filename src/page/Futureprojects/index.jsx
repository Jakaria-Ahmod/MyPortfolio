import { useEffect, useState } from 'react';

const Futureprojects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frontendProjects = [
    {
      id: 1,
      title: 'Top Shelf',
      description:
        'Top Shelf is an e-commerce platform dedicated to offering a curated selection of high-quality products across various categories. From fashion and lifestyle to electronics and home essentials, we ensure every item meets top-tier standards. Our goal is to provide a seamless online shopping experience, combining premium products, fast delivery, and excellent customer service.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      status: 'Design',
      progress: 30,
      timeline: 'March 2025',
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      Link: 'https://top-shelp-team.vercel.app/',
    },
    {
      id: 2,
      title: 'Real-time Collaboration Tool',
      description:
        'Modern frontend for team collaboration with live cursors, real-time editing, and beautiful animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      status: 'Planning',
      progress: 15,
      timeline: 'April 2025',
      icon: '🤝',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      id: 3,
      title: 'E-commerce Product Showcase',
      description:
        'Dynamic product listing with filters, search, sorting, and modal-based product details. Perfect for showcasing items with seamless UI/UX.',
      technologies: [
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'TypeScript',
        'Axios',
      ],
      status: 'In Progress',
      progress: 40,
      timeline: 'May 2025',
      icon: '🛍️',
      gradient: 'from-green-500 to-lime-500',
      bgGradient: 'from-green-50 to-lime-50',
    },
    {
      id: 4,
      title: 'Interactive Blog Platform',
      description:
        'Blog site supporting CRUD operations, comments, likes, and search functionality. Designed for a modern and responsive reading experience.',
      technologies: [
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'TypeScript',
        'Axios',
      ],
      status: 'Planning',
      progress: 10,
      timeline: 'June 2025',
      icon: '📝',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      id: 5,
      title: 'Task & Project Manager',
      description:
        'Manage personal or team tasks with drag-and-drop, deadlines, and progress tracking. Built for efficiency and smooth animations.',
      technologies: [
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'Framer Motion',
        'TypeScript',
      ],
      status: 'Design',
      progress: 25,
      timeline: 'July 2025',
      icon: '📋',
      gradient: 'from-red-500 to-pink-400',
      bgGradient: 'from-red-50 to-pink-50',
    },
  ];

  const getStatusColor = status => {
    const colors = {
      Planning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Research: 'bg-blue-100 text-blue-800 border-blue-200',
      Design: 'bg-purple-100 text-purple-800 border-purple-200',
      Concept: 'bg-gray-100 text-gray-800 border-gray-200',
      Prototype: 'bg-green-100 text-green-800 border-green-200',
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTechColor = tech => {
    const colors = {
      React: 'from-cyan-400 to-blue-500',
      TypeScript: 'from-blue-600 to-blue-800',
      TailwindCSS: 'from-teal-400 to-cyan-500',
      Vite: 'from-purple-600 to-blue-600',
    };
    return colors[tech] || 'from-purple-500 to-pink-500';
  };

  return (
    <section className="mt-24 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Frontend Focus
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Future Frontend Projects
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge frontend experiences that push the boundaries of web
            development. These projects showcase modern UI/UX trends and
            innovative user interactions.
          </p>

          {/* Frontend Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {frontendProjects.length}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">7+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">2025</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Timeline
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontendProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative bg-white rounded-3xl shadow-lg overflow-hidden 
                transition-all duration-500 ease-out border border-gray-100
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                ${hoveredCard === project.id ? 'z-10' : ''}
              `}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient Overlay */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-br ${project.bgGradient} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `}
              />

              {/* Header with Icon and Status */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`
                    text-4xl p-3 rounded-2xl bg-gradient-to-r ${project.gradient} 
                    transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                    shadow-lg group-hover:shadow-xl
                  `}
                  >
                    <div className="bg-white rounded-xl p-2 shadow-inner">
                      {project.icon}
                    </div>
                  </div>

                  <div
                    className={`
                    px-3 py-1.5 rounded-full text-xs font-semibold border
                    ${getStatusColor(project.status)}
                  `}
                  >
                    {project.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="relative px-6 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500">
                    Development Progress
                  </span>
                  <span className="text-xs font-bold text-gray-700">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-1000 ease-out rounded-full`}
                    style={{
                      width:
                        hoveredCard === project.id
                          ? `${project.progress}%`
                          : '0%',
                      transitionDelay:
                        hoveredCard === project.id ? '200ms' : '0ms',
                    }}
                  />
                </div>
              </div>

              {/* Frontend Technologies */}
              <div className="relative px-6 pb-4">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide flex items-center">
                  <span className="mr-2">⚡</span>
                  Frontend Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`
                        bg-gradient-to-r ${getTechColor(
                          tech
                        )} text-white text-xs 
                        px-2 py-1 rounded-full font-medium shadow-sm
                        transform hover:scale-105 transition-all duration-200
                        opacity-80 group-hover:opacity-100
                      `}
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Timeline and Action */}
              <div className="relative px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">{project.timeline}</span>
                  </div>

                  <a
                    href={project.Link}
                    target="_blank"
                    className={`
                    px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                    bg-gradient-to-r ${project.gradient} text-white
                    hover:shadow-lg hover:scale-105 active:scale-95
                    opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0
                  `}
                  >
                    Preview
                  </a>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className={`
                absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r ${project.gradient}
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `}
              />

              {/* Corner Shine */}
              <div
                className={`
                absolute top-0 right-0 w-20 h-20 
                bg-gradient-to-bl ${project.gradient} opacity-5
                group-hover:opacity-20 transition-opacity duration-300 rounded-bl-3xl
              `}
              />
            </div>
          ))}
        </div>

        {/* Frontend CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-2xl">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">🎨</span>
              <h3 className="text-2xl font-bold text-gray-900">
                Love Frontend Development?
              </h3>
            </div>
            <p className="text-gray-600 max-w-md text-center">
              These projects represent the future of user experience. Each one
              focuses on creating beautiful, performant, and engaging frontend
              solutions.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://top-shelp-team.vercel.app/"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View Current Work
              </a>
              <a
                href="https://github.com/Jakaria-Ahmod/"
                target="_blank"
                className="bg-white border-2 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 px-6 py-3 rounded-xl font-semibold hover:shadow-md transform hover:scale-105 transition-all duration-200"
              >
                Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Futureprojects;
