import React from 'react';
import BalanceCard from '../Balance/BalanceCard';
import QuickActions from '../QuickActions/QuickActions';
import RecentTransactions from '../RecentTransactions/RecentTransactions';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className='home'>
            <BalanceCard balance={user?.balance} />
            <QuickActions />
            <RecentTransactions />
        </div>
    );
};

export default Home;
