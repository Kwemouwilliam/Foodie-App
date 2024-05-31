import React, { useState } from 'react'
import './ExploreMenu.css'

export default function ExploreMenu({ menu_image, menu_name, category, showProducts }) {



  return (
    <div className='header'>
      <div className='Explore-Menu-img'>
        <img src={menu_image} alt="" onClick={() => showProducts(category)} />
        <p>{menu_name}</p>
      </div>
    </div>
  )
}
