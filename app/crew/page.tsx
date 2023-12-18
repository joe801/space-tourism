"use client";

import Navbar from "../components/Navbar";
import jsonData from "../../public/starter-code/data.json";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Animate from "../components/Animate";

const Crew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px", position: "absolute", top: "-100px" }}>
    //       {dots}
    //     </ul>
    //   </div>
    // ),
  };
  return (
    <Animate>
      <section className="w-full  h-full min-h-screen pb-12 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-center bg-cover text-white scroll-smooth">
     
        
        {/* <div className=" w-10/12 mx-auto pb-12">
          <h4 className=" text-center tracking-[2.7px] font-barlow my-4 md:mb-8 md:text-start md:text-[20px] lg:tracking-[4.8px]">
            <span className=" font-bold opacity-25 mr-1">02</span> MEET YOUR
            CREW
          </h4>
          <Slider {...settings} centerMode={false} className="">
            {jsonData.crew.map((crew, index) => (
              <div className="mt-4 text-center" key={index}>
                <div className=" border-b-2 border-[#383B4B]">
                  <Image
                    src={crew.images.png}
                    alt={crew.name}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <div>
                  <p className=" mt-4 font-bellefair uppercase text opacity-50">
                    {crew.role}
                  </p>
                  <p className="font-bellefair text-2xl uppercase">
                    {crew.name}
                  </p>
                  <p className="mt-4 text-secondary font-barlow">{crew.bio}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div> */}
      </section>
    </Animate>
  );
};

export default Crew;
