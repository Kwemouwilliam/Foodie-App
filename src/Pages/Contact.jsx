import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';



const schema = yup
  .object({
    Nom: yup.string().required('Ce champ est oblogatoire'),
    Sujet: yup.string().required('Ce champ est oblogatoire'),
    Message: yup.string().required('Ce champ est oblogatoire').min(20, 'minimum 20 caracteres'),
  })
  .required();


export default function Contact() {


  const [load, setLoad] = useState(false)





  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })




  const onSubmit = (data) => {
    setLoad(true)
    var templateParams = {
      Nom: data.Nom,
      Sujet: data.Sujet,
      Message: data.Message,
    };

    emailjs.send('service_lfvhioa', 'template_vdffxcf', templateParams, 'eecuSVNYjfRUXgLW9').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Merci pour votre message envoye !!!')
        reset()
        setLoad(false)
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

  }



  return (

    <main className='container'>
      <h1 className='text-center'>Contact Us</h1>
      <>
        <section className="row d-flex justify-content-center my-2">
          <div className="col-lg-6 my-2">
            <iframe width="550" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=bonapriso+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label htmlFor="Nom" className="form-label">Nom</label>
                <input {...register("Nom")} type="text" className="form-control" id="nom" />
                <span className='text-danger'>{errors.Nom?.message}</span>
              </div>
              <div class="mb-3">
                <label htmlFor="Sujet" class="form-label">Sujet</label>
                <input {...register("Sujet")} type="text" className="form-control" id="Sujet" />
                <span className='text-danger'>{errors.Sujet?.message}</span>
              </div>
              <div class="mb-3">
                <label htmlFor="Message" className="form-label">Message</label>
                <textarea  {...register("Message")} className="form-control" id="Message" rows="3"></textarea>
                <span className='text-danger'>{errors.Message?.message}</span>
              </div>
              <button type='submit' className='btn btn-secondary w-100 mt-3 mb-3'>
                {
                  load ? <div className="spinner-border" role='status'>
                    <span className="visually-hidden">Loading...</span>
                  </div> : 'Envoyer'
                }
              </button>
            </form>
          </div>
        </section>
      </>

    </main>
  )
}