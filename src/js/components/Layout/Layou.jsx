import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import Header from '../Header/Header';


const Layout = () => {



    return (
        <div className='dashboard'>
            <Sidebar />
            {/* <HeaderServicosEmAndamento /> */}
            <div className="main-content">
                <Header userName="João" />
                <Outlet />
            </div>

        </div>
    );
};

export default Layout;