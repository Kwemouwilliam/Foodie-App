import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBagShopping, FaPlus } from "react-icons/fa6";
import './css/Navbar.css'
import { shopCard } from '../../Store';
import { SlBasket } from "react-icons/sl";
import { CiSquareRemove } from 'react-icons/ci';
import { FaMinus } from 'react-icons/fa';

export default function Navbar() {

    const CARD = shopCard((state) => state.CARD)
    const uppdateProduit = shopCard((state) => state.uppdateProduit)
    const resetCARD = shopCard((state) => state.resetCARD)



    function removePro(id) {
      let restProd = CARD.filter(item => item.id !== id)
    
      uppdateProduit(restProd)
       
    }

    function removeQte(id) {
      let removeQte = CARD.map((item) =>{
        return(
         ( item.id === id && item.qte < 10)?
         (
          {
            ...item,
            qte: item.qte +1
          }
         ):(item)
        )
      })
      uppdateProduit(removeQte)
      }
      

      function addQte(id) {
        let addQte = CARD.map((item) =>{
          return(
           ( item.id === id && item.qte > 1)?
           (
            {
              ...item,
              qte: item.qte -1
            }
           ):(item)
          )
        })
      uppdateProduit(addQte)
        
      }


  return (
    <main className='logos'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">FOODIE</NavLink>
          <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center flex-grow-1 mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-link'}
                  to="/"
                >Home</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-link'}
                  to="/menu"
                >Menu</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-link'}
                  to="/contact"
                >Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className='navbar-right'>
            <a type="button" className="position-relative">
                <FaBagShopping className="fs-3 my-2" color='black' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"/>
                <span className="start-100 translate-middle badge rounded-pill bg-danger">
                  {CARD.length}
                </span>
            </a>
            <div class='Modal-Titre'>
              <button type="button" class="text-dark btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">log in</button>
              <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">S'inscrire</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div className="mb-3 p-2">
                          <input type="nom" class="form-control" id="exampleFormControlInput1" placeholder="Votre nom..." />
                          <div />
                          <div className="mb-3 pt-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre email..." />
                          </div>
                          <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Votre mot de passe..." />
                          </div>
                          <p className='text-center'>
                            Deja un compte? <a href="button" className='text-dark'>Se connecter</a>
                          </p>
                        </div>
                        <button type='submit' className='btn btn-secondary w-100'>Creer un compte</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Votre panier
    <span> <SlBasket /> </span></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
      <div class="offcanvas-body">
        <div className="container">
            {
            CARD.length === 0 ?
            (
              <h1 className="text-center">votre panier est vide</h1>
            )
            :
            (<>
           <div className="col">
                        <span className="fw-bold">
                                Total :{" "}
                                {
                                  CARD.reduce((somme, item) =>{

                                    return somme + ( item.qte * item.price )
                                  },0)
                                }{' '}FCFA
                          </span>
                </div>
                <button type="button" className="btn btn-primary my-3">Connecter Vous</button>
                    <section className="row d-flex justify-content-center">
                      <div className="col">
                      <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Item</th> 
                                <th scope="col">Titre</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Qte</th>
                                <th scope="col">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                CARD.map((item, index)=>{
                                  return(

                                    <tr key={index} >
                                      <td>
                                      <img src={`/${item.image}`} alt="" className='text-center'  width={50} height={40} />
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    
                                    <td>
                                        <div className="mini-container">
                                        <span role='button' onClick={()=>removeQte(item.id)} >
                                        <FaPlus className='btn btn-outline-primary fs-2'/>
                                        </span>
                                        <span>{item.qte}</span>
                                        <span role='button'  onClick={()=>addQte(item.id)}>
                                          <FaMinus className='btn btn-outline-secondary fs-2'/>
                                        </span>
                                        </div>
                                      
                                    </td>
                                    <td>
                                      <span role='button' className='text-danger mx-3 ' onClick={()=>removePro(item.id)}>
                                      <CiSquareRemove className='fs-2'/>
                                      </span>
                                    </td>
                                  </tr>
                                  )
                                })

                              }
                            </tbody>
                          </table>
                        </div>
                        
                      </div>
                    </section>
                  </>
                )
              }  
              </div>
      </div>
  </div>
    </main>
    
  )
}
