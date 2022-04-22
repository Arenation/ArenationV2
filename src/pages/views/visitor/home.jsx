import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../../components/Cards/Card";
 
const Home = () => {
    return (
        <>
            <Container fluid style={{alignItems: "center", justifyContent: "center"}}>
                <Row>
                    <Col md={6}>
                        <Cards
                            title={"Estadio"}
                            textButton={"Ver información"}
                            urlImage={"https://t2.uc.ltmcdn.com/es/posts/9/6/9/cuanto_mide_un_campo_de_futbol_34969_orig.jpg"}
                        />
                    </Col>
                    <Col md={6}>
                        <Cards
                            title={"Estadio 2"}
                            textButton={"Ver información"}
                            urlImage={"https://cdn.create.vista.com/api/media/medium/371871052/stock-photo-grassy-football-pitch-stadium-sunny?token="}
                        />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
            </Container>
            <Container style={{alignItems: "center", justifyContent: "center"}}>
                <Row>
                    <Col md={4}>
                        <Cards
                            title={"Estadio 1"}
                            textButton={"Ver información"}
                            urlImage={"https://t2.uc.ltmcdn.com/es/posts/9/6/9/cuanto_mide_un_campo_de_futbol_34969_orig.jpg"}
                        />
                    </Col>
                    <Col md={4}>
                        <Cards
                            title={"Estadio 2"}
                            textButton={"Ver información"}
                            urlImage={"https://cdn.create.vista.com/api/media/medium/371871052/stock-photo-grassy-football-pitch-stadium-sunny?token="}
                        />
                    </Col>
                    <Col md={4}>
                        <Cards
                            title={"Estadio 3"}
                            textButton={"Ver información"}
                            urlImage={"https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2020/03/cuanto-mide-un-campo-de-futbol.jpg"}
                        />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
            </Container>
        </>
    );
};

export default Home;
