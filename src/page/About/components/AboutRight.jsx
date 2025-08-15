const AboutRight = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6 text-gray-700 font-sans">
        {/* Introduction */}
        <p className="text-base md:text-lg leading-relaxed">
          Hello! I'm Jakaria Ahmod, a passionate, curious, and self-motivated
          web developer who is currently on the path to becoming a professional
          Software Engineer. I believe in the power of consistent learning,
          solving real-world problems through code, and building products that
          create real value for people.
        </p>

        {/* Journey in Tech */}
        <p className="text-base md:text-lg leading-relaxed">
          My journey in tech started with a simple curiosity: “How does a
          website work?” That single question led me into the world of web
          development, where I found my true passion. I started with the basics
          of HTML, CSS, and JavaScript. Over time, I became confident in
          creating dynamic, responsive websites and went deeper into modern
          frontend technologies like React.js, Tailwind CSS, Redux, Ant Design,
          and Firebase.
        </p>

        {/* Transition to Full-Stack */}
        <p className="text-base md:text-lg leading-relaxed">
          As a Frontend Developer, I love designing clean user interfaces and
          crafting smooth user experiences. But I didn't want to stop there. I
          wanted to build complete full-stack applications, and that’s when I
          decided to learn the **MERN Stack** — MongoDB, Express.js, React.js,
          and Node.js. This gave me the ability to develop applications from end
          to end — from database to frontend — and take full ownership of
          projects.
        </p>

        {/* Current Focus */}
        <p className="text-base md:text-lg leading-relaxed">
          Currently, I’m working on improving my skills in backend development,
          database design, API integration, and user authentication. I’m also
          learning advanced topics such as data structures & algorithms, system
          design, and software architecture to become a well-rounded engineer
          who can build scalable and maintainable systems.
        </p>

        {/* Projects and Learning */}
        <p className="text-base md:text-lg leading-relaxed">
          Throughout my journey, I've completed several frontend projects, and
          now I’m shifting toward full-stack projects where I can apply both
          frontend and backend knowledge. My current focus is building
          real-world applications that solve specific problems, optimize
          performance, and deliver great user experiences.
        </p>

        {/* Additional Skills */}
        <p className="text-base md:text-lg leading-relaxed">
          Apart from coding, I am also learning about version control with Git &
          GitHub, responsive design principles, and deployment using platforms
          like Vercel and Netlify.
        </p>
      </div>

      {/* Download CV Button */}
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/1ssclT7KWf-w2ir7CO6IArMey_QyFDMIR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-8 text-lg font-bold capitalize text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
        >
          Download CV 📥
        </a>
      </div>
    </div>
  );
};

export default AboutRight;
