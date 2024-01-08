import { FaCarSide } from "react-icons/fa";
const Choose = () => {
  return (
    <div className="lg:ml-64 mt-2 mr-64 flex gap-[200px] ">
      <div className="w-[600px]">
        <div className="  flex flex-col gap-3">
          <p className="font-bold mb-4">Why Choose Us</p>
          <p className="font-bold text-[40px]">
            Best valued deals you will ever find
          </p>
          <p>
            <span>
              Discover the best deals you ever find with out unbeatible offers.
            </span>
            <span>
              We are dedicated to provide you with the best calue for your
            </span>
            <span>
              money. so you can enjoy top-quality services and products without
            </span>
            <span>breaking the bank. Our deals are designed</span>
            <span>
              renting experience so dont miss out on your chance to save big
            </span>
          </p>
          <button className="p-4 w-[150px] h-[60px] bg-red-600 block text-white bg-red hover:bg-red-500">
            Find Details
          </button>
        </div>
      </div>
      <div className="w-[600px]">
        <div className="flex gap-9 flex-col w-[500px] mb-9">
          <div className="flex gap-7">
            <div>
              <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
              <FaCarSide
                color="red"
                className="absolute ml-[90px] h-10 mt-[-58px] w-10"
              />
            </div>
            <div>
              <p className="font-bold text-[20px] mb-4">Cross Country Drive</p>
              <p>
                <span>Take your driving experience to the next level </span>
                <span>with our top notch vehicles for your </span>
                <span>cross-country adventures</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-[500px] flex-col mb-9">
          <div className="flex gap-7">
            <div>
              <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
              <FaCarSide
                color="red"
                className="absolute ml-[90px] h-10 mt-[-58px] w-10"
              />
            </div>
            <div>
              <p className="font-bold text-[20px] mb-4">Cross Country Drive</p>
              <p>
                <span>Take your driving experience to the next level </span>
                <span>with our top notch vehicles for your </span>
                <span>cross-country adventures</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-[500px] flex-col">
          <div className="flex gap-7">
            <div>
              <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
              <FaCarSide
                color="red"
                className="absolute ml-[90px] h-10 mt-[-58px] w-10"
              />
            </div>
            <div>
              <p className="font-bold text-[20px] mb-4">Cross Country Drive</p>
              <p>
                <span>Take your driving experience to the next level </span>
                <span>with our top notch vehicles for your </span>
                <span>cross-country adventures</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
