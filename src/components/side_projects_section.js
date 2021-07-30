import React, {useState} from 'react';

const SideProjectsSection = () => {
    const [style, setStyle] = useState({display: 'none'});

    const side_projects_json_data = [
        {
            "title": "Stews Bot",
            "subtitle": "Discord Bot with ML capabilities",
            "image": "bot_image.png",
            "caption": "Synthesized a working discord bot in python for the school’s community computer science discord server. Leveraged the use of OpenAI’s API and TensorFlow packages to create/train models and allow users to use machine learning services to ask questions and receive answers in a relatively quick amount of time.",
            "source": "https://github.com/apinanyogaratnam/Stews-Bot"
        },
        {
            "title": "Stews Bot",
            "subtitle": "Discord Bot with ML capabilities",
            "image": "bot_image.png",
            "caption": "Synthesized a working discord bot in python for the school’s community computer science discord server. Leveraged the use of OpenAI’s API and TensorFlow packages to create/train models and allow users to use machine learning services to ask questions and receive answers in a relatively quick amount of time.",
            "source": "https://github.com/apinanyogaratnam/Stews-Bot"
        }
    ]

    const Item = ({ project }) => {
        const [style, setStyle] = useState({display: 'none'});

        return (
            <a onClick={()=> window.open(project.source, "_blank")}>
                <div key={"id"} className="project-container"
                    onMouseEnter={e => {
                        setStyle({
                            position: 'absolute',
                            top: '50%',
                            marginLeft: '25px',
                            color: 'white'
                        })
                    }}
                    onMouseLeave={e => {
                        setStyle({display: 'none'})
                    }}
                >
                    <h4>{project.title}</h4>
                    <h5 className="project-subtitle">{project.subtitle}</h5>
                    <hr className="project-hr"/>
                    <div className="image-container">
                        <img className="image-object" src={require("../images/" + project.image).default} alt="discord-usage-image"/>
                        <h4 style={style}>View Source Code</h4>
                    </div>
                    <div className="project-caption-container">
                        <p className="caption-text">{project.caption}</p>
                    </div>
                    <div className="project-links">
                        {/* <a href={project.source}>Source Code</a> */}
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div className="side-projects-container">
            <h1>Side Projects</h1>
            {side_projects_json_data.map(project => {
                return (
                    <a onClick={()=> window.open(project.source, "_blank")}>
                        <div key={"id"} className="project-container"
                            onMouseEnter={e => {
                                setStyle({
                                    position: 'absolute',
                                    top: '50%',
                                    marginLeft: '25px',
                                    color: 'white'
                                })
                            }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                        >
                            <h4>{project.title}</h4>
                            <h5 className="project-subtitle">{project.subtitle}</h5>
                            <hr className="project-hr"/>
                            <div className="image-container">
                                <img className="image-object" src={require("../images/" + project.image).default} alt="discord-usage-image"/>
                                <h4 style={style}>View Source Code</h4>
                            </div>
                            <div className="project-caption-container">
                                <p className="caption-text">{project.caption}</p>
                            </div>
                            <div className="project-links">
                                {/* <a href={project.source}>Source Code</a> */}
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default SideProjectsSection
