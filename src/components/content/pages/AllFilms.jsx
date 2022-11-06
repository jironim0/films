import React from 'react'
import Films from '../films/Films'
import SwiperTop from '../swiperSlide/SwiperTop'

import {setFilm} from '../../../redux/slices/filmsSlice'
import { useDispatch, useSelector } from 'react-redux'

export const AllFilms = (obj) => {
  const dispatch = useDispatch()
  const {arrFilm} = useSelector(state => state.films)
  
  React.useEffect(() => {
    dispatch(setFilm());
  }, [dispatch]);

  return (
    <div className="top--slider">
      <SwiperTop />      
      <div className='film_wrapp'>
        {arrFilm?.map((obj) => <Films {...obj}/>)}
      </div>
    </div>
  )
}

export default AllFilms