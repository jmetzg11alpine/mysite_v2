import { useEffect, useState } from 'react'
import raw_data from '../../data/stats.csv'
import { csv } from 'd3'

const LoadStats = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const row = (d) => {
      d.mean = +d.mean
      d.std = +d.mean
      return d
    }
    csv(raw_data, row).then(setStats)
  }, [])
  return stats
}

export default LoadStats
