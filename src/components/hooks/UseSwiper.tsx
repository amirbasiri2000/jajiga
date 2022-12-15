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
      // paginationWidth={10}
      // centeredSlidesDesk={true}
      // slidesPerView={6}
      centeredSlides={false}
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
          slidesPerView: 1,
        },
        570: {
          // Tablet
          slidesPerView: 2,
        },
        760: {
          // LapTop
          slidesPerView: 3,
        },
        1280: {
          // Desktop
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
export default UseSwiper;
