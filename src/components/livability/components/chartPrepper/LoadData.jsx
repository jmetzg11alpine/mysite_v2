import raw_data from '../../data/cities.csv'
import { csv } from 'd3'
import { useEffect, useState } from 'react'

const LoadData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = (d) => {
      d.Population = +d.Population
      d.size = +d.size
      d.lat = +d.lat
      d.lng = +d.lng
      d.air = +d.air
      d.crime = +d.crime
      d.parking = +d.parking
      d.income = +d.income
      d.stations = +d.stations
      d.ufo = +d.ufo
      d.temp = +d.temp
      return d
    }
    csv(raw_data, row).then(setData)
  }, [])
  return data
}

export default LoadData
