import React from "react";
import Card from "../Components/Card";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { borderColor, color, margin } from "@mui/system";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favsList =JSON.parse(localStorage.getItem("dentistFavs")) || []
  const navigate = useNavigate()
  const removeFavs = () => {
    localStorage.removeItem("dentistFavs")
    navigate("/favs")
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <button style={{margin: '15px',display:'flex',cursor: 'pointer',color: 'white', backgroundColor: 'rgb(71, 71, 255)', borderColor: 'white', borderRadius: '10px'}} onClick={removeFavs}><DeleteIcon style={{color: 'white'}}/>Remove all favorites</button>
      <div className="card-grid">
      {favsList.length > 0 ? favsList.map(item => {
          return <Card id={item.id} name={item.name} username={item.username}></Card>
        }) : <h3 style={{ color: 'rgb(71, 71, 255)', backgroundColor:'white'}}>!Add your favorite dentists¡</h3>}
      </div>
    </>
  );
};

export default Favs;
