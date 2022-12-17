import { SwiperSlide } from "swiper/react";
import CardMD from "../common/Card_md";
import UseSwiperMD from "../hooks/UseSwiperMD";

const BestRooms = () => {
  return (
    <div>
      <div className="max-w-[1120px] h-auto mx-auto mt-10">
        <h2 className="text-lg font-bold text-[#252a31]">
          اقامتگاه های ممتاز{" "}
        </h2>
        <span className="py-2 text-[14px] mb-4">
          گلچینی از اقامتگاه های با کیفیت
        </span>
        <br /><br />
        <UseSwiperMD>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <SwiperSlide key={index}>
              <CardMD />
            </SwiperSlide>
          ))}
        </UseSwiperMD>
      </div>
    </div>
  );
};

export default BestRooms;
