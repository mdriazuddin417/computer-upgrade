import React from "react";
import img1 from "../../../assets/image/carosul1.jpg";
import img2 from "../../../assets/image/carosul2.jpg";
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
    >
      <SwiperSlide className="h-[70vh]">
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="h-[70vh]">
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="h-[70vh]">
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="h-[70vh]">
        <img src={img2} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
