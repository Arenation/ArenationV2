import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/fontstyles/textfonts.css";
import "../../styles/main.scss";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavBar from "../../parts/NavBar";
import { SectionSports, SectionLocal } from "./landing/landingSections";

const Home = () => {
    const navigate = useNavigate();
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

    const handleClickViewAllArenas = () => {
        navigate("/visitor/home");
    }

    return (
        <>
            <NavBar />
            <div className="body_header">
                <h1 className="copy-header">
                    Reserva escenarios deportivos cuando quieras y dónde quieras
                </h1>
                <div className="input-body">
                    <div className="input-wrapper">
                        <h5 className="input-body-h5">Ubicación</h5>
                        <Select
                            fullWidth
                            className="input-body-text"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={locationSelected}
                            input={<OutlinedInput value="Ubicación" />}
                            onChange={handleChangeLocation}
                        >
                            {location.map((item) => {
                                return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                        </Select>
                    </div>
                    <div className="input-wrapper">
                        <h5 className="input-body-h5" id="second-input-label">
                            Deporte
                        </h5>
                        <Select
                            fullWidth
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
                    <button className="input-body-button">
                        <SearchOutlinedIcon className="search-icon" />
                    </button>
                </div>
                <h3 className="copy-header">
                    ¿Aún no sabes lo que buscas? ¡No hay problema!
                </h3>
                <button className="btn-primary">
                    Ver todos los escenarios
                </button>
            </div>
            <SectionSports />
            <SectionLocal />
        </>
    );
};

export default Home;
