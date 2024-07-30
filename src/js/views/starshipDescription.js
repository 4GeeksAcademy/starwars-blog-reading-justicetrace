import React, { useState, useContext, useEffect } from "react";
import Context from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";

export const StarshipDescription = () => {
    const [starship, setstarship] = useState({})
    const {id} = useParams()
    useEffect(() => {
        async function getstarships() {
            const response = await fetch("https://www.swapi.tech/api/starships/" + id)
            const data = await response.json()
            setstarship(data.result.properties)
        }
        getstarships()
        console.log(starship)
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
                        <h1>{starship.name} </h1>
                        <div className="details">
                            <div className="size">
                                <h4>Model: {starship.model}</h4>
                                <h4>Crew: {starship.crew}</h4>
                                <h4>Passengers: {starship.passengers}</h4>
                                <h4>Length: {starship.pilots}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}