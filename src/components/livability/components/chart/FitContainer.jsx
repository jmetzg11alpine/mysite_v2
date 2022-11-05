import Graph from './Graph'

const get_cat_numbers = (cat, data) => {
  let numbers = []
  for (let i in data) {
    let dataPoint = [data[i]['Name'], data[i][cat]]
    numbers.push(dataPoint)
  }
  return numbers
}

const FitContainer = ({ categories, cityInfo, data, city, fit, direction }) => {
  let category_data = []
  for (let i in categories) {
    let cat = categories[i]
    let cat_data = []
    cat_data.push(get_cat_numbers(cat, data))
    category_data.push(cat_data)
  }
  const getIcon = (category) => {
    if (category === 'income') {
      return (
        <img className='image' src={require('../../data/income.png')} alt='' />
      )
    } else if (category === 'temperature') {
      return (
        <img
          className='image'
          src={require('../../data/temperature.png')}
          alt=''
        />
      )
    } else if (category === 'crime') {
      return (
        <img className='image' src={require('../../data/crime.png')} alt='' />
      )
    } else if (category === 'parking') {
      return (
        <img className='image' src={require('../../data/parking.png')} alt='' />
      )
    } else if (category === 'population') {
      return (
        <img
          className='image'
          src={require('../../data/population.png')}
          alt=''
        />
      )
    } else if (category === 'size') {
      return (
        <img className='image' src={require('../../data/size.png')} alt='' />
      )
    } else if (category === 'stations') {
      return (
        <img
          className='image'
          src={require('../../data/stations.png')}
          alt=''
        />
      )
    } else if (category === 'air') {
      return (
        <img className='image' src={require('../../data/air.png')} alt='' />
      )
    } else {
      return (
        <img className='image' src={require('../../data/ufo.png')} alt='' />
      )
    }
  }
  if (category_data) {
    return (
      <div>
        {category_data.map((data, i) => (
          <div className='graph-container' key={i}>
            <h4 className='graph-title'>
              {getIcon(categories[i])}: {cityInfo[categories[i]]}
            </h4>
            <Graph
              category={categories[i]}
              data={data}
              cityInfo={cityInfo}
              city={city}
              fit={fit}
              direction={direction[i]}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default FitContainer
