import PropTypes from 'prop-types'
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header-icon">
            <h1>{title}</h1>
                <div className="header-icon">
                    <FaLinkedin />
                    <FaGithubSquare />
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaTwitterSquare />
                    <MdEmail />
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