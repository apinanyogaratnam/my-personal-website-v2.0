import PropTypes from 'prop-types'
// import Button form './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        
        <header className="header">
            <h1>{title}</h1>
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