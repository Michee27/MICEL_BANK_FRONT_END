import React, { useState } from "react";
import "./Header.css";
import DropdownMenu from "../Dropdown/DropdownMenu";

const Header = ({ user }) => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="header">
            <h1>Bem-vindo, {user?.name}</h1>
            <div className="user-info">
                <i className="fas fa-bell"></i>
                <div
                    className="user-menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <i className="pi pi-user" style={{ fontSize: '2rem' }}></i>

                    {menuOpen && <DropdownMenu />}
                </div>
            </div>
        </div>
    );
};

export default Header;
