import { useState } from 'react'
import './filter.css'

const Filter = ({ newsData, setDate }) => {
  const [buttonActive, setButtonActive] = useState(6)
  const dates = Object.keys(newsData)
  dates.sort()

  const handleClick = (e) => {
    setDate(e.target.innerHTML)
    // e.currentTarget.classList.toggle('state-button-filter-active')
    setButtonActive(e.currentTarget.id)
    console.log(buttonActive)
  }

  return (
    <div className='state-filter-container'>
      {dates.map((d, i) => (
        <button
          key={i}
          id={i}
          className={
            buttonActive === `${i}` ? 'state-button-filter-active' : ''
          }
          onClick={handleClick}
        >
          {d}
        </button>
      ))}
    </div>
  )
}
export default Filter
