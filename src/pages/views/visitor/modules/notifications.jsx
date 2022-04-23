import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
const Notifications = () => {

    const msg = [{
        title: "¡Bienvenido a la plataforma!",
        body: "Para poder acceder a todas las funcionalidades de la plataforma, debes registrarte como usuario."
    },
    {
        title: "¡Bienvenido a la plataforma!",
        body: "Para poder acceder a todas las funcionalidades de la plataforma, debes registrarte como usuario."
    },
    {
        title: "¡Bienvenido a la plataforma!",
        body: "Para poder acceder a todas las funcionalidades de la plataforma, debes registrarte como usuario."
    },
    {
        title: "¡Bienvenido a la plataforma!",
        body: "Para poder acceder a todas las funcionalidades de la plataforma, debes registrarte como usuario."
    },
    {
        title: "¡Bienvenido a la plataforma!",
        body: "Para poder acceder a todas las funcionalidades de la plataforma, debes registrarte como usuario."
    }]

    return (
        <Container fluid>
            <Row>
                <br/>
                <Col>
                    <Row><h2>Notificaciones</h2></Row>
                    <hr/>
                    <Row className="custom-accordion__container">
                        {msg.map((item, index) => {
                            return(
                                <Accordion className="custom-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {item.body}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export { Notifications }