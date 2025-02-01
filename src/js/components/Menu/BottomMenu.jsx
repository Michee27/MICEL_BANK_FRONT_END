import React from "react";
import { useNavigate } from "react-router-dom";
import "./BottomMenu.css";
import { menuItems } from "./utils/constants";

const BottomMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="bottom-menu">
            {menuItems.map(({ path, icon, label }) => (
                <div key={path} className="menu-item-bottom" onClick={() => navigate(path)}>
                    <i className={icon}></i>
                    <span>{label}</span>
                </div>
            ))}
        </div>
    );
};

export default BottomMenu;
