import React from "react";

const CreditCard = ({ user }) => {

    console.log(user)
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    };

    return (
        <div
            className="credit-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-chip"></div>
            <div className="card-number">**** **** **** 4589</div>
            <div className="card-details">
                <div>
                    <div className="card-label">Titular</div>
                    <div className="card-holder">{user.name}</div>
                </div>
                <div className="card-brand">
                    <i className="fab fa-cc-mastercard"></i>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
