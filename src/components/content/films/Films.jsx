import React from "react";
import axios from "axios";

import { setActive } from "../../../redux/slices/filmsSlice";

import unliked from '../../../assets/img/unliked.png'
import liked from '../../../assets/img/liked.svg'

import Popup from "./Popup";
import { useDispatch } from "react-redux";


const Films = (obj) => {
  const dispatch = useDispatch()
  const [isAdded, setIsAdded] = React.useState(false);
  

    const onClickActive = (action) => {
        dispatch(setActive(action))
    }

    const postFavorite = (obj) => {
      axios.post(`https://63591e97ff3d7bddb99970b9.mockapi.io/favorite`, {
        ...obj,
      })
    }

    const onClickFav = (obj) => {
      postFavorite(obj)
      setIsAdded(!isAdded);
    }

  return (
    <div className="box_film">
      <img src={obj.imageUrl} alt="картинка"></img>
      <h1>{obj.title}</h1>
      <button onClick={(action) => onClickActive(action)}>
        Watch
      </button>
      <img 
        onClick={() => onClickFav(obj)} 
        className="liked" 
        src={isAdded ? liked : unliked}
        alt="В Избранное">
      </img> 
      <Popup onClickActive={onClickActive}/>
    </div>
  );
};

export default Films;
