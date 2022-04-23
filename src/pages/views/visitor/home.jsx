import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../../components/Cards/Card";
import { CarouselImage } from "../../../components/Carousel/Carousel";
import Modal from 'react-bootstrap/Modal'
 
const Home = () => {
    const [openModalCarousel, setOpenModalCarousel] = useState(false);
    return (
        <Container>
            <Row>
                <button 
                    className="btn-primary" 
                    onClick={()=>{setOpenModalCarousel(true)}}
                >
                    Ver arenas
                </button>
            </Row>
            <Modal
                size="lg"
                centered
                backdrop="static"
                keyboard={false}
                show={openModalCarousel}
                onHide={() => setOpenModalCarousel(false)}
            >
                <Modal.Header closeButton>
                    <h2>Arenas</h2>
                </Modal.Header>
                <Modal.Body>
                    <CarouselImage />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Home;
