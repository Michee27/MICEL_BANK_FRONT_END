import React from 'react';

const Sidebar = () => {
    const menuItems = [
        { icon: 'fa-home', text: 'Início', link: '/' },
        { icon: 'fa-exchange-alt', text: 'Histórico', link: '/history' },
        { icon: 'fa-barcode', text: 'Pagamentos', link: '/payments' },
        { icon: 'fa-credit-card', text: 'Cartões', link: '/cards' },
        { icon: 'fa-chart-line', text: 'Investimentos', link: '/investments' },
    ];

    return (
        <div className="sidebar">
            <div className="logo">
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
