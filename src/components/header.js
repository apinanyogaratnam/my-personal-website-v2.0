import PropTypes from 'prop-types'
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import React from 'react';
import { IconContext } from 'react-icons/lib';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <div>
                <IconContext.Provider value={{color: 'white'}}>
                
                {/* LinkedIn Icon */}
                <a onClick={()=> window.open("https://www.linkedin.com/in/apinan-yogaratnam/", "_blank")}>
                    <FaLinkedin className="header-icon" />
                </a>

                {/* GitHub Icon */}
                <a onClick={()=> window.open("https://github.com/apinanyogaratnam", "_blank")}>
                    <FaGithubSquare className="header-icon" />
                </a>

                {/* Facebook Icon */}
                <a onClick={()=> window.open("https://www.facebook.com/apinan.yogaratnam.7", "_blank")}>
                    <FaFacebookSquare className="header-icon" />
                </a>

                {/* Instagram Icon */}
                <a onClick={()=> window.open("https://www.instagram.com/apinan.y/", "_blank")}>
                    <FaInstagramSquare className="header-icon" />
                </a>

                {/* Twitter Icon */}
                <a onClick={()=> window.open("https://twitter.com/apiyogaratnam", "_blank")}>
                    <FaTwitterSquare className="header-icon" />
                </a>

                {/* Mail Icon */}
                <a onClick={()=> window.open("mailto: apinanapinan@icloud.com", "_blank")}>
                    <FaMailBulk className="header-icon" />
                </a>

                </IconContext.Provider>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Apinan Yogaratnam',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header