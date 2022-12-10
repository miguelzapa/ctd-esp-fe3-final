import React from 'react'
import {Link} from 'react-router-dom'
import {navbarStyles} from '../styles/navbar.css'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import react, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal)

  return (
    <nav className='navbar'>
       <h2>DH <span>Odonto</span></h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button style={{cursor:'pointer', borderRadius:'25px'}} onClick={() => dispatch(state === '' ? {type: 'dark'} : {type: 'light'})}> {state === 'dark' ? <LightModeIcon style={{color:'orange'}}/> : <ModeNightIcon/>}</button>
      </div>
    </nav>
  )
}

export default Navbar