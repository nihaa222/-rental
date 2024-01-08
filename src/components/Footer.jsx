const Footer = () => {
  return (
    <div className="bg-green-50 pl-[200px] pr-[200px] pt-[100px] pb-[100px] flex gap-4 ">
      <div className="w-[300px] mr-[100px]">
        <p className="font-bold text-5 mb-3">Car Rental</p>
        <p>
          We offers a big range of vehicles for all your driving needs. we have
          the perfect car to meet your needs
        </p>
        <p>
          {" "}
          <span className="font-bold">Call</span>: (123)-456-567
        </p>
        <p>
          {" "}
          <span className="font-bold">Email</span> : mailin@gmail.com
        </p>
      </div>
      <div className="w-[300px]">
        <p className="font-bold text-5 mb-3">COMPANY</p>
        <p>New York</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className="w-[300px]">
        <p className="font-bold text-5 mb-3">WORKING HOURS</p>
        <p>Mon - Fri 9:00AM - 9:00PM</p>
        <p>Sat - 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="w-[300px]">
        <p className="font-bold text-5 mb-3">SUBSCRIPTION</p>
        <p>Subscribe your Email address for latest news & updates</p>
        <button className="pl-4 pr-4 pt-2 pb-2 bg-gray-300 text-gray-600">
          Enter Email Address
        </button>
        <button className="pl-4 pr-4 pt-2 pb-2 bg-red-600 text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
