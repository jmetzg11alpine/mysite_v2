import { Link } from 'react-router-dom'
import './header.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' style={linkStyle}>
        Home
      </Link>
      |
      <Link to='/ml' style={linkStyle}>
        ML
      </Link>
      |
      <Link to='/livability' style={linkStyle}>
        Livability
      </Link>
      |
      <Link to='/quiz' style={linkStyle}>
        Quiz
      </Link>
      |
      <Link to='/world' style={linkStyle}>
        World
      </Link>
      |
      <Link to='/projects' style={linkStyle}>
        Projects
      </Link>
      |
      <Link to='/about' style={linkStyle}>
        About
      </Link>
    </div>
  )
}

export default Header
