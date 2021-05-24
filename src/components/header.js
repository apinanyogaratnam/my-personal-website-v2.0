import PropTypes from 'prop-types'
import { FaGithub, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <FaGithub />
            <FaFacebookSquare />
            <FaInstagramSquare />
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