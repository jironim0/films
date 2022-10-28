import React from "react";
import "./swiper.scss";

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
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          items.filter(function(items){if (items.rating > 5){return items}}).map(obj => <SwiperSlide>
            <div className="lil_box">
              <img src={obj.imageUrl} alt="картинка"></img>
              <h1>{obj.title}</h1>
            </div>

          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default SwiperTop
