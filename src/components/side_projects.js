import React from 'react'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GrInProgress } from 'react-icons/gr'

const SidePorjects = () => {
    return (
        <div>
            <h2>Side-Projects</h2>

            <div className="projects-container">

                <button className="project-container">

                {/* Image Compression Tool */}
                <RiGitRepositoryFill size="2em" /> 
                <GrInProgress size="1.8em"/>
                <a href="" onClick={()=> window.open("https://github.com/apinanyogaratnam/Image-Compression-Tool", "_blank")}>
                    <h3>Image Compression Tool</h3>
                </a>

                </button>


                <button className="project-container">

                {/* Git Automator */}
                <RiGitRepositoryFill size="2em" />
                <a href="" onClick={()=> window.open("https://github.com/apinanyogaratnam/automate_git", "_blank")}>
                    <h3>Git Automation</h3>
                </a>
                
                </button>

            </div>

            <div className="projects-container">

                <button className="project-container">

                {/* Password Generator */}
                <RiGitRepositoryFill size="2em" />
                <a href="" onClick={()=> window.open("https://github.com/apinanyogaratnam/password_generator", "_blank")}>
                    <h3>Password Generator</h3>
                </a>

                </button>


                <button className="project-container">

                {/* Python String Methods */}
                <RiGitRepositoryFill size="2em" />
                <a href="" onClick={()=> window.open("https://github.com/apinanyogaratnam/python_string_methods", "_blank")}>
                    <h3>Python String Methods</h3>
                </a>
                
                </button>

            </div>

        </div>
    )
}

export default SidePorjects
