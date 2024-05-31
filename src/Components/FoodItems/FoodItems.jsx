import React from 'react'
import { IoAddCircle } from 'react-icons/io5'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import './FoodItems.css'

const FoodItems = ({name,image,price,description,category}) => {
  return (
    <main className='header'>
      <div Card="card mb-3 h-100">
        <div className='card-image-top'>
        <div className='text-end'>
          <img src={image}  className="card-img-top" alt="..." />
          <div className='contIcon' type='button'>
                <IoAddCircle  className='icone fs-4'/>
         </div>
         </div>
          <div className="card-body">
            <div className='hstrack align-items-center d-flex'>
              <h5 className='Card-title'>{name}</h5>
              <p style={{fontWeight:"bold"}} className='card-text fs-5 ms-auto'>
                <FaStar color='red'/>
                <FaStar color='red'/>
                <FaRegStar />
              </p>
            </div>
            </div>
            <p className="card-text fs-6">{description}</p>
            <div className='hstrack align-items-center d-flex'>
                <p className='card-text fs-6 text-danger'>{price} FCFa</p>
                <p style={{fontWeight:'bold'}} className='card-text mb-3 fs-6 ms-auto'>{category}</p>
                <span onClick={()=>addMenu(Menu.id)} className='fs-4 text-success' role='button'>
            </span>
            </div>
            </div>
          </div>
     </main>
  )
}

export default FoodItems