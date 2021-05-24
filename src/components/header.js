import PropTypes from 'prop-types'
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <div>
                <FaLinkedin className="header-icon" />
                <FaGithubSquare className="header-icon" />
                <FaFacebookSquare className="header-icon" />
                <FaInstagramSquare className="header-icon" />
                <FaTwitterSquare className="header-icon" />
                <FaMailBulk className="header-icon" />
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