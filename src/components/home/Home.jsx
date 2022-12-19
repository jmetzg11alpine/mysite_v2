import React from 'react'
import './home.css'
import Directory from './components/Directory'
import DataScience from './components/DataScience'
// import Pictures from './components/Pictures'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-intro'>
        <p>
          <b>Introduction:</b> This is the web-site of a Data Scientist. A rare
          phenomenon to see them code outside of a jupyter notebook.
        </p>
      </div>
      <Directory />
      <DataScience />
    </div>
  )
}

export default Home
