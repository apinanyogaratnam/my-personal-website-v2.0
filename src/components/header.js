import PropTypes from 'prop-types'
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <div>
                <a href="https://www.linkedin.com/in/apinan-yogaratnam/">
                    <FaLinkedin className="header-icon" />
                </a>
                <a href="https://github.com/apinanyogaratnam">
                    <FaGithubSquare className="header-icon" />
                </a>
                <a href="https://www.facebook.com/apinan.yogaratnam.7">
                    <FaFacebookSquare className="header-icon" />
                </a>
                <a href="https://www.instagram.com/apinan.y/">
                    <FaInstagramSquare className="header-icon" />
                </a>
                <a href="https://twitter.com/apiyogaratnam">
                    <FaTwitterSquare className="header-icon" />
                </a>
                <a href="mailto: apinanapinan@icloud.com">
                    <FaMailBulk className="header-icon" />
                </a>
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