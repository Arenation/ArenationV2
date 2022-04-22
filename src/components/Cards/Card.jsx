import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = ({title, textButton, urlImage}) =>{
    return (
        <Card className="card_container" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={urlImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">{textButton}</Button>
            </Card.Body>
        </Card>
    );
}

export {Cards};