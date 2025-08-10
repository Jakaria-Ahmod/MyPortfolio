import { Link } from 'react-router';

const HireMe = () => {
  return (
    <div>
      <Link
        to="/contact"
        className="py-[12px] px-[40px] capitalize bg-green-700 text-white font-Lato text-base font-bold cursor-pointer rounded-md"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
