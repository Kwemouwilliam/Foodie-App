import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className='container'>
        <section className='row d-flex justify content-center align-items-center vh-100'>
        <div className="col-md-6">
                <p className="text-center">
                         <span className='d-block'>page not Found</span>
                            <span>
                                cliquer <Link to='/'>ICI</Link> pour aller a la page d'acceuil
                            </span>
                </p>

            </div>
        </section>
    </main>
  )
}
