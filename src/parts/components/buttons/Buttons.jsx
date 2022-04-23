import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export function SolidButton({disabled, type, text, onClick}) {
    return <button onClick={onClick} disabled={disabled} type={type} className="solid-button">{text}</button>;
}

export function InfoButton({
    disabled, 
    type, 
    text="Agregue información", 
    onClick, 
    title="Agregue un titulo"
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled} 
            type={type} 
            className="info-button"
        >
            <Row>
            <label className="info-button_label">
                {title}
            </label>
            <br/>
            <label className="info-button_label_text">
                {text}
            </label>
            </Row>
        </button>
    );
}
