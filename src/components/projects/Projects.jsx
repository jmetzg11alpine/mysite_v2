import { Link } from 'react-router-dom'
import D3Img from './img/d3.png'
import fdiImg from './img/fdi.png'
import kaggleImg from './img/kaggle-icon.svg'
import sdImg from './img/mts.png'
import bearImg from './img/bear_migration.jpeg'
import stocksImg from './img/stocks.jpeg'
import apartmentImg from './img/moscow_apartments.jpeg'
import './styles/cards.css'
const projectPaths = [
  'd3_projects',
  'fdi',
  'ds',
  'transport',
  'migration',
  'stocks',
  'apartments',
]
const images = [
  D3Img,
  fdiImg,
  kaggleImg,
  sdImg,
  bearImg,
  stocksImg,
  apartmentImg,
]
const projectTitles = [
  'D3',
  'FDI',
  'Study Guide',
  'San Diego Buses',
  'Russian Migration',
  'Stock Strategy',
  'Moscow Apartments',
]
const descriptionText = [
  'A deep dive into the various functionality of D3.js',
  'Research into which countries receive Foreign Direct Investments and why',
  'A data science reference document inspired by Kaggle',
  'Do bus stops  depend on location or income levels?',
  'Which cities do Russians move to within Russia and why?',
  'A technique that will surely bring you many dreams but few results',
  'Are the most expensive apartments are in the center of Moscow?',
]
const linkStyle = {
  display: 'block',
  textDecoration: 'none',
  transition: '400ms ease-in-out',
}

const Projects = () => {
  return (
    <>
      <div className='project-container'>
        {projectPaths.map((data, i) => (
          <Link
            to={data}
            style={linkStyle}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div key={i} className='card'>
              <img className='project-image' src={images[i]} alt={data} />
              <h3>{projectTitles[i]}</h3>
              <p className='card-description'>{descriptionText[i]}</p>
              <hr className='hr' />
              <div className='link'>View Here</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Projects
