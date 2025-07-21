import React from 'react';

const CommonHeding = ({ p, Services }) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-Lato text-[40px] font-bold ">{Services}</h2>
        <p className="font-Lato text-[20px] font-medium leading-[32px]">{p}</p>
      </div>
    </div>
  );
};

export default CommonHeding;
