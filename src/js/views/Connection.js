import React from "react";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import StarshipCard from "../component/starshipCard";
import "../../styles/home.css";
import "../../styles/descriptionCard.css";
export const Connection = () => (
    <div className="text-center mt-5">
        <CharacterCard />
        <PlanetCard />
        <StarshipCard />
    </div>
);





