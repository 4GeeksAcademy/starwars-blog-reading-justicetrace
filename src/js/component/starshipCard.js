import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipCard = () => {
    const [starships, setstarships] = useState([])
    const { store, actions } = useContext(Context)

useEffect(() => {
    async function getstarships() {
        const response = await fetch("https://www.swapi.tech/api/starships");
        const data = await response.json();
        setstarships(data.results);
    }
    getstarships();
},
    []
);
const handleFav = (starship) => {
    if(store.fav.includes(starship)) {
        actions.deleteFav(starship);
    } else {
        actions.addFav(starship);
    }
};
return (
<div className=" cardbg d-flex col-10 overflow-auto mt-5 mx-auto " >
            {starships?.map((starship, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}/>
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                    </div>
                    <div className="Cardbtn">
                    <Link className="secondpagebutton" to={"/starship-description/" + starship.uid}>:round_pushpin:Learn More</Link>
                        <button  className="secondpagebutton" onClick={() => { handleFav(starship.name) }}> :love_letter:Favorite </button>
                    </div>
                </div>
            ))}
        </div>
  );
};