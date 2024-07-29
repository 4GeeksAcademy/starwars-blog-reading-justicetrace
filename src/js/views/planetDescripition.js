import React, { useState, useContext, useEffect } from "react";
import Context from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";

export const PlanetDescription = () => {
    const [planet, setplanet] = useState({})
    const {id} = useParams()
    useEffect(() => {
        async function getplanets() {
            const response = await fetch("https://www.swapi.tech/api/planets/" + id)
            const data = await response.json()
            setplanet(data.result.properties)
        }
        getplanets()
        console.log(planet)
    },[])

    return (
        <section>
            <div className="post">
                <div className="left">
                    <img className="wordmark"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                </div>
                <div className="right"><img className="helmet"
                    src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png" alt="helmet" />
                    <div className="productInfo">
                        <h1>{planet.name} </h1>
                        <div className="details">
                            <div className="size">
                                <h4>Height: {planet.height}</h4>
                                <h4>Gender: {planet.gender}</h4>
                                <h4>Hair Color: {planet.hair_color}</h4>
                                <h4>Eye Color: {planet.eye_color}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}