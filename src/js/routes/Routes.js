import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import LoginForm from '../components/Login/LoginForm';
import Cards from '../components/Cards/Cards';
import ProtectedRoute from './ProtectedRoute';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import InvestmentDashboard from '../components/Investment/InvestmentDashboard';
import { ScrollToTopProvider } from '../context/ScrollToTopContext';

function AppRoutes() {
    return (
        <Router>
            <ScrollToTopProvider>
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
                        <Route path="history" element={<TransactionHistory />} />
                        <Route path="cards" element={<Cards />} />
                        <Route path="investments" element={<InvestmentDashboard />} />

                    </Route>
                </Routes>
            </ScrollToTopProvider>
        </Router>
    );
}

export default AppRoutes;
