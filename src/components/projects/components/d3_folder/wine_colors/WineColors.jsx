import { useRef, useState } from 'react'
import * as d3 from 'd3'
import './style.css'

const WineColors = () => {
  const [environment, setEnvironment] = useState(0)
  const [sulfur, setSulfur] = useState(0)
  const [wood, setWood] = useState(0)
  const [age, setAge] = useState(0)
  const svgRef = useRef()

  const cementColor = d3
    .scaleSequential()
    .domain([0, 100])
    .interpolator(d3.interpolateReds)

  const domainValue =
    (Number(environment) * 25) / 10 +
    (Number(sulfur) * 1) / 4 +
    (Number(wood) * 25) / 4 +
    (Number(age) * 1) / 2

  const handleClick = () => {
    if (
      environment < 0 ||
      environment > 10 ||
      sulfur < 1 ||
      sulfur > 100 ||
      wood < 1 ||
      wood > 4 ||
      age < 1 ||
      age > 50
    ) {
    } else {
      let dog = d3
        .select(svgRef.current)
        .select('svg rect')
        .attr('fill', cementColor(domainValue))
      d3.select(svgRef.current)
        .select('svg text')
        .text(cementColor(domainValue))
        .attr('x', '10')
        .attr('y', '480')
      console.log(dog)
    }
  }

  return (
    <div>
      <div ref={svgRef} id='d3-cement-container'>
        <div id='d3-cement-input'>
          <label>Environment (0-10)</label>
          <input
            type='text'
            onChange={(e) => setEnvironment(e.target.value)}
          ></input>
          <label>Sulfur Dioxide (1-100)</label>
          <input
            type='text'
            onChange={(e) => setSulfur(e.target.value)}
          ></input>
          <label>Wood Type (1-4)</label>
          <input type='text' onChange={(e) => setWood(e.target.value)}></input>
          <label>Age in years (1-50)</label>
          <input type='text' onChange={(e) => setAge(e.target.value)}></input>
          <button onClick={handleClick}>SUBMIT</button>
        </div>
        <div id='d3-cement-output'>
          <svg>
            <rect></rect>
            <text></text>
          </svg>
        </div>
      </div>
      <h2 id='d3-cement-warning'>
        Made up formula to predict how red a wine will be
      </h2>
    </div>
  )
}

export default WineColors
