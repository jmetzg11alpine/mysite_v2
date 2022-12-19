import React from 'react'
import '../styles/datascience.css'

const DataScience = () => {
  return (
    <div className='home-ds-container'>
      <div className='home-ds-title'>
        <h1>Who is a Data Scientist? Can they actually program?</h1>
      </div>
      <div className='home-ds-body'>
        <div className='home-ds-left'>
          <p>
            Aren't they old geezers who teach linear regressions on clean data
            at universities.
          </p>
          <p>
            Aren't they less tech savvy than 14 year old youtubers from India?
          </p>
        </div>
        <div className='home-ds-middle'></div>
        <div className='home-ds-right'>
          <p>
            Or is it a dork who can utilize various tools to find and
            communicate actionable insights hidden in data?
          </p>
        </div>
      </div>
    </div>
  )
}

export default DataScience
