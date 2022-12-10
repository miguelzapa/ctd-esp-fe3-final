import React from 'react'
import Form from '../Components/Form'
import {contactSyles} from '../styles/contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Want to know more?</h2>
      <h3>Send us your questions and we will contact you</h3>
      <Form/>
    </div>
  )
}

export default Contact