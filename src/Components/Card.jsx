import React from "react";
import {Link} from 'react-router-dom';
import {cardStyles} from '../styles/card.css'
import StarIcon from '@mui/icons-material/Star';


const Card = ({ name, username, id }) => {
  const makeObject = () => {
    let object = {
      name: name,
      username: username,
      id: id
    }
    return object
  }
  const isDentistInFavorites = (object, array) =>
    array.find((character) => character.id === object.id)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentistFavs = JSON.parse(localStorage.getItem('dentistFavs')) || []

    if (!!isDentistInFavorites(makeObject(), dentistFavs)) {
      console.log('ya esta incluido')
    } else {
      dentistFavs.push(makeObject())
      localStorage.setItem('dentistFavs', JSON.stringify(dentistFavs))
    }
    alert("Se agregó a favoritos")
  }

  return (
    <div className="card" id={id}>
      <img src="./images/doctor.jpg" alt="" />
      <Link to={'/dentist/' + id}>
        <h4>{name}</h4>
      </Link>
      <h4 className="username">{username}</h4>
        <button onClick={addFav} className="favButton"><StarIcon style={{color:'yellow'}}/></button>
    </div>
  );
};

export default Card;

