import React, { useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import useReviews from "../../../hooks/useReviews";

const Reviews = () => {
  const [reviews, setReviwes] = useReviews();

  return (
    <div className="my-10">
      <h2 className="text-center mb-5">Client FeedBacks</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ autoplay: true }}
      >
        {reviews.slice(reviews.length - 6, reviews.length).map((review) => (
          <SwiperSlide className="py-10 ">
            <div className="card border bg-base-100 shadow-xl py-3">
              <div className="avatar flex justify-center items-center">
                <div className="w-1/5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.image} alt="" />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <p className="text-secondary">{review.name}</p>
                <p className="text-gray-500">{review.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
