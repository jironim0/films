import React from 'react'
import Films from '../films/Films'
import SwiperTop from '../swiperSlide/SwiperTop'


export const AllFilms = ({items, onClickLike, isAdded, onAddFavorite, id}) => {



  return (
    <div className="top--slider">
      <SwiperTop items={items}/>      
      <div className='film_wrapp'>
          {
          items.map((obj) => <Films {...obj} onClickLike={onClickLike} isAdded={isAdded} onAddFavorite={onAddFavorite}/>) 
          }
      </div>
    </div>
  )
}

export default AllFilms