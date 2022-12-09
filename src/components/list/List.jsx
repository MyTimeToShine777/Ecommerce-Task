import React from "react";

import Cards from "../card/Card";
import "./list.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const List = ({ data }) => {
  return (
    <div className="container ">
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, FreeMode, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Cards item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default List;
