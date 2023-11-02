import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.css";

const images = [
  "/basicSlider/majo001.jpg",
  "/basicSlider/majo002.jpg",
  "/basicSlider/majo005.jpg",
  "/basicSlider/majo006.jpg",
  "/basicSlider/majo010.jpg",
  "/basicSlider/majo014.jpg",
  "/basicSlider/majo018.jpg",
  "/basicSlider/majo050.jpg",
];

export default function BasicSlider() {
  const slidesPerView = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slidesPerView}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className={styles.slideWrapper}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={1920}
            height={1038}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={styles.slideImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
