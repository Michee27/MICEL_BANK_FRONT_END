import { Panel } from "primereact/panel";
import React from "react";


const CardStatements = () => {
    const statements = [
        { icon: "fas fa-shopping-bag", title: "Magazine Luiza", date: "15 Out 2023", amount: "R$ 399,90" },
        { icon: "fas fa-utensils", title: "Outback Steakhouse", date: "14 Out 2023", amount: "R$ 187,50" },
        { icon: "fas fa-gas-pump", title: "Posto Shell", date: "13 Out 2023", amount: "R$ 200,00" },
    ];

    return (
        <Panel header="Fatura atual" className="card-statements">
            {statements.map((statement, index) => (
                <div className="statement-item" key={index}>
                    <div className="statement-left">
                        <div className="statement-icon">
                            <i className={statement.icon}></i>
                        </div>
                        <div>
                            <h4>{statement.title}</h4>
                            <small>{statement.date}</small>
                        </div>
                    </div>
                    <div>{statement.amount}</div>
                </div>
            ))}
        </Panel>
    );
};

export default CardStatements;
