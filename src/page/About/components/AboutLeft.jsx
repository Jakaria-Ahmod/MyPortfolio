import React from 'react';
import jakaria from '../../../assets/img/jakariaA.jpg';

const AboutLeft = () => {
  return (
    <div className="w-full max-w-[566px] mx-auto">
      <div className="w-full aspect-[9/14] bg-black rounded-md overflow-hidden">
        <img
          src={jakaria}
          alt="Jakaria"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutLeft;
