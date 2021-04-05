import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <button style={{ backgroundColor: color}} className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

Button.deafaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.any.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
