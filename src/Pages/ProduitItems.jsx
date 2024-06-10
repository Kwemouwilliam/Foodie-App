import React, { useEffect, useState } from 'react'
import { shopCard } from '../../Store'
import { FaStar } from 'react-icons/fa6'
import { CiStar } from 'react-icons/ci'
import { data } from '../../data'
import { toast } from 'sonner'

export default function ProduitItems() {
    const {id} = useFarams ()
    const [produit, setProduit] = useState([])


    const addProduits = shopCard((state) => state.addProduit)
    const CARD = shopCard((state.CARD))

    function addProduit(id) {
        let is_exist = CARD.findIndex(item => item.id === id)

        if (is_exist === -1) {
            addProduits(produit)
        }else{
            toast('Vous avez deja ajouter ce produit')
        }
    }


    function getProduit() {
        return data.find(item => item.id === id)
    }

    useEffect(() => {
        setProduit(getProduit)
    }, [id])


  return (
    <main className='container'>
    {
        produit.length!==0 && (
            <section className='row'>
                <div className="col-lg-4 mt-3">
                <img src={`/${produit.image}`} alt="" width={300} height={200} />
                </div>
                <div className="col-lg-8 d-block">
                    <span className='fs-4 d-block'>{produit.name}</span>
                    <span className='text-danger d-block'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <CiStar/>
                    </span>
                    <span className='line-group fs-4 text-secondary'>2000</span> <span className='fs-4 ms-3 text-success'>{produit.price} FCFA</span>
                    <span className='fs-6 text-secondary d-block'>{produit.description}</span>
                    <button onClick={() =>addProduit(produit.id)} className="btn btn-primary mt-3">ajouter au panier</button>
                </div>

            </section>
        )
    }
    </main>
  )
}
