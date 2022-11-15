import React from 'react'
import './styles/home.css'
import DataScience from './components/DataScience'
import Pictures from './components/Pictures'

const Home = () => {
  return (
    <div className='home-container'>
      <DataScience />
      <Pictures />
    </div>
  )
}

export default Home
