import React from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';

const SerVicesCard = ({ icon, title, description, id }) => {
  return (
    <div>
      <div className="p-[34px] w-[400px] h-[400px] bg-white shadow rounded-xl transition-all hover:shadow-2xl text-center">
        <div>
          <div className="flex items-center justify-center">
            <span className="text-praimary text-[70px]">{icon}</span>
          </div>
          <h3 className="font-Lato text-[24px] font-bold leading-[38px] mt-[16px] text-praimary">
            {title}
          </h3>
          <div className="mt-[34px]">
            <p className="font-Lato text-[20px] font-medium leading-[32px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerVicesCard;
