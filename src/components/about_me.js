import React from 'react'
import '../App.css'

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>
            My name is Apinan Yogaratnam currently persuing a Bachelors degree in Science. My field of study is Mathematics and Statistics.
            </p>
            <img className="image-of-me" src={require("../images/head_and_body_shot.jpg")} alt="Image of Apinan Yogaratnam in Pink Shirt" />
        </div>
    )
}

export default AboutMe