const Testimonials = () => {
  return (
    <div className="lg:ml-[64px] mt-[300px]">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="font-bold">Reviewed by People</p>
        <p className="text-[40px] font-bold ">Client's Testimonials</p>
        <p className="text-[10px]">
          <p className="ml-11">
            Discover the positive impact we have made on our clients by reading
            through their
          </p>
          <p className="ml-9">
            testimonials. Our clients have experienced our service and results
            and they are eager to share{" "}
          </p>
          <p className="ml-[130px]">their positive experiences with you</p>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div
          style={{ boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.2)" }}
          className="h-[200px] lg:ml-[104px] 
        mt-[100px] mr-[64px] rounded-md p-10 w-[400px] bg-green-50"
        >
          <div>
            <p className="mb-4">
              <span>"</span> We rented a car from this website and had an
              amazing experience! The booking was easy and the rental retes were
              very affordable<span>"</span>
            </p>
            <div className="flex gap-[20px]">
              <div>
                <img
                  className="w-[40px] h-[40px] rounded-[90px]"
                  src="photo1.avif"
                ></img>
              </div>
              <div className="flex text-[15px]  flex-col ">
                <p className="font-semibold text-[12px]">Parry Hawk</p>
                <p className="font-semibold text-[12px]">Belgrade</p>
              </div>
              <div>
                <img className="h-10 w-10 ml-[100px]" src="th.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.2)" }}
          className="h-[200px] rounded-md p-10 lg:ml-[104px] mt-[100px] mr-[64px] w-[400px] bg-green-50"
        >
          <div>
            <p className="mb-4">
              <span>"</span> The car was in great condition and made our trip
              even better .Highly recommend for this car rental website
              <span>"</span>
            </p>
            <div className="flex gap-[20px]">
              <div>
                <img
                  className="w-[40px] h-[40px] rounded-[90px]"
                  src="photo2.avif"
                ></img>
              </div>
              <div className="flex text-[15px]  flex-col ">
                <p className="font-semibold text-[12px]">Ron Rizzly</p>
                <p className="font-semibold text-[12px]">Navi Sad</p>
              </div>
              <div>
                <img className="h-10 w-10 ml-[100px]" src="th.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
