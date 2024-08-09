import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Button.propTypes = {
  children : PropTypes.string,
  disabled : PropTypes.bool,
  to : PropTypes.string,
  type : PropTypes.string,
  onClick : PropTypes.any
}


function Button({children, disabled, to, type, onClick}) {



  const base = 'font-semibold text-sm uppercase inline-block rounded-full tracking-wide text-stone-800 bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed '

  const styles = {
    primary : base + 'py-3 px-4 md:px-6 md:py-4',
    small : base + 'px-4 py-2 md:px-5 md:py-2.5 text-sm',
    round : 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm bg-yellow-300 rounded-full',
    secondary : 'font-semibold text-sm border-2 border-stone-300 uppercase inline-block rounded-full hover:bg-stone-300 tracking-wide text-stone-400 transition-colors duration-300 focus:outline-none focus:ring hover:text-stone-800 focus:bg-stone-300 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5'
  }

  if(to ) return <Link to={to} className={styles[type]}>{children}</Link>
  if(onClick ) return <button onClick={onClick} className={styles[type]}>{children}</button>

  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  )
}

export default Button
