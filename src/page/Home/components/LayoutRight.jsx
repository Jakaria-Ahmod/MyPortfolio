import jakariaImg from '../../../assets/img/jakaria.jpg';

const LayoutRight = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[618px] aspect-square overflow-hidden rounded-full shadow-md border border-gray-200">
        <img
          src={jakariaImg}
          alt="Jakaria Ahmod"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LayoutRight;
