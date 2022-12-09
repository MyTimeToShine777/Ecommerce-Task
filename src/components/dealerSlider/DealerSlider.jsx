import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./dealer.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const DealerSlider = () => {
  return (
    <div className="container">
      <h6 style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
        AUTHORIZED DEALER
      </h6>
      <div>
        <hr style={{ padding: "10px" }} />
      </div>
      <Swiper
        slidesPerView={4}
        navigation={true}
        spaceBetween={0}
        loop={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://sriganesanfurniture.com/wp-content/uploads/2019/01/repose.jpg"
            alt=""
            className="dealer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://sriganesanfurniture.com/wp-content/uploads/2019/01/godrej-2.jpg"
            alt=""
            className="dealer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://sriganesanfurniture.com/wp-content/uploads/2019/01/Repose.jpg"
            alt=""
            className="dealer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://sriganesanfurniture.com/wp-content/uploads/2019/01/03.jpg"
            alt=""
            className="dealer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DealerSlider;
