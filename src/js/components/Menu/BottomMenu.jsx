import React from 'react';
import './BottomMenu.css';

const BottomMenu = () => {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="bottom-menu">
            <div className="menu-item-bottom" onClick={() => handleNavigation('/')}>
                <i className="pi pi-home"></i>
                <span>Home</span>
            </div>
            <div className="menu-item-bottom" onClick={() => handleNavigation('/transfers')}>
                <i className="pi pi-send"></i>
                <span>Transferir</span>
            </div>
            <div className="menu-item-bottom" onClick={() => handleNavigation('/cards')}>
                <i className="pi pi-credit-card"></i>
                <span>Cartão</span>
            </div>
        </div>
    );
};

export default BottomMenu;
