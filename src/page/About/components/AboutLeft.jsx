import React from 'react';
import jakaria from '../../../assets/img/jakariaA.jpg';

const AboutLeft = () => {
  return (
    <div>
      <div className="w-[566px] h-[888px] bg-black rounded-md overflow-hidden">
        <img src={jakaria} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AboutLeft;
