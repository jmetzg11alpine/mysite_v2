import Contact from './components/Contact'
import WorkHistory from './components/WorkHistory'
import './styles/about.css'

const About = () => {
  return (
    <div className='about-container'>
      <h1>About seciton</h1>
      <WorkHistory />
      <Contact />
    </div>
  )
}
export default About
