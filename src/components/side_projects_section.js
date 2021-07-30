import React from 'react';

const SideProjectsSection = () => {
    const side_projects_json_data = [
        {
            "title": "Stews Bot",
            "subtitle": "Discord Bot with ML capabilities",
            "image": "bot_image.png",
            "caption": "Synthesized a working discord bot in python for the school’s community computer science discord server. Leveraged the use of OpenAI’s API and TensorFlow packages to create/train models and allow users to use machine learning services to ask questions and receive answers in a relatively quick amount of time."
        }
    ]

    return (
        <div className="side-projects-container">
            <h1>Side Projects</h1>
            <div className="project-container">
                <h4>Project 1</h4>
                <h5 className="project-subtitle">subtitle</h5>
                <div className="image-container">
                    <img></img>
                </div>
                <div className="project-caption-container">
                    <p className="caption-text">Things to say about the project</p>
                </div>
            </div>
            {side_projects_json_data.map(project => {
                return (
                    <div key={"id"} className="project-container">
                        <h4>{project.title}</h4>
                        <hr className="project-hr"/>
                        <h5 className="project-subtitle">{project.subtitle}</h5>
                        <div className="image-container">
                            <img src={require("../images/" + project.image).default} alt="discord-usage-image"/>
                        </div>
                        <div className="project-caption-container">
                            <p className="caption-text">{project.caption}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SideProjectsSection
