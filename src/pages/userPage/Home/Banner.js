import React from "react";
import img1 from "../../../assets/image/bg_1.jpg";
import img2 from "../../../assets/image/bg_4.jpg";
import img3 from "../../../assets/image/bg_3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ autoplay: true }}
      className="h-[80vh]"
    >
      <SwiperSlide className="">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div class="hero-overlay bg-opacity-20"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md bg-[#587de2] bg-opacity-50 p-5 rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-2xl">
              <h1 class="mb-5 text-5xl font-bold">Power supply</h1>
              <p class="mb-5">
                A power supply unit (PSU) converts alternating current (AC)
                electric power to low-voltage direct current (DC) power for the
                computer. Laptops can run on built-in rechargeable battery
              </p>
              <a
                target={"_blank"}
                href="https://en.wikipedia.org/wiki/Power_supply_unit_(computer)"
              >
                {" "}
                <button class="btn  btn-warning">Visit site</button>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <div class="hero-overlay bg-opacity-20"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md  bg-[#23baf5] bg-opacity-50 p-5 rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-2xl">
              <h1 class="mb-5 text-5xl font-bold">Departmental computing</h1>
              <p class="mb-5">
                In the 1960s and 1970s, more and more departments started to use
                cheaper and dedicated systems for specific purposes like process
                control and laboratory automation.
              </p>
              <a
                target={"_blank"}
                href="https://en.wikipedia.org/wiki/Minicomputer"
              >
                <button class="btn  btn-primary">Visit site</button>
              </a>{" "}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <div class="hero-overlay bg-opacity-20"></div>
          <div class="hero-content text-center text-black">
            <div class="max-w-md  bg-white bg-opacity-50 p-5 rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-2xl">
              <h1 class="mb-5 text-5xl font-bold ">Mainframe computer</h1>
              <p class="mb-5">
                A mainframe computer is a much larger computer that typically
                fills a room and may cost many hundreds or thousands of times as
                much as a personal computer. They are designed to perform large
                numbers of calculations for governments and large enterprises.
              </p>
              <a
                target={"_blank"}
                href="https://en.wikipedia.org/wiki/Mainframe_computer"
              >
                <button class="btn  btn-success">Visit site</button>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
