import React from 'react'
import { FaStar , FaRegStar} from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import  './css/Card.css'
import { shopCard } from '../../Store';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';




export default function Card({produit}) {
  
    const addProduits = shopCard((state) => state.addProduit)
    const CARD = shopCard((state) => state.CARD)




    function addProduit(_id) {

    let isexist= CARD.findIndex(item=>item.id === _id)
    if(isexist=== -1){
        addProduits(produit)
    }else{
        toast.info("ce produit existe deja")
    }
  }

  

  return (
    <section className='container'>
      <div Card="card mb-3 h-100">
        <div className='text-end'>
          <Link to={`/produit/${produit.id}`}> <img src={produit.image}  className="card-img-top" alt="..." /></Link>
          <span className='contIcon' onClick={()=>addProduit(produit.id)} role='button'>
                <IoIosAddCircle  className='icone fs-4'/>
          </span>
        </div>
        
          <div className="card-body">
            <div className='hstrack align-items-center d-flex'>
              <h5 className='Card-title'>{produit.name}</h5>
              <p style={{fontWeight:"bold"}} className='card-text fs-5 ms-auto'>
                <FaStar color='red'/>
                <FaStar color='red'/>
                <FaRegStar />
              </p>
            </div>
            </div>
            <p className="card-text fs-6">{produit.description}</p>
            <div className='hstrack align-items-center d-flex'>
                <p className='card-text fs-6 text-danger'>{produit.price} FCFa</p>
                <p style={{fontWeight:'bold'}} className='card-text mb-3 fs-6 ms-auto'>{produit.category}</p>
                <span className='fs-4 text-success' role='button'>
            </span>
            </div>
            
          </div>
     </section>
)
}
