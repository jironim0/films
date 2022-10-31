import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, getFavorites, deleteFavorite } from "../../../redux/slices/filmsSlice";
import "./favorite.scss";

import Popup from "../films/Popup";

export const Favorite = () => {
  const dispatch = useDispatch();
  const { favoritItems, status, error } = useSelector((state) => state.films);

  React.useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const onClickActive = (action) => {
    dispatch(setActive(action));
  };

  return (
    <div className="profile">
      <ul className="favorite__list" key={Number()}>
        {status === "loading" && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {favoritItems?.map((obj) => (
          <li className="favorite__item">
            <div className="favorite__img-container">
              <img
                className="favorite__img"
                src={obj.imageUrl}
                alt="картинка"
              ></img>
            </div>
            <h1 className="favorite__title">{obj.title}</h1>
            <div className="favorite__actions_container">
              <button
                className="favorite__button"
                onClick={(action) => onClickActive(action)}
              >
                Watch
              </button>
              <img
                onClick={() => deleteFavorite(obj.id)}
                className="favorite__button favorite__img-delete"
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
