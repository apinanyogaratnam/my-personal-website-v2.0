import React from 'react'
import '../css/custom.css';

const Resume = () => {
    const resume_link = "https://drive.google.com/file/d/1RF8Kjd7INjPSKsvQLISNwa2SqWiJCGTQ/view?usp=sharing";

    return (
        <div>
            <button onClick={()=> window.open(resume_link, "_blank")}>
                Resume
            </button>
        </div>
    )
}

export default Resume
