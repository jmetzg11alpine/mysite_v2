import { useRef, useState } from 'react'
import * as d3 from 'd3'
import './styles.css'

const Air = () => {
  const svgRef = useRef()
  const [input, setInput] = useState(0)
  const [text, setText] = useState('')
  const airQualityScale = d3
    .scaleQuantile()
    .domain([0, 40, 80, 120, 160, 200, 240, 280])
    .range([
      'dodgerblue',
      'mediumseagreen',
      'yellow',
      'orange',
      'tomato',
      'violet',
      'lightgrey',
    ])

  const legend = new Map()
  legend.set('dodgerblue', 'WHO Target')
  legend.set('mediumseagreen', 'Good')
  legend.set('yellow', 'Moderate')
  legend.set('orange', 'Unhealthy For Sensitive Groups')
  legend.set('tomato', 'Unhealthy')
  legend.set('violet', 'Very Unhealthy')
  legend.set('lightgrey', 'Hazardous')

  const handleClick = () => {
    if (input >= 0 && input < 300) {
      d3.select(svgRef.current)
        .select('svg')
        .selectAll('rect')
        .attr('width', '320')
        .attr('height', '50')
        .attr('rx', '5')
        .attr('ry', '5')
        .attr('x', '10')
        .attr('y', '30')
        .style('fill', airQualityScale(input))
      setText(legend.get(airQualityScale(input)))
      d3.select(svgRef.current)
        .select('#d3-air-output')
        .select('p')
        .style('color', airQualityScale(input))
    } else {
      d3.select(svgRef.current).selectAll('rect').style('fill', '#ffffff00')
      setText('number out of range').style('fill', 'lightgrey')
    }
  }

  return (
    <div ref={svgRef} id='d3-air-container'>
      <div id='d3-air-header'>
        <h2>Air Quality Check</h2>
      </div>
      <hr></hr>
      <div id='d3-air-input'>
        <p>Enter a value between 0 and 300</p>
        <hr></hr>
        <p>A value of > 240 will kill you!</p>
        <hr />
        <p>There are 7 air quality stages</p>
        <hr></hr>
        <p>
          Value is Particulate Matter in &micro;g/m<sup>3</sup>
        </p>
        <input type='text' onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Go</button>
      </div>
      <hr />
      <div id='d3-air-output'>
        <svg>
          <rect></rect>
        </svg>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Air
