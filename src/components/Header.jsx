import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Header = () => {
  return (
    <div className='header'>
      <Link to='/home' style={linkStyle}>
        Home
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
