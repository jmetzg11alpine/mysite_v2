import React from 'react'
import '../styles/datascience.css'
import { BsFillPersonFill } from 'react-icons/bs'

const DataScience = () => {
  return (
    <div className='home-ds-container'>
      <h4 className='home-ds-intro'>
        Who is a Data Scientist? Can they actually program?
      </h4>
      <div className='home-ds-first-bubble'>
        <p className='bubble-text'>
          Aren't they old geezers who teach linear regressions on clean data at
          a propoganda{' '}
          <a href='https://sais.jhu.edu/' rel='noreferrer' target='_blank'>
            institution
          </a>{' '}
          of higher education.
        </p>
      </div>
      <p>
        <div className='home-ds-second-bubble'>
          <p className='bubble-text'>
            Aren't they less tech savvy than 14 year old youtubers from India?
          </p>
        </div>
        <div className='home-ds-third-bubble'>
          <p className='bubble-text'>
            Or is it a dork who can utilize various tools to find and
            communicate actionable insights hidden in data?
          </p>
        </div>
      </p>
      <div className='home-ds-bottom-text'>
        <p>
          This site shows some of my tools in use. There are complex data
          visualizations, interactions with databases, backend functionality,
          and typical data science projects all found on this site.
        </p>
      </div>
      <div className='home-ds-body-container'>
        <BsFillPersonFill
          className='home-ds-body'
          size={'14vw'}
          color={'#00aabb'}
        />
        <div className='home-ds-question-mark'>?</div>
        <div className='home-ds-body-text'>Data Scientist</div>
      </div>
    </div>
  )
}

export default DataScience
