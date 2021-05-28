import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import { IconButton } from '@material-ui/core';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2>CV</h2>
            <IconButton>
                <a href="">
                    <AiFillFolderOpen color="white" size="5em"/>
                </a>
            </IconButton>
        </div>
    )
}

export default Resume
