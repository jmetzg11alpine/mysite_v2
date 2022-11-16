import Contact from './components/Contact'
import WorkHistory from './components/WorkHistory'
import './styles/about.css'

const About = () => {
  return (
    <div className='about-container'>
      <h1>
        <WorkHistory />
      </h1>
      <p>
        I thought Moscow would be my home but due to circumstances out of my
        hands I returned to the USA. For professional connection click{' '}
        <a
          href='https://www.linkedin.com/in/jmetzg11/'
          rel='noreferrer'
          target='_blank'
        >
          here
        </a>
        . You can also send a message below.
      </p>
      <Contact />
    </div>
  )
}
export default About
