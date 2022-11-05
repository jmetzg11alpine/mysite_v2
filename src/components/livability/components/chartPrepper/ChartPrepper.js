import LoadData from './LoadData'
import LoadStats from './LoadStats'
import FindCategories from './FindCategories.js'

const ChartPrepper = (city) => {
  const data = LoadData()
  const stats = LoadStats()
  if (city) {
    return FindCategories(city, data, stats)
  }
}

export default ChartPrepper
