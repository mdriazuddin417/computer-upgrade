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
        <img src={img1} alt="w-full" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img src={img2} alt="w-full" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img src={img3} alt="w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
