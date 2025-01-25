import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Transfers from '../components/Transfers/Transfers';
import Home from '../components/Home/Home';
import LoginForm from '../components/Login/LoginForm';
import Cards from '../components/Cards/Cards';
import ProtectedRoute from './ProtectedRoute';
import RegisterForm from '../components/RegisterForm/RegisterForm';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Rota pública para login */}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} />

                {/* Rotas protegidas */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="history" element={<Transfers />} />
                    <Route path="cards" element={<Cards />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
