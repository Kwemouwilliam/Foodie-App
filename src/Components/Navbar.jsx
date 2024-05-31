import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import './css/Navbar.css'

export default function Navbar() {

  return (
    <section className='logos'>
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
            <a type="text" className="position-relative">
              <FaBagShopping className="fs-3 my-2" color='black' />
              <span className="start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </a>
            <div className=''>
              <button type="text" class="btn btn-outline-primary text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">log in</button>
              <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">S'inscrire</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Votre mot de passe..." />
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
    </section>
  )
}
