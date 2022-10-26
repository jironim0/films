import React from "react";
import "../allFilm.css";

import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const SwiperTop = ({items}) => {
  useEffect(() => {
    console.dir(items)
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          items.map(film => <SwiperSlide>{film.title}</SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default SwiperTop
