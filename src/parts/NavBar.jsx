import React from 'react';
import { Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <div>
            {/* Aqui se agrega el navbar */}
        </div>
        <div>
            {/* Aqui se va a renderizar lo l children */}
            <Outlet />
        </div>
        </>
    );
}

export default NavBar;