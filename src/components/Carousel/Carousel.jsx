import Carousel from 'react-bootstrap/Carousel'

const CarouselImage = () =>{
    return (
        <div >
            <Carousel 
                slide 
                pause={"hover"}
            >
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://t2.uc.ltmcdn.com/es/posts/9/6/9/cuanto_mide_un_campo_de_futbol_34969_orig.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Estadio 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.create.vista.com/api/media/medium/371871052/stock-photo-grassy-football-pitch-stadium-sunny?token="
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Estadio 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://t2.uc.ltmcdn.com/es/posts/9/6/9/cuanto_mide_un_campo_de_futbol_34969_orig.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Estadio 3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export {CarouselImage};