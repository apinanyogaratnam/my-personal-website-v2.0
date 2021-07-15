import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { RiSnapchatLine, RiStackOverflowLine } from 'react-icons/ri';
import { HiOutlineMail, HiOutlineGlobe } from 'react-icons/hi';
import '../css/custom.css';
// create seperate file for icon imports

const Socials = () => {
    // organize sequence by most important to least important (work to personal)
    return (
        <div className="socials-container">
            <IoLogoInstagram size="2em"/>
            <AiFillGithub size="2em"/>
            <FiTwitter size="2em"/>
            <FiFacebook size="2em"/>
            <HiOutlineGlobe size="2em"/>
            <RiSnapchatLine size="2em"/>
            <FiLinkedin size="2em"/>
            <RiStackOverflowLine size="2em"/>
            <HiOutlineMail size="2em"/>
        </div>
    )
}

export default Socials
