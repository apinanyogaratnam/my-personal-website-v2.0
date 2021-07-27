import React from 'react';
import { AiFillGithub, IoLogoInstagram, FiFacebook, FiTwitter, FiLinkedin, 
         RiSnapchatLine, RiStackOverflowLine, HiOutlineGlobe, HiOutlineMail, 
         FaDiscord } from './IconImports'
import '../css/custom.css';
// create seperate file for icon imports

const Socials = () => {
    // front line social links
    const instagram_link = "https://www.instagram.com/apinanyogaratnam/";
    const github_link = "https://github.com/apinanyogaratnam";
    const twitter_link = "https://twitter.com/apiyogaratnam";
    const facebook_link = "https://www.facebook.com/apinan.yogaratnam.7";
    const website_v1_link = "https://apinanyogaratnam.github.io/my-personal-website-v1.0";
    const snapchat_link = "https://www.snapchat.com/add/apinan.y";
    const linkedin_link = "https://www.linkedin.com/in/apinan-yogaratnam/";
    const stackoverflow_link = "https://stackoverflow.com/users/13776723/apinan-yogaratnam";
    const email = "apinanapinan@icloud.com";

    // second line social links
    const twitch_link = "https://www.twitch.tv/stewietheangel";
    const spotify_link = "https://open.spotify.com/user/apinanapinan";
    const steam_link = "https://steamcommunity.com/profiles/76561199123617568";
    const reddit_link = "https://www.reddit.com/user/stewietheangel";
    const youtube_link = "https://www.youtube.com/channel/UChKmTOaRJmU1VJQlDJoskeQ";
    const discord_id = "stewietheangel#6223"

    return (
        <div className="socials-container">
            <a className="icon" onClick={()=> window.open(github_link, "_blank")}>
                <AiFillGithub size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(linkedin_link, "_blank")}>
                <FiLinkedin size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(website_v1_link, "_blank")}>
                <HiOutlineGlobe size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(email, "_blank")}>
                <HiOutlineMail size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(instagram_link, "_blank")}>
                <IoLogoInstagram size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(twitter_link, "_blank")}>
                <FiTwitter size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(facebook_link, "_blank")}>
                <FiFacebook size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(snapchat_link, "_blank")}>
                <RiSnapchatLine size="2em"/>
            </a>
            <a className="icon" onClick={()=> window.open(stackoverflow_link, "_blank")}>
                <RiStackOverflowLine size="2em"/>
            </a>
            <a className="icon" onClick={undefined}>
                <FaDiscord size="2em"/>
            </a>
        </div>
    )
}

export default Socials
