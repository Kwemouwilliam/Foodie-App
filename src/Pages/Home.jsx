import React from 'react'
import Caroussel from '../Components/Caroussel'
import { data } from '../../data'
import Card from '../Components/Card'


export default function Home() {

  return (
    <>
      <Caroussel/>
    <h1 className='mx-5'>Meilleur repas pres de chez vous</h1>
    <main className='container mt-3'>
           <section className='row'>
            {
              data.map((item,index)=> {
                return(
                  <div className="col-lg-3 col-md-6" key={index}>
                      <Card 
                          image={item.image}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          category={item.category}
                        />  
                    </div>
                )
              })
            }

           </section>
      </main>
      </>
  )
}

