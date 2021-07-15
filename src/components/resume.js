import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import { IconButton } from '@material-ui/core';

const Resume = () => {
    let resume_link = "https://docs.google.com/document/d/1F_YVKP-nQvnLS7id_M-wbTrUz2GtYjNOo9oeTcnDTzQ/edit?usp=sharing";

    return (
        <div className="resume-container">
            <h2>CV</h2>
            <IconButton>
                <a onClick={()=> window.open(resume_link, "_blank")}>
                    <AiFillFolderOpen color="white" size="5em"/>
                </a>
            </IconButton>
        </div>
    )
}

export default Resume
