import React, { useState } from 'react';
import './BalanceCard.css'

const BalanceCard = ({ balance }) => {
    const [isVisible, setIsVisible] = useState(true);
    const userBalance = balance?.total_amount ? balance?.total_amount : "0.00"

    const toggleBalance = () => setIsVisible(!isVisible);

    return (
        <div className="balance-card">
            <div className="balance-header">
                <div>
                    <h2 className="sub-title">Saldo disponível</h2>
                    <div className="balance-amount">
                        {isVisible ? userBalance : 'R$ ●●●●,●●'}
                    </div>
                </div>
                <i className="pi pi-eye" style={{ fontSize: '1.5rem' }} onClick={toggleBalance}></i>
            </div>
        </div>
    );
};

export default BalanceCard;
