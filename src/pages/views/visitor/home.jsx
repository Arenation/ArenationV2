import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselImage } from "../../../components/Carousel/Carousel";
import Modal from 'react-bootstrap/Modal';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ArenaCard } from "../../../components/Cards/ArenaCard";
import { GetAllArenas } from "../../../services/ServicesArena";

const Home = () => {

    const [dataArenas,setDataArenas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await GetAllArenas();
                const formatData = result.data.map(item => {
                    const convertArray = (string) => {
                        const text = string.replace("{","").replace("}","");
                        return text.split(',');
                    }
                    return {
                        ...item,
                        facilities: convertArray(item.facilities),
                        images: convertArray(item.images),
                    }
                });
                setDataArenas(formatData);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    } , []);
    return (
        <Container fluid style={{padding: "3rem"}}>
            <Row>
                <Col xs={"auto"}>
                    <h1 className="label-title">
                        Escenarios Deportivos
                    </h1>
                </Col>
                <hr />
            </Row>
            <Row style={{justifyContent: "start"}}>
                    {dataArenas?.map((arena,index) => {
                        return (
                            <Col key={index} xs={3}>
                                <ArenaCard
                                    src={arena.images[0]}
                                    path={arena.id}
                                    title={arena.title}
                                    price={arena.price}
                                />
                            </Col>
                        );
                    })}
                    {/* <ArenaCard
                        path="2"
                        src="https://civideportes.com.co/wp-content/uploads/2019/10/C%C3%B3mo-hacer-una-cancha-de-f%C3%BAtbol.jpg"
                        title="Cancha Nuevo Milenio"
                        location="Montería, Córdoba"
                        freeSpace="3"
                        price="70000"
                    /> */}
                
            </Row>
        </Container>
    );
};

export default Home;
