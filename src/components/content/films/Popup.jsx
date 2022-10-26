import React from 'react'
import './popup.scss'
import { useSelector } from 'react-redux'

export const Popup = ({onClickActive}) => {
  const {active} = useSelector(state => state.films);
  return (
    <div onClick={event => onClickActive(event.selected)} className={active ? "active modal" : 'modal'}>
        <div onClick={e => e.stopPropagation()} className='contentik'></div>
    </div>
  )
}

export default Popup;
