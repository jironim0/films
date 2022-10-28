import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActive, setFavoriteItems } from "../../../redux/slices/filmsSlice";
import unliked from '../../../assets/img/unliked.png'
import liked from '../../../assets/img/liked.svg'

import Popup from "./Popup";


const Films = ({title, imageUrl, id}) => {
  const dispatch = useDispatch()
  

    // const [active, setActive] = React.useState(false)
  const [isAdded, setIsAdded] = React.useState(false);

    const onClickActive = (action) => {
        dispatch(setActive(action))
    }

    const onClickFav = (obj) => {
      dispatch(setFavoriteItems({imageUrl, title}));
      setIsAdded(!isAdded);
      console.log(obj)
    }

    
  return (
    <div className="box_film">
      <img src={imageUrl} alt="картинка"></img>
      <h1>{title}</h1>
      <button onClick={(action) => onClickActive(action)}>
        Watch
      </button>
      <img 
        onClick={() => onClickFav({title, imageUrl, id})} 
        className="liked" 
        src={isAdded ? liked : unliked}
        alt="В Избранное">
      </img> 
      <Popup onClickActive={onClickActive}/>
    </div>
  );
};

export default Films;
