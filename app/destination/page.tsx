"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { destination } from "../utils/utils";
import jsonData from "../../public/starter-code/data.json";
import { useState } from "react";

const Destination = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <section className="w-full min-h-screen pb-12 bg-dest-mobile bg-no-repeat bg-center bg-cover text-white">
      <Navbar />
      <div className="w-10/12 mx-auto text-center relative">
        <h4 className=" tracking-widest font-barlow my-4 md:mb-8 md:text-start md:text-[20px] lg:tracking-[4.8px]">
          <span className=" font-bold opacity-25 mr-1 tracking-widest">01</span>{" "}
          PICK YOUR DESTINATION
        </h4>
        <div className=" text-center ">
          <div className="flex font-barlow text-sm lg:text-base gap-4 md:gap-8 absolute top-[260px] md:top-[490px] left-1/2 lg:left-[78%] xl:left-[70%] lg:top-[100px] transform  -translate-x-1/2 ">
            {jsonData.destinations.map((dest, index) => (
              <h4
                className={` uppercase cursor-pointer ${
                  index == tabIndex ? "text-white border-b-2" : "text-secondary"
                }`}
                key={index}
                onClick={() => setTabIndex(index)}
              >
                {dest.name}
              </h4>
            ))}
          </div>
          {jsonData.destinations.map((dest, index) => (
            <div key={index} className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20 justify-items-center">
              {index == tabIndex && (
                <Image
                  className=" md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                  src={dest.images.png}
                  alt={dest.name}
                  width={200}
                  height={200}
                />
              )}
              {index == tabIndex && (
                <div className="lg:text-start lg:px-16 lg:w-[6/12] lg:mx-auto">
                  <div className="mt-12 md:mt-16">
                    <h2 className="font-bellefair uppercase text-[56px] lg:text-[100px] ">{dest.name}</h2>
                    <p className="text-secondary text-[15px] md:w-10/12 lg:w-full md:mx-auto">
                      {dest.description}
                    </p>
                  </div>
                  <div className="w-full md:w-10/12 lg:w-full md:mx-auto bg-[#383B4B] h-[0.5px] my-6 md:my-10"></div>
                  <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-4 md:gap-12">
                    <div>
                      <p className=" font-barlow text-sm text-secondary tracking-widest">
                        AVG. DISTANCE
                      </p>
                      <h3 className="text-[28px] font-bellefair text-white uppercase">
                        {dest.distance}
                      </h3>
                    </div>
                    <div>
                      <p className=" font-barlow text-sm text-secondary tracking-widest">
                        Est. travel time
                      </p>
                      <h3 className="text-[28px] font-bellefair text-white uppercase">
                        {dest.travel}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* {destination.map((dest, index)=>(
            <div key={index}>
              
              <div>
                {index == 0 && <h4>{dest.name}</h4>}
              
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Destination;
