import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { InfoButton } from '../../../../parts/components/buttons/Buttons';
import { SolidButton } from '../../../../parts/components/buttons/Buttons';
import { InputText } from '../../../../parts/components/inputs/Input';
import { GetOneUser } from "../../../../services/services";

const MyAccount = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        /*  resolver: yupResolver(schema) */
    });
    const [openModalInformation, setOpenModalInformation] = useState(false);
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
    const handleChangeInformation = (data) => {
        console.log("datos", data)
    }
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
                            label={"Nombres"}
                            placeholder={"Escribe tu nombre"}
                        />
                        <InputText
                            onChange={(e) => setValue("lastnames", e.target.value)}
                            name={"lastnames"}
                            label={"Apellidos"}
                            placeholder={"Escribe tu apellido"}
                        />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                        <SolidButton
                            onClick={() => setOpenModalInformation(false)}
                            text={"Cancelar"}
                        />
                    </Col>
                    <Col>
                        <SolidButton
                            type={"submit"}
                            text={"Guardar"}
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
                <form onSubmit={handleSubmit(handleChangeInformation)}>
                <Modal.Header closeButton>
                    <Modal.Title className="label-title">
                       Información personal 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <InputText
                            onChange={(e) => setValue("currentPassword", e.target.value)}
                            name={"password"}
                            label={"Contraseña actual"}
                            placeholder={"Ingrese su contraseña actual"}
                        />
                        <InputText
                            onChange={(e) => setValue("newPassword", e.target.value)}
                            name={"newPassword"}
                            label={"Nueva contraseña"}
                            placeholder={"Ingresa nueva contraseña"}
                        />
                        <InputText
                            onChange={(e) => setValue("confirmPassword", e.target.value)}
                            name={"confirmNewPassword"}
                            label={"Confirme nueva contraseña"}
                            placeholder={"Confirma la nueva contraseña"}
                        />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                        <SolidButton
                            onClick={() => setOpenModalInformation(false)}
                            text={"Descartar cambios"}
                        />
                    </Col>
                    <Col>
                        <SolidButton
                            type={"submit"}
                            text={"Guardar cambios"}
                        />
                    </Col>
                </Modal.Footer>
                </form>
            </Modal>
        </Container>
    );
}

export default MyAccount;