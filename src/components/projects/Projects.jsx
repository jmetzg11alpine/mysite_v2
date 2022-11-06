import { Link } from 'react-router-dom'
import fdiImg from './img/fdi.png'
import sdImg from './img/mts.png'
import bearImg from './img/bear_migration.jpeg'
import stocksImg from './img/stocks.jpeg'
import apartmentImg from './img/moscow_apartments.jpeg'
const projectPaths = ['fdi', 'transport', 'migration', 'stocks', 'apartments']
const projectTitles = [
  'FDI',
  'San Diego Transport',
  'Russian Migration',
  'Stock Strategy',
  'Moscow Apartments',
]
const images = [fdiImg, sdImg, bearImg, stocksImg, apartmentImg]
const Projects = () => {
  return (
    <>
      <h1>Hi loser</h1>
      <div className='project-container'>
        {projectPaths.map((data, i) => (
          <div className='card'>
            <img className='project-image' src={images[i]} alt={data} />
            <h3>{projectTitles[i]}</h3>
            <Link to={data}>View Here</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
