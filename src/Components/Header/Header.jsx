import img1 from "../../assets/34.jpg";
import img2 from '../../assets/thailand.jpg'
import img3 from "../../assets/sundarban.jpg";
import img4 from "../../assets/Saint.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Header = () => {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      <SwiperSlide>
      <div className="w-full my-10"><img className="w-full h-auto rounded"  src={img1}/></div> 
      </SwiperSlide>
      <SwiperSlide>  <div className="w-full my-10"><img className="w-full h-auto rounded"  src={img2}/></div> </SwiperSlide>
      <SwiperSlide>
      <div className="w-full my-10"><img className="w-full h-auto rounded"  src={img3}/></div> 
      </SwiperSlide> 
      <SwiperSlide>
      <div className="w-full my-10"><img className="w-full h-auto rounded" src={img4}/></div> 
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
