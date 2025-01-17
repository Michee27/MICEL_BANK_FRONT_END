import React from "react";
import CreditCard from "./components/CreditCard";
import CardStatements from "./components/CardStatements";
import CardActions from "./components/CardActions";
import "./Cards.css";


const Cards = () => {
    return (
        <div className="home">
            <h1 className="sub-title">Meus Cartões</h1>

            <CreditCard />
            <CardActions />
            <CardStatements />
        </div>
    );
};

export default Cards;
