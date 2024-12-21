import React from "react";
import "./DropdownMenu.css";
import AuthService from "../../services/authService";
import { useToast } from "../../context/ToastContext";

const DropdownMenu = () => {
    const { showSuccess, showError } = useToast()


    const handleLogout = async () => {
        try {
            await AuthService.logout();
            showSuccess('Usuário deslogado com sucesso!');
        } catch (error) {
            showError(error);
        }
    };

    return (
        <div className="dropdown-menu">
            <div className="menu-item">Perfil</div>
            <div className="menu-item">Configuração</div>
            <div className="menu-item" onClick={handleLogout}>Logout</div>
        </div>
    );
};

export default DropdownMenu;
