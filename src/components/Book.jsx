import { useState } from "react";
import { FaCar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Book = () => {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const Content2 = [
    "Select Pickup",
    "Belgrade",
    "Navi Sad",
    "Nis",
    "Kragunevi",
    "Subotica",
  ];
  const content = [
    "Select your Car",
    "Audi A1 S-Line",
    "VW Golf 6",
    "Toyota Camry",
    "Mercedes-Benz GLk",
    "VW Passat CC",
  ];

  const content3 = [
    "Select drop-Off",
    "New Sad",
    "Subotica",
    "Karistari",
    "Nis",
    "Bay Area",
  ];
  const [on, setOn] = useState(false);
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(false);

  const handleClick = () => {
    setOn((prevState) => !prevState);
  };
  const handleClick2 = () => {
    setOn2((prevState) => !prevState);
  };
  const handleClick1 = () => {
    setOn1((prevState) => !prevState);
  };

  return (
    <>
      <p className="font-bold text-lg lg:ml-64 mt-[150px] mr-64">Book a Car</p>
      <div className="lg:ml-64 mt-[20px] ">
        <div className="flex flex-row">
          <div style={{ marginRight: "80px" }}>
            <div className="flex gap-1 mb-1">
              <FaCar color="red" className="mt-1" />
              <p>Select Your Car</p>
            </div>

            <div style={{ position: "relative", width: "400px" }}>
              <button
                onClick={handleClick}
                className="relative bg-[#bebeb6] rounded-md border-[2px] pt-1 pr-[70px] pl-1"
                style={{ width: "100%" }}
              >
                {selected ? `${selected}` : "Select your car"}
              </button>
              <div
                className={`${
                  on ? "block" : "hidden"
                } rounded-md border-[2px] bg-[#bebeb6] cursor-pointer pt-1 pr-[70px]  pl-1 absolute`}
                style={{ width: "100%" }}
              >
                {content.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setOn(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginRight: "80px" }}>
            <div className="flex gap-1 mb-1">
              <CiLocationOn color="red" className="mt-1" />
              <p>Select Your Pickup Location</p>
            </div>

            <div style={{ position: "relative", width: "400px" }}>
              <button
                onClick={handleClick1}
                className="relative  bg-[#bebeb6] rounded-md border-[2px] pt-1 pr-[70px] pl-1"
                style={{ width: "100%" }}
              >
                {selected2 ? `${selected2}` : "Select pickup location"}
              </button>
              <div
                className={`${
                  on1 ? "block" : "hidden"
                } rounded-md border-[2px] bg-[#bebeb6] cursor-pointer pt-1 pr-[70px]  pl-1 absolute`}
                style={{ width: "100%" }}
              >
                {Content2.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected2(option);
                      setOn1(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{}}>
            <div className="flex gap-1 mb-1">
              <CiLocationOn color="red" className="mt-1" />
              <p>Select Your Drop Location</p>
            </div>
            <div style={{ position: "relative", width: "400px" }}>
              <button
                onClick={handleClick2}
                className="relative bg-[#bebeb6] rounded-md border-[2px] pt-1 pr-[70px] pl-1"
                style={{ width: "100%" }}
              >
                {selected3 ? `${selected3}` : "Select drop off location"}
              </button>
              <div
                className={`${
                  on2 ? "block" : "hidden"
                } rounded-md border-[2px] bg-[#cac8b2] cursor-pointer pt-1 pr-[70px]  pl-1 absolute`}
                style={{ width: "100%" }}
              >
                {content3.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected3(option);
                      setOn2(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="lg:ml-64 mt-[20px] ">
          <div className="flex gap-1 mb-1">
            <FaCar color="red" className="mt-1" />
            <p style={{ display: on ? "none" : "block" }} className="relative">
              Select PickUp Date
            </p>
          </div>
          <input
            style={{ opacity: on ? 0 : 1 }}
            className="relative border-[#bebeb6] bg-[#bebeb6] rounded-md border-[2px] pt-1 pr-[180px] pl-1"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="ml-[90px] mt-[20px] ">
          <div className="flex gap-1 mb-1">
            <FaCar color="red" className="mt-1" />
            <p style={{ display: on1 ? "none" : "block" }} className="relative">
              Select Drop Date
            </p>
          </div>
          <input
            style={{ opacity: on1 ? 0 : 1 }}
            className="relative bg-[#bebeb6] rounded-md border-[2px] pt-1 pr-[180px] pl-1"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="flex">
          <button
            style={{
              opacity: on2 ? 0 : 1,
              boxShadow: "-1px 2px 13px 8px rgba(0,0,0,0.2)",
            }}
            className="relative ml-[90px] pl-[180px]  hover:bg-red-500 bg-red-600 rounded-md border-[2px]  pr-[180px] pt-2  text-white mx-auto mt-[50px]"
          >
            <span className="m-auto">Done</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
