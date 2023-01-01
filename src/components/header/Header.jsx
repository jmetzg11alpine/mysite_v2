import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo-container'>
        <p>JM</p>
      </div>
      <div className='header-link-container'>
        <Link to='/' className='header-link'>
          Home
        </Link>
        <Link to='/ml' className='header-link'>
          ML
        </Link>
        <Link to='/livability' className='header-link'>
          Livability
        </Link>
        <Link to='/quiz' className='header-link'>
          Quiz
        </Link>
        <Link to='/stocks' className='header-link'>
          Stocks
        </Link>
        <Link to='/projects' className='header-link'>
          Projects
        </Link>
        <Link to='/about' className='header-link'>
          About
        </Link>
      </div>
    </div>
  )
}

export default Header
