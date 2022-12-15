import { Grid, Pagination, Autoplay } from "swiper";
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
      grid={{
        rows: 2,
      }}
      slidesPerView={4}
      autoplay={{ delay: 3000 }}
      loop
      pagination={false}
      // pagination={true}
      navigation={true}
      modules={[Autoplay, Grid, Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }}
      // breakpoints={{
      //   0: {
      //     // Mobile M
      //     slidesPerView: 1,
      //   },
      //   370: {
      //     // Mobile L
      //     slidesPerView: 1,
      //   },
      //   570: {
      //     // Tablet
      //     slidesPerView: 2,
      //   },
      //   760: {
      //     // LapTop
      //     slidesPerView: 4,
      //   },
      //   1280: {
      //     // Desktop
      //     slidesPerView: 5,
      //   },
      // }}
    >
      {children}
    </Swiper>
  );
};
export default UseSwiperGrid;
