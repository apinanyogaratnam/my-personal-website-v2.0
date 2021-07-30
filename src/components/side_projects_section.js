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
            "title": "Journal My Life",
            "subtitle": "Full Stack Web Application",
            "image": "journalmylifemainpage.png",
            "caption": "Constructed a fully functional Web application which allows users to create a journal, view all public journals created, view theirraw data, and allowed users to view journals either using Google O-Authentication or browse anonymously. This was built all within a week. The front-end was built using React.js. The back-end API was built using Python and Flask.",
            "source": "https://github.com/apinanyogaratnam/journal-my-life"
        },
        {
            "title": "Image Compression Tool",
            "subtitle": "Image manipulator/filterer",
            "image": "imagecompressiontool.png",
            "caption": "Implemented using python to compress several image extensions by analyzing the pixel structure of the image and construct a new layered image without changing the overall composition of the image.",
            "source": "https://github.com/apinanyogaratnam/image-compression-tool"
        }
    ]

    const Project = ({ project }) => {
        const [style, setStyle] = useState({display: 'none'});

        return (
            <div key={"id"} className="project-container"
                onMouseEnter={e => {
                    setStyle({
                        position: 'absolute',
                        top: '50%',
                        marginLeft: '-100px',
                        width: '200px',
                        color: 'black',
                        filter: 'brightness(150%)'
                    })
                }}
                onMouseLeave={e => {
                    setStyle({display: 'none'})
                }}
            >
                <h4 className="project-title">{project.title}</h4>
                <h5 className="project-subtitle">{project.subtitle}</h5>
                <hr className="project-hr"/>
                <div className="image-container">
                    <img className="image-object" src={require("../images/" + project.image).default} alt="discord-usage-image"/>
                    <button style={style} onClick={()=> window.open(project.source, "_blank")}>View</button>
                </div>
                <div className="project-caption-container">
                    <p className="caption-text">{project.caption}</p>
                </div>
                <div className="project-links">
                    {/* <a href={project.source}>Source Code</a> */}
                </div>
            </div>
        );
    }

    return (
        <div className="side-projects-container">
            <h1>Side Projects</h1>
            {side_projects_json_data.map(project => {
                return (
                    <Project project={project} />
                );
            })}
        </div>
    );
};

export default SideProjectsSection
