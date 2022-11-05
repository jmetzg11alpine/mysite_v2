import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styles.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Livability = () => {
  return (
    <>
      <div className='nav-livability'>
        <Link to='' style={linkStyle}>
          Cities
        </Link>
        |
        <Link to='data_flow' style={linkStyle}>
          Data Flow
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Livability
