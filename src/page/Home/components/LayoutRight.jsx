import React from 'react';
import jakariaImg from '../../../assets/img/jakaria.jpg';

const LayoutRight = () => {
  return (
    <div>
      <div className="w-[618px] h-[618px] overflow-hidden rounded-full">
        <img
          src={jakariaImg}
          alt="Img"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LayoutRight;
