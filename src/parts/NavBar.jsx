import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style/NavBar.css";
import "./style/SignModal.css";
import logo from "../assets/images/navbar/logo.svg";
import userIcon from "../assets/images/navbar/user_icon.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { InputMail, InputPassword, InputText } from "./components/inputs/Input";
import { SolidButton } from "./components/buttons/Buttons";
const NavBar = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenSignModal = () => setOpenModal(true);
    const handleCloseSignModal = () => setOpenModal(false);

    const boxStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: 600,
        bgcolor: "background.paper",
        borderRadius: 4,
        boxShadow: 24,
        p: 4,
    };

    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <div className="nav-wrapper">
                <div className="nav-flex-container">
                    <div className="nav-logo-wrapper">
                        <img src={logo} alt="arenation logo" id="nav-logo" />
                    </div>
                    <div className="nav-options-wrapper">
                        <button
                            className="outline-button"
                            onClick={handleOpenSignModal}
                        >
                            Ingresar
                        </button>
                        <Modal open={openModal} onClose={handleCloseSignModal}>
                            <Box sx={boxStyle}>
                                <SignForm />
                            </Box>
                        </Modal>
                        <div className="user-badge">
                            <img src={userIcon} alt="user icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3.4rem" }}>
                {/* Aqui se va a renderizar el children */}
                <Outlet />
            </div>
        </div>
    );
};

const SignForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div className="sign-modal">
            <h2>Ingresar</h2>
            <hr />
            <h3>Bienvenido a Arenation</h3>
            <InputMail
                label={"Correo electrónico"}
                isRequired={true}
                placeholder={"email@email.com"}
                name={"email"}
                value={email}
                onChange={handleEmailChange}
            />
            <InputPassword
                label={"Contraseña"}
                isRequired={true}
                placeholder={"Contraseña"}
                name={"password"}
                value={password}
                onChange={handlePasswordChange}
            />
            <SolidButton text="Continuar" />
        </div>
    );
};

export default NavBar;
