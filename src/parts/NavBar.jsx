import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/navbar/logo.svg";
import userIcon from "../assets/images/navbar/user_icon.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { InputMail, InputPassword, InputText } from "./components/inputs/Input";
import { SolidButton } from "./components/buttons/Buttons";
import { RegisterAuth, LoginAuth, GetOneUser} from "../services/services";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from '@mui/material/CircularProgress';

const NavBar = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalRegister, setOpenModalRegister] = useState(false);
    const handleOpenSignModal = () => setOpenModal(true);
    const handleCloseSignModal = () => setOpenModal(false);
    const handleOpenSignRegisterModal = () => setOpenModalRegister(true);
    const handleCloseSignRegisterModal = () => setOpenModalRegister(false);

    const role = localStorage.getItem("role");

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
        <div style={{width: "100%", overflow:"hidden"}}>
            <div className="nav-wrapper">
                <div className="nav-flex-container">
                    <div className="nav-logo-wrapper">
                        <img src={logo} alt="arenation logo" id="nav-logo" />
                    </div>
                    <div className="nav-options-wrapper">
                        {!role && (<>
                            <button
                                style={{marginRight: "10px"}}
                                className="outline-button"
                                onClick={handleOpenSignModal}
                            >
                                Ingresar
                            </button>
                            <button
                            className="outline-button"
                            onClick={handleOpenSignRegisterModal}
                            >
                                Registrar
                            </button>
                        </>)}                            
                        <Modal open={openModal} onClose={handleCloseSignModal}>
                            <Box sx={boxStyle}>
                                <SignForm setOpenModal={setOpenModal}/>
                            </Box>
                        </Modal>
                        <Modal open={openModalRegister} onClose={handleCloseSignRegisterModal}>
                            <Box sx={boxStyle}>
                                <SignRegister setOpenModalRegister={setOpenModalRegister}/>
                            </Box>
                        </Modal>
                        <div className="user-badge">
                            <img src={userIcon} alt="user icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3.4rem"}}>
                <Outlet />
            </div>
        </div>
    );
};

const SignForm = ({setOpenModal}) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const schema = yup.object().shape({
        email: yup.string().email(),
        password: yup.string().required()
    });
    
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
       /*  resolver: yupResolver(schema) */
    });
    
    const handleSubmitForm = async (data) => {

        try {
            setIsLoading(true);
            let obj = {
                password: data.password,
                email: data.email,
            };
            const Login = await LoginAuth(obj);

            console.log("login: ", Login);
            if(Login.data !== false){
                localStorage.setItem("role", Login.data.rol);
                setOpenModal(false);
                setIsLoading(false);
            }else{
                setIsLoading(false);
                console.log("Datos incorrectos");
            }        
        }catch (error) {
            console.log("Error: ", error)
        }

    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="sign-modal">
            <h2>Ingresar</h2>
            <hr />
            <h3>Bienvenido a Arenation</h3>
            <InputMail
                onChange={(e)=> setValue("email", e.target.value)}
                label={"Correo electrónico"}
                isRequired={true}
                placeholder={"email@email.com"}
                name={"email"}
            />
            <InputPassword
                onChange={(e)=> setValue("password", e.target.value)}
                label={"Contraseña"}
                isRequired={true}
                placeholder={"Contraseña"}
                name={"password"}
            />
            <SolidButton
                disabled={isLoading ? true : false}
                text={isLoading ? 
                    (<CircularProgress 
                        size={20} 
                        sx={{color: "white"}} 
                        />) 
                    : "Continuar"
                }
            />
        </form>
    );
};

const SignRegister = ({setOpenModalRegister}) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const schema = yup.object().shape({
        name: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().email(),
        password: yup.string().required()
    });
    
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
       /*  resolver: yupResolver(schema) */
    });

    const handleSubmitForm = async (data) => {
        try {
            setIsLoading(true);
            let obj = {
                names: data.name,
                lastnames: data.lastname,
                password: data.password,
                email: data.email,
                role: "VISITOR"
            };
            const GetUser = await GetOneUser(obj); 
            if(GetUser.data === false){
                const CreateUser = await RegisterAuth(obj);
                if(CreateUser.data === true){
                    setIsLoading(false);
                    setOpenModalRegister(false);
                }
            }else{
                console.log("Usuario con este correo ya existe!");
                setIsLoading(false);
            }        
        }catch (error) {
            console.log("Error: ", error)
        }

    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="sign-modal">
            <h2>Registrar</h2>
            <hr />
            <h3>Bienvenido a Arenation</h3>
            <InputText
                onChange={(e)=> setValue("name", e.target.value)}
                name={"name"}
                label={"Nombres"}
                isRequired={true}
                placeholder={"Escribe tu nombre"}
            />
            <InputText
                onChange={(e)=> setValue("lastname", e.target.value)}
                name={"lastname"}
                label={"Apellidos"}
                isRequired={true}
                placeholder={"Escribe tus apellidos"}
            />
            <InputMail
                onChange={(e)=> setValue("email", e.target.value)}
                name={"email"}
                label={"Correo electrónico"}
                isRequired={true}
                placeholder={"email@email.com"}
            />
            <InputPassword
                onChange={(e)=> setValue("password", e.target.value)}
                label={"Contraseña"}
                isRequired={true}
                placeholder={"Contraseña"}
                name={"password"}
            />
            <InputPassword
                onChange={(e)=> setValue("confirmPassword", e.target.value)}
                label={"Confirmar contraseña"}
                isRequired={true}
                placeholder={"Escribe nuevamente tu contraseña"}
                name={"confirmPassword"}
            />
            <SolidButton
                disabled={isLoading ? true : false}
                text={isLoading ? 
                    (<CircularProgress 
                        size={20} 
                        sx={{color: "white"}} 
                        />) 
                    : "Continuar"
                }
            />
        </form>
    );
    
}

export default NavBar;
