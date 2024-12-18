import React, { useState } from 'react';

const BalanceCard = ({ balance }) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleBalance = () => setIsVisible(!isVisible);

    return (
        <div className="balance-card">
            <div className="balance-header">
                <div>
                    <h2>Saldo disponível</h2>
                    <div className="balance-amount">
                        {isVisible ? balance : 'R$ ●●●●,●●'}
                    </div>
                </div>
                <i className="fas fa-eye" onClick={toggleBalance}></i>
            </div>
        </div>
    );
};

export default BalanceCard;
