import React from 'react'
import './styles/home.css'
import Directory from './components/Directory'
import DataScience from './components/DataScience'
import Pictures from './components/Pictures'

const Home = () => {
  return (
    <div className='home-container'>
      <Directory />
      <DataScience />
      <Pictures />
    </div>
  )
}

export default Home
