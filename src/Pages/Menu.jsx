import React, { useState } from 'react'
import { data, menu_list } from '../../data';
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu';
import Card from '../Components/Card';


export default function Menu() {
  const [category, setCategory] = useState(data)

  const showProducts = (menu) => {
    const newMenu = data.filter(item => item.category.toLowerCase() === menu.toLowerCase())
    setCategory(newMenu)
  }

  return (
    <main className='Explore-menu container' id='explore-menu'>
      <h5 className='mx-4 fs-2'>Exploire our menu</h5>
      <p className=' explore-menu-text mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Libero iusto repellendus dolore culpa, ut provident error laboriosam rem maiores odio eius aliquid?
        Obcaecati aliquam natus voluptate! Tempora molestiae animi numquam.
      </p>
      <div className='explore-menu-list'>
        {
          menu_list.map((item, index) => {
            return (
              <ExploreMenu key={index}
                menu_image={item.menu_image}
                menu_name={item.menu_name}
                showProducts={() => showProducts(item.menu_name)}
              />
            )
          })
        }
      </div>
      <div className='button-menu'>
        <button className='btn btn-secondary mx-3' onClick={() => setCategory(data)}>All Menus</button>
      </div>
      <hr />
      <section className='row'>
        {category.map((item, index) => {
          return (
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
        })}
      </section>
    </main>
  )
}

