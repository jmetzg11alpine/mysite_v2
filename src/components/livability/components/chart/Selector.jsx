import Select from 'react-select'
import { useEffect } from 'react'
import { csv } from 'd3'
import raw_data from '../../data/city_names_only.csv'

const Selector = ({ setCity, options, setOptions }) => {
  useEffect(() => {
    csv(raw_data).then((data) => {
      const cities = []
      const optionsBuilder = []
      for (let i = 0; i < 50; i++) {
        let object = data[i]
        let city = object.Name
        cities.push(city)
      }
      cities.sort()
      for (let i = 0; i < 50; i++) {
        optionsBuilder.push({ value: cities[i], label: cities[i] })
      }
      setOptions(optionsBuilder)
    })
  }, [setOptions])

  const handleChange = (selectedOption) => {
    const city = selectedOption.value
    setCity(city)
  }

  return <Select options={options} onChange={handleChange} />
}

export default Selector
