import React from 'react'
import Films from './films/Films'
import SwiperTop from './films/SwiperTop'


export const AllFilms = ({items, onClickLike, isAdded, onAddFavorite}) => {


  return (
    <div className="top--slider">
      <SwiperTop items={items}/>      
      <div className='film_wrapp'>
          {
          items.map((obj, index) => <Films key={index} {...obj} onClickLike={onClickLike} isAdded={isAdded} onAddFavorite={onAddFavorite}/>) 
          }
      </div>
    </div>
  )
}

export default AllFilms