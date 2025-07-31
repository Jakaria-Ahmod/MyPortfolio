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
  window.scrollTo(0, 0);
  return (
    <div className="container mx-auto px-4">
      <div className="my-20 md:my-[150px]">
        {/* Section Heading */}
        <div>
          <CommonHeding
            Services="Services"
            p="I build fast, dynamic, and scalable frontend applications using React.js with reusable components and clean architecture."
          />
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid grid-cols-1 justify-center sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.slice(0, card).map(item => (
            <div key={item?.id} className="flex justify-center">
              <SerVicesCard
                id={item?.id}
                title={item?.title}
                icon={item?.icon}
                description={item?.description}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {card < services.length && (
          <div className="mt-10 flex justify-center">
            <CommonButton handleClick={handleClick}>Load More</CommonButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
