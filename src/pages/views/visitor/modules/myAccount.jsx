import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { InfoButton } from '../../../../parts/components/buttons/Buttons';
import { SolidButton } from '../../../../parts/components/buttons/Buttons';
import { InputText } from '../../../../parts/components/inputs/Input';
import { GetOneUser } from "../../../../services/services";
import { UpdateUser } from "../../../../services/services";
import { ChangePassword } from "../../../../services/services";
import CircularProgress from '@mui/material/CircularProgress';

const MyAccount = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        /*  resolver: yupResolver(schema) */
    });
    const [user, setUser] = useState([]);
    const [openModalInformation, setOpenModalInformation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [openModalSecurity, setOpenModalSecurity] = useState(false);
    const [openModalNotification, setOpenModalNotification] = useState(false);

    const handleClickInformationPersonal = () => {
        setOpenModalInformation(true);
    }
    const handleClickSecurity = () => {
        setOpenModalSecurity(true);
    }
    const handleClickNotifications = () => {
        alert('Notificaciones');
        setOpenModalNotification(true);
    }
    const handleChangeInformation = async (data) => {
        if(data.names || data.lastNames){
            setIsLoading(true);
            const id = localStorage.getItem('id-user');
            try{
                let obj = {
                    id: id,
                    names: data.names ? data.names : user.names,
                    lastnames: data.lastnames ? data.lastnames : user.lastnames,
                }
                const result = await UpdateUser(obj);
                if(result){
                    setValue("names", "");
                    setValue("lastnames", "");
                    localStorage.setItem('name-user', user.names+' '+user.lastnames);
                    setOpenModalInformation(false);
                }
                setIsLoading(false);
            }catch(error){
                console.log(error);
            }
        }
    }
    const handleChangePassword = async (data) => {
        if(data.currentPassword){
            if(data.newPassword === data.confirmPassword){
                setIsLoading(true);
                const id = localStorage.getItem('id-user');
                try{
                    let obj = {
                        id: id,
                        currentpassword: data.currentPassword,
                        newpassword: data.newPassword,
                    }
                    const result = await ChangePassword(obj);
                    if(result.data === true){
                        setOpenModalSecurity(false);
                    }else{
                        alert('La contraseña actual es incorrecta');
                    }
                    setIsLoading(false);
                }catch(error){
                    console.log(error);
                }
            }else{
                alert("las nuevas contraseñas deben ser iguales.")
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                let obj = {
                    id: 3,
                    email: ""
                }
                const response = await GetOneUser(obj);
                setUser(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[user]);
    return (
        <Container fluid style={{padding: "3rem"}}>
            <Row><h2>Mi cuenta</h2></Row>
            <hr/>
            <InfoButton 
                title="Información personal"
                text="Modifica y actualiza tus datos personales, esto nos ayudará a contactarnos contigo cuando sea necesario."
                onClick={handleClickInformationPersonal}
            />
            <InfoButton 
                title="Seguridad"
                text="Cambiar la contraseña periodicamente te ayudará a proteger tu cuenta."
                onClick={handleClickSecurity}
            />
            <InfoButton 
                title="Métodos de pago"
                text="Agrega tus medios de pago para que puedas realizar pagos de manera segura."
                onClick={handleClickNotifications}
            />
            <Modal
                centered
                show={openModalInformation}
                onHide={() => setOpenModalInformation(false)}
            >
                <form onSubmit={handleSubmit(handleChangeInformation)}>
                <Modal.Header closeButton>
                    <Modal.Title className="label-title">
                       Información personal 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <InputText
                            onChange={(e) => setValue("names", e.target.value)}
                            name={"names"}
                            defaultValue={user.names}
                            label={"Nombres"}
                            placeholder={"Escribe tu nombre"}
                        />
                        <InputText
                            onChange={(e) => setValue("lastnames", e.target.value)}
                            name={"lastnames"}
                            defaultValue={user.lastnames}
                            label={"Apellidos"}
                            placeholder={"Escribe tu apellido"}
                        />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                        <button
                            style={{ 
                                marginRight: "10px",
                                width: "100%"
                            }}
                            onClick={() => {
                                setOpenModalInformation(false);
                                setValue("names", "");
                                setValue("lastnames", "");}
                            }
                            className="outline-button"
                        >
                            Cancelar
                        </button>
                    </Col>
                    <Col>
                        <SolidButton
                            type={"submit"}
                            text={isLoading ? (
                                <CircularProgress size={14} sx={{ color: "white" }} />
                            ) : (
                                "Guardar"
                            )}
                        />
                    </Col>
                </Modal.Footer>
                </form>
            </Modal>
            <Modal
                centered
                show={openModalSecurity}
                onHide={() => setOpenModalSecurity(false)}
            >
                <form onSubmit={handleSubmit(handleChangePassword)}>
                <Modal.Header closeButton>
                    <Modal.Title className="label-title">
                       Seguridad 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <InputText
                            onChange={(e) => setValue("currentPassword", e.target.value)}
                            name={"password"}
                            label={"Contraseña actual"}
                            required={true}
                            placeholder={"Ingrese su contraseña actual"}
                        />
                        <InputText
                            onChange={(e) => setValue("newPassword", e.target.value)}
                            name={"newPassword"}
                            label={"Nueva contraseña"}
                            required={true}
                            placeholder={"Ingresa nueva contraseña"}
                        />
                        <InputText
                            onChange={(e) => setValue("confirmPassword", e.target.value)}
                            name={"confirmNewPassword"}
                            label={"Confirme nueva contraseña"}
                            required={true}
                            placeholder={"Confirma la nueva contraseña"}
                        />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                        <button
                            style={{ 
                                marginRight: "10px",
                                width: "100%"
                            }}
                            onClick={() => setOpenModalSecurity(false)}
                            className="outline-button"
                        >
                            Descartar cambios
                        </button>
                    </Col>
                    <Col>
                        <SolidButton
                            type={"submit"}
                            text={isLoading ? (
                                <CircularProgress size={14} sx={{ color: "white" }} />
                            ) : (
                                "Guardar cambios"
                            )}
                        />
                    </Col>
                </Modal.Footer>
                </form>
            </Modal>
        </Container>
    );
}

export default MyAccount;