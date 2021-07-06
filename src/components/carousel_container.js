import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { RiArrowDownSLine } from 'react-icons/ri';
import '../css/custom.css';

const CarouselContainer = () => {
    return (
        <div>
            <Carousel fade>
                {/* First Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-container"
                    src={require("../images/Associate.jpg").default}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Associate" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine color="white" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-container"
                    src={require("../images/Git_Automator.jpg").default}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/automate_git" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine color="white" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Third Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-container"
                    src={require("../images/Image_Compression_Tool.jpg").default}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Image-Compression-Tool" target="_blank" rel="noopener noreferrer">
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
