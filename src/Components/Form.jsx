import React from "react";
import {useState} from 'react'
import {formStyles} from '../styles/form.css'




const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [request, setRequest] = useState({
    name: '',
    email: ''
  })

  const [meesage, setMessage] = useState('')
  // setear valores en el hook
  const HandleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    setRequest({...request, [name]: value})
    console.log(request)
  }
  // validar que el email tenga el formato correcto
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (regEx.test(request.email)) {
      return true
    } else {
      return false
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (request.name.length > 5 && emailValidation() === true) {
      setMessage(
        'Thank you ' +
          request.name +
          ', we will contact you as soon as possible via email'
      )
    } else {
      setMessage('Please verify your information again')
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => HandleChange(e)}></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => HandleChange(e)}></input>
        <button style={{cursor:'pointer'}} type="submit" onClick={(e) => HandleSubmit(e)}>
          Send
        </button>
      </form>
      <h3>{meesage}</h3>
    </div>
  );
};

export default Form;
