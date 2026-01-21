// BannerSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules"; // removed Navigation

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner from "../assets/Fitness-Trainer-in-Hyderabad.jpg";
import banner1 from "../assets/nri-online-fitness-trainer.webp";
import mobileBanner from "../assets/india-best-online-fitness-trainer-for-weight-loss.webp";
import mobileBanner1 from "../assets/Personal-Trainer-near-me-in-Hyderabad.jpg";

const BannerSlider = () => {
  const slides = [
    { desktop: banner1, mobile: mobileBanner, alt: "Trainer 1" },
    { desktop: banner, mobile: mobileBanner1, alt: "Trainer 2" },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]} // removed Navigation
      autoplay={{ delay: 15000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="fade"
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* Desktop Image */}
          <img
            src={slide.desktop}
            alt={slide.alt}
            className="w-full hidden lg:block"
          />
          {/* Mobile Image */}
          <img
            src={slide.mobile}
            alt={slide.alt}
            className="w-full lg:hidden"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
