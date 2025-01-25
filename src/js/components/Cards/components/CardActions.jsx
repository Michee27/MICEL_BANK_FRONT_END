import React from "react";

const CardActions = () => {
    const actions = [
        { icon: "fas fa-lock", title: "Bloquear cartão", description: "Bloqueie temporariamente seu cartão" },
        { icon: "fas fa-shield-alt", title: "Alterar senha", description: "Altere sua senha de 4 dígitos" },
        { icon: "fas fa-dollar-sign", title: "Ajustar limite", description: "Ajuste seu limite de crédito" },
    ];

    return (
        <div className="card-actions">
            {actions.map((action, index) => (
                <div className="card-action-item" key={index}>
                    <div className="card-action-icon">
                        <i className={action.icon}></i>
                    </div>
                    <div className="card-action-details">
                        <h3>{action.title}</h3>
                        <small>{action.description}</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardActions;
