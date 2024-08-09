import styles from './Button.module.css'
import PropTypes from 'prop-types'


Button.propTypes = {
  onClick : PropTypes.func,
  children : PropTypes.element,
  type : PropTypes.string
}

function Button({onClick, children, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  )
}

export default Button

