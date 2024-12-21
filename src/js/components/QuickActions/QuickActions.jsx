import React from 'react';
import './QuickActions.css';

const actions = [
    { icon: 'pi pi-send', text: 'Transferir' },
    { icon: 'pi pi-credit-card', text: 'Pagar' },
    { icon: 'pi pi-mobile', text: 'Recarga' },
    { icon: 'pi pi-money-bill', text: 'Pix' },
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
                        <i className={`${action.icon}`} />
                    </div>
                    <h3>{action.text}</h3>
                </div>
            ))}
        </div>
    );
};

export default QuickActions;
