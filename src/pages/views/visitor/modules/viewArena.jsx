import React, { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselImage } from "../../../../components/Carousel/Carousel";
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { GetOneArena } from "../../../../services/ServicesArena";

const ViewArena = () => {
    const { id } = useParams();
    const [dataArena, setDataArena] = useState({});
    const [infoImg, setInfoImg] = useState([{}]);
    const [openModalCarousel, setOpenModalCarousel] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    useEffect(() => {
        const fetchData = async () => {
            try{
                let obj = {
                    id: id
                };
                const result = await GetOneArena(obj);
                const formatData = () => {
                    const convertArray = (string) => {
                        const text = string.replace("{","").replace("}","");
                        return text.split(',');
                    }

                    return {
                        ...result.data,
                        facilities: convertArray(result.data.facilities),
                        images: convertArray(result.data.images),
                    }
                }
                const format = formatData();
                const image = format.images.map((item, index) => {
                    if(index === 0){
                        return {
                            src: item,
                            title: "img-bd",
                            rows: 4,
                            cols: 2
                        }
                    }else{
                        return {
                            src: item,
                            title: "img-bd",
                            rows: 2
                        }
                    }
                });
                const formatDataAgain = () => {
                    return {
                        ...format,
                        images: image,
                    }
                }
                setDataArena(formatDataAgain());
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    } , []);
    
    const letterCapital = (string) => {
        return string?.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    }

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
            size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <Container fluid style={{padding: "3rem"}}>
            <Row>
                <Col xs={"auto"}>
                    <h2 className="label-title">
                        {dataArena.title}
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col xs={"auto"}>
                    <span style={{alignSelf: 'center'}}>
                        <LocationOnIcon />
                        {`${letterCapital(dataArena.city)}, ${letterCapital(dataArena.departament)}`}
                    </span>
                </Col>
                <Col style={{display: "flex",justifyContent: "end" }}>
                    <span style={{alignSelf: 'center'}}>
                        <ShareIcon />
                        Compartir
                    </span>
                    <span style={{alignSelf: 'center'}}>
                        <IconButton aria-label="favorite" onClick={handleClickFavorite}>
                            {isFavorite ? 
                                <FavoriteIcon style={{color: "red"}} /> : 
                                <FavoriteBorderOutlinedIcon style={{color: "#27272E"}}/>}
                        </IconButton>
                        Favorito
                    </span>
                </Col>
            </Row>
            <br />
            <Row>
                <ImageList
                    sx={{ borderRadius: "10px" ,width: "100%", height: 500 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {dataArena?.images?.map((item, index) => {
                        return (
                            <ImageListItem 
                                key={index} 
                                cols={item.cols || 1} 
                                rows={item.rows || 1}
                            >
                                <img
                                    onClick={() => setOpenModalCarousel(true)}
                                    {...srcset(item.src, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </Row>
            <br />
            <Col xs={"auto"}>
                <Row>
                    <h4 className="label-title">{`Escenario de fútbol ${dataArena.surface_type?.toLowerCase()}`}</h4>
                </Row>
                <Row>
                    <label>Alberto Tejada</label>
                </Row>
                <hr/>
            </Col>
            <br />
            <Row>
                <p>
                    {dataArena.description}
                </p>
            </Row>
            <br />
            <Row>
                <Col>
                    <h5 className="label-title">Facilidades</h5>
                    <ul>
                        {dataArena.facilities?.map((item, index) => {
                            return <li key={index}>{letterCapital(item)}</li>
                        })}
                    </ul>
                </Col>
            </Row>
            <br />
            <Row>
                <h4 className="label-title">Selecciona Fecha y Hora de Reserva</h4>
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
                    <h2>Cancha Nuevo milenio</h2>
                </Modal.Header>
                <Modal.Body>
                    <CarouselImage src={dataArena.images}/>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ViewArena;
