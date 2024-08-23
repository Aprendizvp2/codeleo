import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Home() {
  return (
    <div id="home" className="h-screen">
      <Swiper
        loop={true}
        centeredSlides={true}
        draggable={false}
        allowTouchMove={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover brightness-[0.4]"
              src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-1200-80.jpg"
              alt="Web Frontend Developer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center zoom-fade-in">
              <p className="text-shadow text-2xl md:text-4xl font-semibold text-white">
                Hi, I'm Leandro
              </p>
              <h1 className="text-shadow text-3xl md:text-6xl font-bold text-red-600">
                Web Frontend Developer
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover brightness-[0.4]"
              src="https://offing.es/wp-content/uploads/2020/12/desarrollo-app-movil-articulo.jpg"
              alt="React Native Developer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center zoom-fade-in">
              <p className="text-shadow text-2xl md:text-4xl font-semibold text-white">
                Hi, I'm Leandro
              </p>
              <h1 className="text-shadow text-3xl md:text-6xl font-bold text-red-600">
                React Native Developer
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
