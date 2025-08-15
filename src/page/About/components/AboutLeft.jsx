import jakaria from '../../../assets/img/jakariaA.jpg';

const AboutLeft = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="w-full aspect-[9/14] bg-gray-200">
          <img
            src={jakaria}
            alt="Jakaria"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
