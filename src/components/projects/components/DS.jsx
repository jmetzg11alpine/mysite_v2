import '../styles/ds.css'
import guide from '../img/kaggleReference.pdf'
const DS = () => {
  return (
    <div className='ds-container'>
      <h1>Data Science Reference Guide</h1>
      <p>
        While doing data science projects or course work I often found myself
        looking up the same things over and over. In graduate school I noticed
        that many of my classmates who were not familiar with Python would look
        up things in{' '}
        <a
          href='https://stackoverflow.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          stackoverflow
        </a>{' '}
        that I looked up many times before. I thought it would be beneficial to
        all if I made a reference guide. The structure of the reference guide is
        based off of free courses provided by{' '}
        <a
          href='https://www.kaggle.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          kaggle
        </a>
        .
      </p>
      <div className='ds-iframe'>
        <iframe src={guide} />
      </div>
    </div>
  )
}
export default DS
