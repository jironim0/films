import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../redux/slices/filmsSlice";

import Popup from "./films/Popup";

export const Favorite = () => {
  const  items = useSelector(state => state.films.favoritItems)
  const dispatch = useDispatch()

  console.log(items)

  const onClickActive = (action) => {
    dispatch(setActive(action))
}

  return (
    <div className="profile">
      {items?.map((obj) => (
        <div className="box_film">
          <img src={obj.imageUrl} alt="картинка"></img>
          <h1>{obj.title}</h1>
          <button onClick={(action) => onClickActive(action)}>
          Watch
          </button>
          <Popup onClickActive={onClickActive} />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
