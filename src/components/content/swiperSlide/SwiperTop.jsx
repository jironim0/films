import React from "react";
import "./swiper.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { useSelector } from "react-redux";

const SwiperTop = () => {
  const { arrFilm } = useSelector(state => state.films)

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
          arrFilm?.filter(function(arrFilm){if (arrFilm.rating > 5){return arrFilm}}).map(obj => <SwiperSlide>
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
