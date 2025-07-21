import React, { useState } from 'react';
import CommonHeding from '../../globalComponents/CommonHeading';
import SerVicesCard from '../../globalComponents/ServiceCard';
import { services } from './ServiceApi/ServiceApi';
import CommonButton from '../../globalComponents/CommonButton';

const Services = () => {
  const [card, setCard] = useState(6);
  const handleClick = () => {
    setCard(p => p + 6);
  };

  return (
    <div className="container">
      <div className="my-[150px]">
        <div>
          <CommonHeding
            Services="Services"
            p="I build fast, dynamic, and scalable frontend applications using React.js with reusable components and clean architecture."
          ></CommonHeding>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-[40px] cursor-pointer mt-[80px]">
            {services.slice(0, card).map(item => (
              <div key={item?.id}>
                <SerVicesCard
                  id={item?.id}
                  title={item?.title}
                  icon={item?.icon}
                  description={item?.description}
                ></SerVicesCard>
              </div>
            ))}
          </div>
          {card < services.length && (
            <div className="mt-[20px] flex items-center justify-center">
              <CommonButton handleClick={handleClick}>Load More</CommonButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
