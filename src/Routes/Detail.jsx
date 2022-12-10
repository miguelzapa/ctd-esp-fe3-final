import React from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {detailStyles} from '../styles/detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentistId} = useParams()
  console.log(dentistId)
  const url = 'https://jsonplaceholder.typicode.com/users/' + dentistId
  const [data, setData] = useState([])

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
  }, [url])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="dentist-detail">
      <h1 className="title-detail">Dentist Information</h1>
      <h1 className='title-info'>Name</h1>
      <h2>{data.name}</h2>
      <h1 className='title-info'>Email</h1>
      <h2>{data.email}</h2>
      <h1 className='title-info'>Phone Number</h1>
      <h2>{data.phone}</h2>
      <h1 className='title-info'>Website</h1>
      <h2>{data.website}</h2>
    </div>
  )
}

export default Detail