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
                    src={require("../images/Associate.jpg")}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Image-Compression-Tool" target="_blank">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine color="white" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/Associate.jpg")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/automate_git" target="_blank">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine color="white" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContainer
