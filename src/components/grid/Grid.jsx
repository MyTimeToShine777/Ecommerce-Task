import React from "react";
// Import Swiper React components
import Cards from "../card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./grid.scss";

// import required modules
import { Grid, FreeMode, Navigation, Mousewheel, Keyboard } from "swiper";

const Grids = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "3 SEATERS WODDERN SOFA SET",
      p: "5 PRODUCTS",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "TABLE",
      p: "6 PRODUCTS",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4203100/pexels-photo-4203100.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "CHAIR",
      p: "2 PRODUCTS",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "3 SEATERS WODDERN SOFA SET",
      p: "5 PRODUCTS",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "TABLE",
      p: "6 PRODUCTS",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/4203100/pexels-photo-4203100.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "CHAIR",
      p: "2 PRODUCTS",
    },
  ];
  return (
    <div className="container">
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 3,
          fill: "row",
        }}
        navigation={true}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Grid, Navigation, FreeMode, Mousewheel, Keyboard]}
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

export default Grids;
