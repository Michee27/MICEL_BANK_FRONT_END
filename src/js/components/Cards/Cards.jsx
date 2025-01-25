import React from "react";
import CreditCard from "./components/CreditCard";
import CardStatements from "./components/CardStatements";
import CardActions from "./components/CardActions";
import "./Cards.css";
import { useAuth } from "../../context/AuthContext";


const Cards = () => {
    const { user } = useAuth();


    return (
        <div className="home">
            <h1 className="sub-title">Meus Cartões</h1>

            <CreditCard user={user} />
            <CardActions />
            <CardStatements />
        </div>
    );
};

export default Cards;
