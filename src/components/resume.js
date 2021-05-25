import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import { IconButton } from '@material-ui/core';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2>CV</h2>
            <IconButton>
                <a href="https://docs.google.com/document/d/1F_YVKP-nQvnLS7id_M-wbTrUz2GtYjNOo9oeTcnDTzQ/edit?usp=sharing">
                    <AiFillFolderOpen color="black" size="5em"/>
                </a>
            </IconButton>
        </div>
    )
}

export default Resume