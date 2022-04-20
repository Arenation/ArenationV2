import React, { useState } from "react";
import "../../../styles/components/home/body.css";
import "../../../styles/fontstyles/textfonts.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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

    const selectStyle = {};
    return (
        <>
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
                            // renderValue={(selected) => {
                            //     if (selected.length === 0) {
                            //         return (
                            //             <p className="select-placeholder">
                            //                 Seleccionar Ubicación
                            //             </p>
                            //         );
                            //     }

                            //     return selected.join(", ");
                            // }}
                            onChange={handleChangeLocation}
                        >
                            {location.map((item) => {
                                return <MenuItem value={item}>{item}</MenuItem>;
                            })}
                        </Select>
                    </div>
                    <div className="input-wrapper">
                        <h5 className="input-body-h5">Deporte</h5>
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
                        {/* <span style={{ marginTop: 40 }}>.</span> */}
                    </button>
                </div>
                <h3 className="copy-header">
                    ¿Aún no sabes lo que buscas? ¡No hay problema!
                </h3>
                <button className="btn-primary">
                    Ver todos los escenarios
                </button>
            </div>
        </>
    );
};

export default Home;
