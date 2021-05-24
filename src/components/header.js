import PropTypes from 'prop-types'
import { FaGithub, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <FaGithub />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <MdEmail />
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