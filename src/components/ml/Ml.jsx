import { Link, Outlet } from 'react-router-dom'
import './styles.css'
const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Ml = () => {
  return (
    <>
      <div className='nav-ml'>
        <Link to='' style={linkStyle}>
          NLP
        </Link>
        -
        <Link to='image' style={linkStyle}>
          Image Recognition
        </Link>
      </div>
      <Outlet />
    </>
  )
}
export default Ml
