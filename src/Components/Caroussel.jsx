import React from 'react'
import './css/Caroussel.css'

export default function Caroussel() {
  
  return (
   <>
    <main className='container'>
      <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/menu/img0.png" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5 className=' text-start pt-3'>Commande ta nourriture <br />
                favories ici</h5>
            <p className='text-start pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dignissimos vitae eaque deserunt animi eos odit libero fugiat nostrum voluptate fugit facilis rerum dolor neque molestiae expedita,
               in qui quasi deleniti?.</p>
              <button type="button" className='btn btn-outline-primary text-white d-grid gap-2 d-md-block '>Voir les menus</button>
          </div>
        </div> 
      </div>
      </div>
    </main>
    </>
  )
}

