import React from 'react';
import BalanceCard from '../Balance/BalanceCard';
import QuickActions from '../QuickActions/QuickActions';
import RecentTransactions from '../RecentTransactions/RecentTransactions';

const Home = () => {
    return (
        <div className='home'>
            <BalanceCard balance="R$ 5.842,75" />
            <QuickActions />
            <RecentTransactions />
        </div>
    );
};

export default Home;
