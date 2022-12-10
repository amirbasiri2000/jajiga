import CardSM from "../common/Card_sm";
import { Popular_ser } from "../../utils/types";
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import UseSwiperGrid from "../hooks/UseSwiper_Grid";

interface Props {
  Items: Popular_ser[];
}

const PopularItem = ({ Items }: Props) => {
 
  return (
    <div className="max-w-[1120px] h-auto mx-auto mt-10">
      <h2 className="text-lg font-bold text-[#252a31]">مقاصد پرطرفدار</h2>
      <UseSwiperGrid>
        {Items.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-row">
            <CardSM key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </UseSwiperGrid>
    </div>

    // <div className="flex flex-wrap">
    //   {Items.map((item) => (
    //     <CardSM key={item.id} item={item} />
    //   ))}
    // </div>
  );
};

export default PopularItem;
