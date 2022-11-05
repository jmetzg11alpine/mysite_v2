import LoadData from './LoadData'
import LoadStats from './LoadStats'
import FindCategories from './FindCategories.js'

// const ChartPrepper = (city) => {
//   const data = LoadData()
//   const stats = LoadStats()
//   if (city) {
//     while (tryAgain) {}
//     return FindCategories(city, data, stats)
//   }
// }

const ChartPrepper = (city) => {
  const data = LoadData()
  const stats = LoadStats()
  let tryAgain = true
  if (city) {
    while (tryAgain) {
      try {
        tryAgain = false
        return FindCategories(city, data, stats)
      } catch {
        console.log('did not load data quick enough')
      }
    }
  }
}

export default ChartPrepper

// return FindCategories(city, data, stats)
