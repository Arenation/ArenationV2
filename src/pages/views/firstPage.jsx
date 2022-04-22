import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import "../../styles/fontstyles/textfonts.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavBar from "../../parts/NavBar";

const Home = () => {
    const [locationSelected, setLocationSelected] = useState("");
    const [sportSelected, setSportSelected] = useState("");

    const location = [
        "Montería",
        "Sahagún",
        "San Pelayo",
        "Cotorra",
        "Planeta Rica",
    ];

    const sport = ["Fútbol", "Fútbol Sala", "Baloncesto", "Voleibol", "Tenis"];

    const handleChangeLocation = (event) => {
        setLocationSelected(event.target.value);
    };
    const handleChangeSport = (event) => {
        setSportSelected(event.target.value);
    };

    return (
        <>
            <NavBar />
            <div className="body_header">
                <h1
                    style={{
                        width: "40%",
                        textAlign: "center",
                        color: "#070928",
                        marginBottom: "2rem",
                    }}
                >
                    Reserva escenarios deportivos cuando quieras y dónde quieras
                </h1>
                <div className="input-body">
                    <div style={{ width: "100%" }}>
                        <h5 className="input-body-h5">Ubicación</h5>
                        <Select
                            className="input-body-text"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={locationSelected}
                            onChange={handleChangeLocation}
                        >
                            {location.map((item) => {
                                return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                        </Select>
                    </div>
                    <div style={{ width: "100%" }}>
                        <h5 className="input-body-h5">Deporte</h5>
                        <Select
                            className="input-body-text"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sportSelected}
                            onChange={handleChangeSport}
                        >
                            {sport.map((item) => {
                                return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                        </Select>
                    </div>
                    <div className="input-body-button">
                        <button>
                            <SearchOutlinedIcon />
                        </button>
                    </div>
                </div>
                <h1
                    style={{
                        marginTop: "3rem",
                        width: "30%",
                        textAlign: "center",
                        color: "#070928",
                    }}
                >
                    ¿Aún no sabes lo que buscas? ¡No hay problema!
                </h1>
                <button className="btn-primary">
                    Ver todos los escenarios
                </button>
            </div>
        </>
    );
};

export default Home;
