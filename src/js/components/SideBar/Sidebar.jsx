import React from 'react';

const Sidebar = () => {
    const menuItems = [
        { icon: 'fa-home', text: 'Início', link: '/dashboard' },
        { icon: 'fa-exchange-alt', text: 'Transferências', link: '/transfers' },
        { icon: 'fa-barcode', text: 'Pagamentos', link: '/payments' },
        { icon: 'fa-credit-card', text: 'Cartões', link: '/cards' },
        { icon: 'fa-chart-line', text: 'Investimentos', link: '/investments' },
    ];

    return (
        <div className="sidebar">
            <div className="logo">
                <i className="fas fa-landmark"></i>
                DigiBank
            </div>
            {menuItems.map((item, index) => (
                <a href={item.link} className="menu-item" key={index}>
                    <i className={`fas ${item.icon}`}></i>
                    {item.text}
                </a>
            ))}
        </div>
    );
};

export default Sidebar;
