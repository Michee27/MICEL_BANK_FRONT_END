import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // Redireciona para a página de login se não estiver autenticado
        return <Navigate to="/login" />;
    }

    return children; // Renderiza o conteúdo protegido
};

export default ProtectedRoute;
