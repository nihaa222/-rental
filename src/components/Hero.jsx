const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 lg:ml-64 mt-[150px] mr-64 ">
          <div>
            <p className="font-bold mb-4 text-2xl">Plan your trip now </p>
          </div>
          <div>
            <p className="text-[50px] font-bold">
              Save <span className="text-red-600">big</span> with our
            </p>
            <p className="text-[50px] font-bold"> car rental</p>
          </div>
          <div>
            <p className="text-gray-600">
              Rent the car of your dreams Unbeatable unlimited miles,
            </p>
            <p className="text-gray-600">
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="flex gap-5">
            <button
              style={{ boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.3)" }}
              className="shadow-lg text-white hover:bg-red-500 p-3 pl-5 pr-5 onHover  bg-red-600 rounded-[9px]"
            >
              Book Ride
            </button>
            <button
              style={{ boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.3)" }}
              className="shadow-lg text-white hover:bg-red-500  p-3 pl-5 pr-5 onHover  bg-red-600 rounded-[9px]"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-[150px]">
          <img
            className="ml-[-180px] h-[500px] w-[800px]"
            src="maincar.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
