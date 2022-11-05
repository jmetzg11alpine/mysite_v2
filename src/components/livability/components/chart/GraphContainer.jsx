import { useState } from 'react'
import ChartPrepper from '../chartPrepper/ChartPrepper'
import FitContainer from './FitContainer'
import Selector from './Selector'
import Glossary from '../Glossary'

const GraphContainer = () => {
  const [city, setCity] = useState('Phoenix')
  const [options, setOptions] = useState([])
  let fit = null
  let no_fit = null
  let cityInfo = null
  let data = null
  let fit_direction = null
  let no_fit_direction = null

  const bigObject = ChartPrepper(city)
  fit = bigObject[0].category
  fit_direction = bigObject[0].direction
  no_fit = bigObject[1].category
  no_fit_direction = bigObject[1].direction
  cityInfo = bigObject[2]
  data = bigObject[3]

  return (
    <div className='container'>
      <Selector setCity={setCity} options={options} setOptions={setOptions} />
      <h1 className='city_title'>{city}</h1>
      <div className='box'>
        <div className='fit_container'>
          <h3 className='fit_title'>Resembles other cities</h3>
          <FitContainer
            categories={fit}
            cityInfo={cityInfo}
            data={data}
            city={city}
            fit={1}
            direction={fit_direction}
          />
        </div>
        <div className='fit_container'>
          <h3 className='fit_title'>Doesn't resembles other cities</h3>
          <FitContainer
            categories={no_fit}
            cityInfo={cityInfo}
            data={data}
            city={city}
            fit={0}
            direction={no_fit_direction}
          />
        </div>
      </div>
      <Glossary />
    </div>
  )
}

export default GraphContainer
