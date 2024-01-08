import { FaCarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

import { IoIosMan } from "react-icons/io";

const Plan = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-2 items-center lg:ml-64 mt-[200px] mr-64 ">
        <p className="font-bold text-[40px]">Plan your trip now</p>
        <h2 className="font-semibold">Quick & easy car rental</h2>
      </div>
      <div className="flex gap-[270px] lg:ml-64 mt-[150px] mr-[64px]">
        <div>
          <div className="flex gap-5 flex-col">
            <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
            <FaCarAlt
              color="red"
              className="absolute ml-[90px] h-10 mt-2 w-10"
            />
            <p className="ml-[80px] mb-2 font-semibold">Select Car</p>
          </div>

          <p>We offers a big range of vehicles for all</p>
          <p className="ml-3">your driving needs. We have the</p>
          <p className="ml-6">Perfect car to meet your needs</p>
        </div>

        <div>
          <div className="flex gap-5 flex-col">
            <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
            <IoIosMan
              color="red"
              className="absolute ml-[90px] h-10 mt-2 w-10"
            />
            <p className="ml-[50px] mb-2 font-semibold">Contact Operator</p>
          </div>

          <p className="ml-1">Our knowledgeble and friendly</p>
          <p className="ml-[-1]">operators are always ready to help</p>
          <p className="ml-3">with any questions or concerns</p>
        </div>
        <div>
          <div className="flex gap-5 flex-col">
            <button className="relative rounded-[90px] bg-red-200 ml-20 h-[60px] w-[60px]"></button>
            <FaCarSide
              color="red"
              className="absolute ml-[90px] h-10 mt-2 w-10"
            />
            <p className="ml-[80px] mb-2 font-semibold">Select Car</p>
          </div>

          <p>Whether you are hitting the open road</p>
          <p className="ml-3">we have got you covered with our</p>
          <p className="ml-6">wide range of cars range of cars</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
