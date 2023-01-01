import { Link, Outlet } from 'react-router-dom'
import './styles.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Stocks = () => {
  return (
    <>
      <div className='nav-stocks'>
        <Link to='' style={linkStyle}>
          My Portfolio
        </Link>
        -
        <Link to='world' style={linkStyle}>
          World Markets
        </Link>
      </div>
      <Outlet />
    </>
  )
}
export default Stocks
