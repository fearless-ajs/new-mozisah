import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/Ejiro.jpg";
import img2 from '../assets/ClarenceOtis.jpeg'
import img3 from '../assets/ceo.png'
import img4 from '../assets/ceo2.jpeg'
import img5 from '../assets/ceo3.jpeg'
import img6 from '../assets/Airtel-Ogunsanya-Group-CEO-Airtel-Africa-483x598.jpeg'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

export default function Testimonial() {useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  return (
    <Swiper className="px-4 "
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <SwiperSlide >
        <div className="flex flex-col md:flex-row justify-between items-center   bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md" data-aos-duration="2000"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic">
          <div >
 
          <img src={img6} alt="" className="rounded-full  object-cover w-40 h-40 mb-16 md:mb-0" data-aos-duration="2000"
      data-aos="fade-in"/>
          </div>
          <div className=" md:w-[400px]">

          <p className="leading-8 italic text-purple-950" data-aos-duration="2000"
      data-aos="fade-left">
            "Mozisha's services exceeded our expectations. Their team is highly
            skilled and professional."
          </p>
          <p className="text-sm text-purple-900 mt-8" data-aos-duration="2000"
      data-aos="fade-right">John Doe</p>
          <p className="text-[12px] text-purple-400 mt-8" data-aos-duration="2000"
      data-aos="zoom-in">Artejiro investments</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="flex flex-col md:flex-row justify-between items-center   bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md" data-aos-duration="2000"
       data-aos="flip-left"
       data-aos-easing="ease-out-cubic">
          <div >
 
          <img src={img} alt="" className="rounded-full  object-cover w-40 h-40 mb-16 md:mb-0" data-aos-duration="2000"
      data-aos="fade-in"/>
          </div>
          <div className=" md:w-[400px]">

          <p className="leading-8 italic text-purple-950" data-aos-duration="2000"
      data-aos="fade-left">
             "Mozisha's services exceeded our expectations. Their team is highly skilled and professional."
          </p>
          <p className="text-sm text-purple-900 mt-8" data-aos-duration="2000"
      data-aos="fade-right">John Doe</p>
          <p className="text-[12px] text-purple-400 mt-8" data-aos-duration="2000"
      data-aos="zoom-in">Artejiro investments</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="flex flex-col md:flex-row justify-between items-center   bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md" data-aos-duration="2000"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic">
          <div >
 
          <img src={img5} alt="" className="rounded-full  object-cover w-40 h-40 mb-16 md:mb-0" data-aos-duration="2000"
      data-aos="fade-in"/>
          </div>
          <div className=" md:w-[400px]">

          <p className="leading-8 italic text-purple-950" data-aos-duration="2000"
      data-aos="fade-left">
            "Working with Mozisha has been a game-changer for our business. 
          </p>
          <p className="text-sm text-purple-900 mt-8" data-aos-duration="2000"
      data-aos="fade-right">John Doe</p>
          <p className="text-[12px] text-purple-400 mt-8" data-aos-duration="2000"
      data-aos="zoom-in">Artejiro investments</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="flex flex-col md:flex-row justify-between items-center   bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md" data-aos-duration="2000"
       data-aos="flip-left"
       data-aos-easing="ease-out-cubic">
          <div >
 
          <img src={img4} alt="" className="rounded-full  object-cover w-40 h-40 mb-16 md:mb-0" data-aos-duration="2000"
      data-aos="fade-in"/>
          </div>
          <div className=" md:w-[400px]">

          <p className="leading-8 italic text-purple-950" data-aos-duration="2000"
      data-aos="fade-left">
            "Mozisha's services exceeded our expectations. Their team is highly
            skilled and professional."
          </p>
          <p className="text-sm text-purple-900 mt-8" data-aos-duration="2000"
      data-aos="fade-right">John Doe</p>
          <p className="text-[12px] text-purple-400 mt-8" data-aos-duration="2000"
      data-aos="zoom-in">Artejiro investments</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="flex flex-col md:flex-row justify-between items-center   bg-purple-200 my-32 md:w-[800px] mx-auto p-16 rounded-md" data-aos-duration="2000"
       data-aos="flip-left"
       data-aos-easing="ease-out-cubic">
          <div >
 
          <img src={img3} alt="" className="rounded-full  object-cover w-40 h-40 mb-16 md:mb-0" data-aos-duration="2000"
      data-aos="fade-in"/>
          </div>
          <div className=" md:w-[400px]">

          <p className="leading-8 italic text-purple-950" data-aos-duration="2000"
      data-aos="fade-left">
            "Mozisha's services exceeded our expectations. Their team is highly
            skilled and professional."
          </p>
          <p className="text-sm text-purple-900 mt-8" data-aos-duration="2000"
      data-aos="fade-right">John Doe</p>
          <p className="text-[12px] text-purple-400 mt-8" data-aos-duration="2000"
      data-aos="zoom-in">Artejiro investments</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
