import React from 'react'
import '../App.css'
import Resume from './index.js';

const AboutMe = () => {
    return (
        <div id="About">
            <h1>About Me</h1>
            <p>
            My name is Apinan Yogaratnam currently persuing a Bachelors degree in Science. My field of study is Mathematics and Statistics.
            </p>
            <Resume />
            <img className="image-of-me" src={require("../images/head_shot.png").default} alt="Apinan Yogaratnam in Pink Shirt" />
        </div>
    )
}

export default AboutMe
