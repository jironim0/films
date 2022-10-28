import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setDeleteFavorite } from "../../../redux/slices/filmsSlice";

import Popup from "../films/Popup";

export const Favorite = () => {
  const  items = useSelector(state => state.films.favoritItems)
  const dispatch = useDispatch()

  console.log(items)

  const onClickActive = (action) => {
    dispatch(setActive(action))
  }

  

  return (
    <div className="profile">
      {items?.map((obj, id) => (
        <div className="box_film">
          <img src={obj.favorit.imageUrl} alt="картинка"></img>
          <h1>{obj.favorit.title}</h1>
          <button onClick={(action) => onClickActive(action)}>
          Watch
          </button>
          <img onClick={() => dispatch(setDeleteFavorite({id}))} src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38.png" alt="Delete"></img>
          <Popup onClickActive={onClickActive} />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
