import React from 'react';

const transactions = [
    {
        icon: 'fa-shopping-cart',
        title: 'Supermercado Extra',
        date: 'Hoje, 14:30',
        amount: '- R$ 235,42',
        type: 'negative',
    },
    {
        icon: 'fa-dollar-sign',
        title: 'Salário',
        date: 'Ontem, 08:00',
        amount: '+ R$ 3.500,00',
        type: 'positive',
    },
    {
        icon: 'fa-utensils',
        title: 'Restaurante',
        date: 'Ontem, 13:25',
        amount: '- R$ 42,90',
        type: 'negative',
    },
];

const RecentTransactions = () => {
    return (
        <div className="recent-transactions">
            <h2 className="sub-title">Últimas transações</h2>
            {transactions.map((transaction, index) => (
                <div className="transaction-item" key={index}>
                    <div className="transaction-info">
                        <div>
                            <h4>{transaction.title}</h4>
                            <small>{transaction.date}</small>
                        </div>
                    </div>
                    <div className={transaction.type}>{transaction.amount}</div>
                </div>
            ))}
        </div>
    );
};

export default RecentTransactions;
