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
                    className="d-block w-100"
                    src={require("../images/Associate.jpg").default}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Associate" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine className="icon" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/Git_Automator.jpg").default}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/automate_git" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine className="icon" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Third Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/Image_Compression_Tool.jpg").default}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Image-Compression-Tool" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine className="icon" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fourth Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/Stews-Bot.jpg").default}
                    alt="Fourth slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/Stews-Bot" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine className="icon" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fifth Label */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/journal_my_life.jpg").default}
                    alt="Fourth slide"
                    />

                    <Carousel.Caption>
                    <a href="https://github.com/apinanyogaratnam/journal-my-life" target="_blank" rel="noopener noreferrer">
                        <h3>View Source code on GitHub</h3>
                    </a>
                    <Link to="About"> <RiArrowDownSLine className="icon" size="2em" /> </Link> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContainer
