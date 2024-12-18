import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <div className="menu-item">Perfil</div>
            <div className="menu-item">Configuração</div>
            <div className="menu-item">Logout</div>
        </div>
    );
};

export default DropdownMenu;
