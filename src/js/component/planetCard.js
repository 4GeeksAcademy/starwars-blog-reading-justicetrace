import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = () => {
    const [planets, setplanets] = useState([])
    const { store, actions } = useContext(Context)

useEffect(() => {
    async function getplanets() {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const data = await response.json();
        setplanets(data.results);
    }
    getplanets();
},
    []
);
const handleFav = (planet) => {
    if(store.fav.includes(planet)) {
        actions.deleteFav(planet);
    } else {
        actions.addFav(planet);
    }
};
return (
<div className=" cardbg d-flex col-10 overflow-auto mt-5 mx-auto " >
            {planets?.map((planet, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}/>
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                    </div>
                    <div className="Cardbtn">
                    <Link className="secondpagebutton" to={"/planet-description/" + planet.uid}>📝Details Here!</Link>
                        <button  className="secondpagebutton" onClick={() => { handleFav(planet.name) }}>♥︎Favorite</button>
                    </div>
                </div>
            ))}
        </div>
  );
};