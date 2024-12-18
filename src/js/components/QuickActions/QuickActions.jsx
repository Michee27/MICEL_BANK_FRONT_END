import React from 'react';

const actions = [
    { icon: 'fa-paper-plane', text: 'Transferir' },
    { icon: 'fa-barcode', text: 'Pagar' },
    { icon: 'fa-mobile-alt', text: 'Recarga' },
    { icon: 'fa-hand-holding-usd', text: 'Pix' },
];

const QuickActions = () => {
    const handleActionClick = (action) => {
        console.log(`Ação selecionada: ${action}`);
    };

    return (
        <div className="quick-actions">
            {actions.map((action, index) => (
                <div
                    className="action-card"
                    key={index}
                    onClick={() => handleActionClick(action.text)}
                >
                    <div className="action-icon">
                        <i className={`fas ${action.icon}`}></i>
                    </div>
                    <h3>{action.text}</h3>
                </div>
            ))}
        </div>
    );
};

export default QuickActions;
