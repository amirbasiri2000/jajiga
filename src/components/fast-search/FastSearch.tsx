import React from "react";
import CardLG from "../common/Card_lg";
import UseSwiper from "../hooks/UseSwiper";
import { Swiper, SwiperSlide } from "swiper/react";

const FastSearch = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="max-w-[1120px] mx-auto mt-14">
      <h2 className="text-lg font-bold text-[#252a31] mb-4"> جستوجوی سریع </h2>
      <UseSwiper>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <SwiperSlide key={index}>
            <CardLG />
          </SwiperSlide>
        ))}
      </UseSwiper>
    </div>
  );
};

export default FastSearch;
