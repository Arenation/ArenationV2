import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { SolidButton } from "./components/buttons/Buttons";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({login}) => {
    return (
    <Container fluid className="body_footer">
        <Row>
            <h1
                style={{
                    textAlign: "center",
                    alignSelf: 'center',
                }}
                className="label-title_white"
            >
                Reserva escenarios deportivos desde cualquier lugar y en cualquier momento
            </h1>
        </Row>
        <br />
        <br />
        {!login ? (
        <Row>
            <Col xs={"auto"}>
                <button
                    style={{ 
                        marginRight: "10px",
                        color: "white",
                        border: "0.1rem solid white",
                    }}
                    className="outline-button"
                >
                    Ingresar
                </button>
            </Col>
            <Col xs={"auto"}>
                <SolidButton
                    text="Registrate"
                />
            </Col>
        </Row>
        ):(
        <Row>
            <Col xs={"auto"}>
                <SolidButton
                    text="Quiero ser local"
                />
            </Col>
        </Row>
        )}
        <br />
        <br />
        <Row style={{width: "100%"}}>
            <Col xs={4}>
                <h5
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_white"
                >
                    Navegación
                </h5>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Inicio
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Escenarios deportivos
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Registrate
                </p>
            </Col>
            <Col xs={4}>
                <h5
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_white"
                >
                    Aspectos legales
                </h5>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Información general
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Politicas de privacidad
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Términos de servicio
                </p>
            </Col>
            <Col xs={4}>
                <h5
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_white"
                >
                    Navegación
                </h5>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    support@arenation.com
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    +57 300 000 0000
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Facebook
                </p>
                <p
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_gray"
                >
                    Linkedin
                </p>
            </Col>
            <hr />
        </Row>
        <Row style={{
            width: "100%", 
        }}>
            <Col>
                <h5
                    style={{
                        textAlign: "center",
                        alignSelf: 'center',
                    }}
                    className="label-title_white"
                >
                    &copy; 2022 Arenation. All Rights Reserved.
                </h5>
            </Col>
        </Row>
    </Container>
    );
}

export default Footer;