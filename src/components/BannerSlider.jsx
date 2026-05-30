// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const BannerSlider = () => {
//   return (
//     <Swiper
//       modules={[Autoplay, Pagination, EffectFade]}
//       autoplay={{ delay: 15000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       effect="fade"
//       loop={true}
//     >
//       <SwiperSlide>
//         {/* Desktop Image */}
//         <img
//           src="/Fitness-Trainer-in-Hyderabad.webp"
//           alt="Fitness Trainer Hyderabad"
//           className="w-full hidden lg:block"
//           fetchpriority="high"
//           width="1920"
//           height="1079"
//           style={{ display: "block" }}
//         />
//         {/* Mobile Image */}
//         <img
//           src="/Personal-Trainer-near-me-in-Hyderabad.webp"
//           alt="Fitness Trainer Hyderabad"
//           className="w-full lg:hidden"
//           fetchpriority="high"
//           width="900"
//           height="1800"
//           style={{ display: "block" }}
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default BannerSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// simple hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const BannerSlider = () => {
  const isMobile = useIsMobile();

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{ delay: 15000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="fade"
      loop={true}
    >
      <SwiperSlide>
        {isMobile ? (
          <img
            src="/Personal-Trainer-near-me-in-Hyderabad.webp"
            alt="Fitness Trainer Hyderabad Mobile"
            className="w-full"
            width="900"
            height="1800"
          />
        ) : (
          <img
            src="/Fitness-Trainer-in-Hyderabad.webp"
            alt="Fitness Trainer Hyderabad Desktop"
            className="w-full"
            width="1920"
            height="1079"
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;