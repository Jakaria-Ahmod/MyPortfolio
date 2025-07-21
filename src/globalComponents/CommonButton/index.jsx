import React from 'react';

const CommonButton = ({ children, handleClick }) => {
  return (
    <div>
      <div>
        <button
          onClick={handleClick}
          className="py-[12px] px-[40px] capitalize bg-praimary text-white font-Lato text-base font-bold cursor-pointer rounded-md"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default CommonButton;
