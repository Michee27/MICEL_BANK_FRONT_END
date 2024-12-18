import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layou';
import Transfers from '../components/Transfers/Transfers';
import Home from '../components/Home/Home';



function AppRoutes() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="transfers" element={<Transfers />} />
                    <Route index element={<Home />} />



                </Route>
            </Routes>

        </Router>
    );
}

export default AppRoutes;