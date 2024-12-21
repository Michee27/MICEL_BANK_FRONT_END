import React from "react";
import CreditCard from "./components/CreditCard";
import CardStatements from "./components/CardStatements";
import CardActions from "./components/CardActions";
import "./Cards.css";


const Cards = () => {
    return (
        <div>
            <h1>Meus Cartões</h1>

            <CreditCard />
            <CardActions />
            <CardStatements />
        </div>
    );
};

export default Cards;
