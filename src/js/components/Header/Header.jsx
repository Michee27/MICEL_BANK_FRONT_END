import React, { useState } from "react";
import "./Header.css";
import DropdownMenu from "../Dropdown/DropdownMenu";

const Header = ({ user }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            <h1 className="sub-title">Bem-vindo, {user?.name.split(" ")[0]}</h1>
            <div className="user-info">
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
