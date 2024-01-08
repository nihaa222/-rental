const Heading = () => {
  return (
    <div
      className="ml-64 
     mt-2  sm"
    >
      <div className="flex  gap-3">
        <img
          src="logo4.png"
          className="sm:h-50 sm:w-50 h-10 w-20 mt-3"
          alt="Logo"
        />
        <div className="flex flex-col">
          <p className="text-3xl font-bold">Car</p>
          <p className="font-semibold">Rental</p>
        </div>
        <div className="ml-[200px] hidden sm:flex ">
          <ul className="font-semibold flex gap-6 mt-4">
            <li>Home</li>
            <li>About</li>
            <li>Vehicle Models</li>
            <li>Testimonials</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="ml-[200px] mt-2">
          <button className="font-semibold hover:bg-black-200">Sign in </button>
          <button
            style={{ boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.2)" }}
            className=" text-white hover:bg-black  p-3 pl-5 pr-5 onHover ml-5 bg-red-600 rounded-[12px]"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
