import Carousel from 'react-bootstrap/Carousel'

const CarouselImage = ({src}) =>{
    return (
        <div >
            <Carousel 
                slide 
                pause={"hover"}
            >
                {
                    src.map((item,index) => {
                        return (
                            <Carousel.Item interval={2000}>
                                <img
                                    style={{
                                        height: "80vh"
                                    }}
                                    className="d-block w-100"
                                    src={item.src}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export {CarouselImage};