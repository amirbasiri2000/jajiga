import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  children: React.ReactNode; 
}

const UseSwiper = ({ children }: Props) => {
  return (
    <Swiper
      className=""
      paginationWidth={10}
      centeredSlidesDesk={true}
      // slidesPerView={6}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      pagination={true}
      // pagination={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
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
export default UseSwiper;
