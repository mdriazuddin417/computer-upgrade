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
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-outline btn-info">Visit More</button>
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
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-outline btn-primary">Get Started</button>
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
              <h1 class="mb-5 text-5xl font-bold ">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn  btn-success">Visit site</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
