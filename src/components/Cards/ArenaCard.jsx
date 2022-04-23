import  React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from "react-router-dom";

const ArenaCard = ({
    path="1",
    src="https://civideportes.com.co/wp-content/uploads/2019/10/C%C3%B3mo-hacer-una-cancha-de-f%C3%BAtbol.jpg",
    title="Cancha Nuevo Milenio",
    location="Montería, Córdoba",
    freeSpace="3",
    price="70000",
}) => {
    const navigate = useNavigate();
    return (
        <Container 
            style={{
                width: "auto",
                padding: "1rem",
                marginBottom: "2rem",
                cursor: "pointer",
            }}
            onClick={() => navigate(`/visitor/view/arena/${path}`)}
            className="shadow card_body"
        >
            <img
                style={{
                    width: "100%",
                    height: "320px",
                    marginBottom: "1rem",
                    borderRadius: "10px",
                }}
                src={src}

            />
            <Row style={{marginBottom: "0.2rem"}}>   
                <h5 className="label-title">
                    {title}
                </h5>
            </Row>
            <Row style={{marginBottom: "0.4rem"}}>
                <span style={{
                        color: "#9CA3AF",
                        alignSelf: 'center',
                        fontSize: "0.8rem"
                    }}>
                    <LocationOnIcon />
                    {location}
                </span>
            </Row>
            <Row style={{marginBottom: "0.4rem"}}>
                <span style={{
                        color: "#1045FF",
                        alignSelf: 'center',
                        fontSize: "0.8rem"
                    }}
                >
                    <EventIcon  />
                    {`Quedan ${freeSpace} espacios disponibles para hoy`}
                </span>
            </Row>
            <Row style={{justifyContent: "end"}}>
                <span style={{
                        color: "#27272E",
                        alignSelf: 'center',
                        fontSize: "0.8rem"
                    }}
                >
                    {`Desde $${price}/Hora`}
                </span>
            </Row>
        </Container>
    );
}

export {ArenaCard};