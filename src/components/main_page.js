import React from 'react';
import {Container, Typical, Link, RiArrowDownSLine} from '../imports.js';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MainPage = () => {
    return (
        <div>
            <Container className="text">
            <figure className="position-relative">
                <img className="circular-image img-fluid" src={require("../images/circular_loops.jpg")} alt="Background Image of a Circular Loops" />
                <figcaption>
                        <h1>Hi, I'm Apinan Yogaratnam</h1>
                        <p className="text">I'm a{' '}
                        
                        <Typical 
                        // loop={Infinity} 
                        loop={1}
                        wrapper="b" 
                        steps={[
                            'Software Developer 💻', 1000,
                            'Student at the University of Toronto 🏫', 1000,
                            'McDonald\'s Employee 🍔', 1000,
                            'Software Engineer 👨🏾‍💻', 1000
                        ]}/>

                        </p>
                </figcaption>
            </figure>

            <br /><br /><br />
    
            <Link to="carousel"> <RiArrowDownSLine color="white" size="2em" /> </Link> 

            <br /><br /><br />
            </Container>
        </div>
    )
}

export default MainPage
