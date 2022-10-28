import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setDeleteFavorite } from "../../../redux/slices/filmsSlice";
import "./favorite.scss";

import Popup from "../films/Popup";

export const Favorite = () => {
  const items = useSelector((state) => state.films.favoritItems);
  const dispatch = useDispatch();

  console.log(items);

  const onClickActive = (action) => {
    dispatch(setActive(action));
  };

  return (
    <div className="profile">
      <ul className="favorite__list">
        {items?.map((obj, id) => (
          <li className="favorite__item">
            <div className="favorite__img-container">
              <img
                className="favorite__img"
                src={obj.favorit.imageUrl}
                alt="картинка"
              ></img>
            </div>
            <h1 className="favorite__title">{obj.favorit.title}</h1>
            <div className="favorite__actions_container">
              <button
                className="favorite__button"
                onClick={(action) => onClickActive(action)}
              >
                Watch
              </button>
              <img
                className="favorite__button favorite__img-delete"
                onClick={() => dispatch(setDeleteFavorite({ id }))}
                src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38.png"
                alt="Delete"
              ></img>
            </div>
            <Popup onClickActive={onClickActive} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
