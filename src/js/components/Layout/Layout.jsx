import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import Header from '../Header/Header';
import { useAuth } from '../../context/AuthContext';
import BottomMenu from '../Menu/BottomMenu';

const Layout = () => {
    const { user } = useAuth();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Executa na montagem inicial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='dashboard'>
            {!isMobile && <Sidebar />}
            <div className="main-content">
                <Header user={user} />
                <Outlet />
            </div>
            {isMobile && <BottomMenu />}
        </div>
    );
};

export default Layout;
