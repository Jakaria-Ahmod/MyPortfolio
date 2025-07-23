import React from 'react';
import CommonButton from '../../../../globalComponents/CommonButton';
import { Link } from 'react-router';

const HireMe = () => {
  return (
    <div>
      <Link
        to="/contact"
        className="py-[12px] px-[40px] capitalize bg-praimary text-white font-Lato text-base font-bold cursor-pointer rounded-md"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
