import * as d3 from 'd3'
import { useRef, useEffect, useState } from 'react'
import './selections.css'

const Selections = () => {
  const [buttonPressed, setButtonPressed] = useState('')
  const d3REF = useRef()

  const handleClick = (e) => {
    setButtonPressed(e.target.value)
  }

  useEffect(() => {
    let svg = d3.select(d3REF.current).selectAll('svg')

    if (buttonPressed === 'first') {
      svg.selectChildren().style('fill', 'whitesmoke')
      svg.selectChild().style('fill', 'blue')
    } else if (buttonPressed === 'all') {
      svg.selectChildren().style('fill', 'red')
    } else if (buttonPressed === 'even') {
      svg.selectChildren().style('fill', 'whitesmoke')
      svg.selectChildren().filter(function (d, i, g) {
        if (i % 2 === 1) {
          return (this.style.fill = 'green')
        } else {
          return this
        }
      })
    } else {
      svg.selectChildren().style('fill', 'whitesmoke')
      svg.selectChildren().filter(function (d, i, g) {
        if (i % 2 === 0) {
          return (this.style.fill = 'orange')
        } else {
          return this
        }
      })
    }
  }, [buttonPressed])
  return (
    <div ref={d3REF} className='selection-container'>
      <div id='selections-title'>
        <h1>Select a Color</h1>
      </div>
      <div className='selections-buttons'>
        <button
          style={{ background: 'blue' }}
          type='submit'
          value='first'
          onClick={handleClick}
        >
          first
        </button>
        <button
          style={{ background: 'red' }}
          type='submit'
          value='all'
          onClick={handleClick}
        >
          all
        </button>
        <button
          style={{ background: 'green' }}
          type='submit'
          value='even'
          onClick={handleClick}
        >
          even
        </button>
        <button
          style={{ background: 'orange' }}
          type='submit'
          value='odd'
          onClick={handleClick}
        >
          odd
        </button>
      </div>
      <div className='selections-circles'>
        <svg width='550' height='150'>
          <circle className='selections-circle' cx='50' cy='50' r='50'></circle>
          <circle
            className='selections-circle'
            cx='150'
            cy='50'
            r='50'
          ></circle>
          <circle
            className='selections-circle'
            cx='250'
            cy='50'
            r='50'
          ></circle>
          <circle
            className='selections-circle'
            cx='350'
            cy='50'
            r='50'
          ></circle>
        </svg>
      </div>
      <div className='selections-squares'>
        <svg width='550' height='150'>
          <rect
            className='selections-square'
            x='5'
            y='5'
            width='90'
            height='90'
          ></rect>
          <rect
            className='selections-square'
            x='105'
            y='5'
            width='90'
            height='90'
          ></rect>
          <rect
            className='selections-square'
            x='205'
            y='5'
            width='90'
            height='90'
          ></rect>
          <rect
            className='selections-square'
            x='305'
            y='5'
            width='90'
            height='90'
          ></rect>
        </svg>
      </div>
      <div className='selections-rects'>
        <svg width='550' height='150'>
          <rect
            className='selections-rectangle'
            x='0'
            y='0'
            width='400'
            height='20'
          ></rect>
          <rect
            className='selections-rectangle'
            x='0'
            y='25'
            width='400'
            height='20'
          ></rect>
          <rect
            className='selections-rectangle'
            x='0'
            y='50'
            width='400'
            height='20'
          ></rect>
          <rect
            className='selections-rectangle'
            x='0'
            y='75'
            width='400'
            height='20'
          ></rect>
        </svg>
      </div>
      <div id='selections-output'>
        <h3>Button Pressed: {buttonPressed}</h3>
      </div>
    </div>
  )
}
export default Selections
