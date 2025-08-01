import React from 'react';

const SerVicesCard = ({ icon, title, description }) => {
  return (
    <div className="p-[34px] w-[400px] h-[400px] bg-white shadow rounded-xl transition-all hover:shadow-2xl text-center">
      <div className="flex items-center justify-center text-primary text-[70px]">
        {icon}
      </div>
      <h3 className="font-Lato text-[24px] font-bold leading-[38px] mt-4 text-primary">
        {title}
      </h3>
      <p className="font-Lato text-[20px] font-medium leading-[32px] mt-8">
        {description}
      </p>
    </div>
  );
};

export default SerVicesCard;
