import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { RiArrowDownSLine } from 'react-icons/ri';

const CarouselContainer = () => {
    return (
        <div>
            <Carousel fade>
                {/* First Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/Associate.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Associate" target="_blank">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine color="white" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/sad_girl.jpg")}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/c250.jpg")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContainer
