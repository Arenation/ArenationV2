import React from "react";
import { Outlet } from "react-router-dom";
import "./style/NavBar.css";
import logo from "../assets/images/navbar/logo.svg";
import userIcon from "../assets/images/navbar/user_icon.svg";
const NavBar = () => {
    return (
        <div style={{ width: "100vw", height:"100vh", overflow:"hidden" }}>
            <div className="nav-wrapper">
                <div className="nav-flex-container">
                    <div className="nav-logo-wrapper">
                        <img src={logo} alt="arenation logo" id="nav-logo" />
                    </div>
                    <div className="nav-options-wrapper">
                        <button className="outline-button">Ingresar</button>
                        <div className="user-badge">
                            <img src={userIcon} alt="user icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3.4rem"}}>
                {/* Aqui se va a renderizar el children */}
                <Outlet />
            </div>
        </div>
    );
};

export default NavBar;
