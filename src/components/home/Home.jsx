import React from 'react'
import './styles/home.css'
import Pictures from './Pictures'

const Home = () => {
  return (
    <div className='home-container'>
      <p>Thanks for visiting my Data Science site.</p>
      <p>
        But what is a Data Scientist? Can they actually program? Aren't they
        more like old geezers who teach linear regressions on clean data at a a
        propoganda{' '}
        <a href='https://sais.jhu.edu/' rel='noreferrer' target='_blank'>
          institution
        </a>{' '}
        of higher education. Aren't they less tech savy than 14 year old
        youtubers from India? Or is it a dork who can utilize various tools to
        find and communicate actionable insights hidden in data?
      </p>
      <p>
        Here is were I would like to show some of my other tools. There are
        complex data visualizations, interactions with databases, backend
        functionality, and typical data science projects all found on this site.
      </p>
      <Pictures />
    </div>
  )
}

export default Home
