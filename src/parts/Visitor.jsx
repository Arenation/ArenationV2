import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Visitor = () => {
    return(
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className="nav-wrapper">
                <NavBar />
            </div>
            <div style={{ marginTop: "3.4rem" }}>
                <Outlet />
            </div>
            <Footer login={true}/>
        </div>
    );
}

export default Visitor;