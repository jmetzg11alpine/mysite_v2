import { Link, Outlet } from 'react-router-dom'
import './components/styles/nav.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Quiz = () => {
  return (
    <>
      <div className='nav'>
        <Link to='' style={linkStyle}>
          Quizzes
        </Link>
        -
        <Link to='q1' style={linkStyle}>
          Quiz 1
        </Link>
        -
        <Link to='q2' style={linkStyle}>
          Quiz 2
        </Link>
        -
        <Link to='q3' style={linkStyle}>
          Quiz 3
        </Link>
        -
        <Link to='q4' style={linkStyle}>
          Quiz 4
        </Link>
      </div>
      <Outlet />
    </>
  )
}
export default Quiz
