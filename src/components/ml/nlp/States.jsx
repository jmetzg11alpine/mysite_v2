import axios from 'axios'
import Map from './components/Map'
import { useState, useEffect } from 'react'

const States = () => {
  const [newsData, setNewsData] = useState('')
  const [geoData, setGeoData] = useState('')
  const mapUrl =
    'https://raw.githubusercontent.com/jmetzg11alpine/data-map/main/usa-no-dc-no-purtor-rico.json'
  const newsUrl = 'https://k45bwx.deta.dev/all_data'

  const getNewsData = async (url, setNewsData) => {
    await axios.get(url).then((res) => setNewsData(res.data))
  }
  const getGeoData = async (url, setGeoData) => {
    await axios.get(url).then((res) => setGeoData(res.data.features))
  }

  useEffect(() => {
    getNewsData(newsUrl, setNewsData)
    getGeoData(mapUrl, setGeoData)
  }, [])

  return (
    <div className='App'>
      <h1>News Articles</h1>
      <p>Most recent New York Times Article for each state</p>
      {newsData.length === 0 || geoData.length === 0 ? (
        <h1>Getting Data...</h1>
      ) : (
        <div>
          <Map newsData={newsData} geoData={geoData} />
        </div>
      )}
    </div>
  )
}
export default States
