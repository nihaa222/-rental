import { useState } from "react";
import { AiFillForward } from "react-icons/ai";
const Model = [
  {
    id: 1,
    name: "Audi A1 S-Line",
    Model: "Audi",
    Mark: "A1",
    Year: "2002",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline",
    rent: "$37",
    image: "car1.png",
  },
  {
    id: 2,
    name: "VW Golf 6",
    Model: "Golf 6",
    Mark: "Volkswagen",
    Year: "2008",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Disel",
    rent: "$40",
    image: "golf.png",
  },
  {
    id: 3,
    name: "Toyoto Camry",
    Model: "Camry",
    Mark: "Toyota",
    Year: "2008",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Hybrid",
    rent: "$60",
    image: "toyoto.png",
  },

  {
    id: 4,
    name: "Mercedes-BenzGLK",
    Model: "Benz Glk",
    Mark: "Mercedes",
    Year: "2006",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Disel",
    rent: "$35",
    image: "mers.png",
  },
  {
    id: 5,
    name: "BMW 320 ModernLine",
    Model: "320",
    Mark: "BMW",
    Year: "2002",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Disel",
    rent: "$55",
    image: "last.png",
  },
  {
    id: 6,
    name: "VW Passat CC",
    Model: "Passat CC",
    Mark: "Volkswagan",
    Year: "2007",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Gasoline",
    rent: "$25",
    image: "passcat-removebg-preview.png",
  },
];

const Models = () => {
  const [selectedId, setSelectedId] = useState(Model[0].id);

  return (
    <>
      <div className="flex  gap-7 flex-col justify-center items-center lg:ml-64 mt-[200px] mr-64 ">
        <div>
          <p className="ml-[90px] mb-3 font-bold text-[15px]">Vehicle Models</p>
          <h1 className="font-bold ml-[-4px] text-[40px]">Our rental fleet</h1>
          <p className="text-[12px] ml-[-50px] mt-2">
            Choose from a variety of our amazing vehicles to rent for your next
          </p>
          <p className="text-[12px] ml-[50px] "> adventure or business trip</p>
        </div>
      </div>

      <div className="flex gap-[80px] relative">
        <div className="mt-[90px] lg:ml-64 ">
          {Model.map((car) => (
            <div
              key={car.id}
              onClick={() => setSelectedId(car.id)}
              className={`border-4 p-4 bg-green-50 transition duration-300 ease-in-out transform hover:bg-red-600 ${
                selectedId === car.id ? "border-red-500" : ""
              }`}
            >
              {car.name}
            </div>
          ))}
        </div>

        <div className="mt-[90px] ">
          {selectedId && (
            <img
              key={selectedId}
              src={Model.find((car) => car.id === selectedId).image}
              alt={`Selected car`}
              className="h-[400px] w-[800px] "
            />
          )}
        </div>
        <div className="">
          <div className="border-4 p-4 w-[260px] h-[60px] transition text-white duration-300 ease-in-out transform bg-red-600 ">
            {selectedId && (
              <>
                <p>
                  {Model.find((car) => car.id === selectedId).rent} / rent per
                  day{" "}
                </p>
              </>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[40px]">
                <span className="flex gap-4 items-center">
                  Model <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).Model}</span>
              </p>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[40px]">
                <span className="flex gap-5 items-center">
                  Mark <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).Mark}</span>
              </p>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[40px]">
                <span className="flex gap-5 items-center">
                  Year <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).Year}</span>
              </p>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[40px]">
                <span className="flex gap-3 items-center">
                  Doors <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).Doors}</span>
              </p>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[20px]">
                <span className="flex gap-9 items-center">
                  AC <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).AC}</span>
              </p>
            )}
          </div>
          <div className="border-4 text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[10px]">
                <span className="flex gap-4 items-center">
                  Transmission <AiFillForward />
                </span>
                <span>
                  {Model.find((car) => car.id === selectedId).Transmission}
                </span>
              </p>
            )}
          </div>
          <div className="border-4 relative text-black p-4 w-[260px] h-[60px] transition duration-300 ease-in-out transform  hover:bg-red-600 bg-green-50 ">
            {selectedId && (
              <p className="flex gap-[40px]">
                <span className="flex gap-9 items-center">
                  Fuel <AiFillForward />
                </span>
                <span>{Model.find((car) => car.id === selectedId).Fuel}</span>
              </p>
            )}
          </div>
          <div className="border-4 absolute top-[510px] pt-2 text-black hover:bg-red-500  w-[260px] h-[60px] transition text-white duration-300 ease-in-out transform bg-red-600 bg-green-50 ">
            <p className="text-white pl-9 text-[25px] text-center">
              RESERVE NOW
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pt-7 pb-10 h-[180px] w-full mt-[250px]">
        <p className="text-white  text-[60px] text-center">
          {" "}
          Save Big with our Cheap car rental!
        </p>
        <p className="text-white text-center">
          Top Airports Local Supplier.{" "}
          <span className="text-red-600">24/7</span> Support
        </p>
      </div>
      <div className="mt-[180px] ml-[300px] flex items-center">
        <img src="threecars-PhotoRoom.png-PhotoRoom.png"></img>
      </div>
    </>
  );
};

export default Models;
