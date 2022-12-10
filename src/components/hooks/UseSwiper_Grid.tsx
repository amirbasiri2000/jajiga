import { Grid, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  children: React.ReactNode;
}

const UseSwiperGrid = ({ children }: Props) => {
  return (
    <Swiper
      className=""
      grid={{
        rows: 2,
      }}
      // slidesPerView={6}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      pagination={false}
      // pagination={true}
      navigation={true}
      modules={[Grid, Pagination]}
      breakpoints={{
        0: {
          // Mobile M
          slidesPerView: 1,
        },
        370: {
          // Mobile L
          slidesPerView: 2,
        },
        570: {
          // Tablet
          slidesPerView: 3,
        },
        760: {
          // LapTop
          slidesPerView: 4,
        },
        1280: {
          // Desktop
          slidesPerView: 5,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
export default UseSwiperGrid;
