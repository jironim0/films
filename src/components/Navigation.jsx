import React from 'react'
import { Link } from "react-router-dom";


export const Navigation = () => {
  return (
    <div className='navigation'>
        <ul>
            <Link to="/allfilms"><li>All Films</li></Link>
            <Link to="/favorite"><li>Favorite Films</li></Link>
          <li>LogOut</li>
        </ul>
      </div>
  )
}

export default Navigation;
