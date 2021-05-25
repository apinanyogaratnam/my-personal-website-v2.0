import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import { IconButton } from '@material-ui/core';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2>CV</h2>
            <IconButton>
            <AiFillFolderOpen color="black" size="5em"/>
            </IconButton>
        </div>
    )
}

export default Resume