import { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import './styles.css'

const VehicleDepreciation = () => {
  const svgRef = useRef()
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)
  const [cost, setCost] = useState('')
  const [rate, setRate] = useState('')

  const handleClick = () => {
    const POWER_SCALE = d3
      .scalePow()
      .exponent(`${1 - rate / 100}`)
      .domain([`${cost}`, 0])
      .range([svgWidth, 0])
    const POWER_COLOR_SCALE = d3
      .scalePow()
      .exponent(`${1 - rate / 100}`)
      .domain([`${cost}`, 0])
      .range(['green', 'pink'])
    let yearlyValue = []
    let temp_cost = cost * 1
    while (temp_cost > 1000) {
      temp_cost = Math.pow(temp_cost, 1 - rate / 100)
      yearlyValue.push(Math.round(temp_cost))
    }
    d3.select(svgRef.current)
      .select('svg')
      .selectAll('rect')
      .data(yearlyValue)
      .join('rect')
      .attr('width', (d) => POWER_SCALE(d))
      .attr('height', svgHeight / yearlyValue.length - 5)
      .attr('x', '0')
      .attr('y', (d, i) => (i * svgHeight) / yearlyValue.length + 2)
      .style('fill', (d) => POWER_COLOR_SCALE(d))
    d3.select(svgRef.current)
      .select('svg')
      .selectAll('text')
      .data(yearlyValue)
      .join('text')
      .text((d, i) => `At year ${i + 1}: $${d}`)
      .attr('x', (d) => POWER_SCALE(d) + 10)
      .attr(
        'y',
        (d, i) =>
          (i * svgHeight) / yearlyValue.length +
          svgHeight / yearlyValue.length / 1.8
      )
      .attr('fill', (d) => POWER_COLOR_SCALE(d))
      .style('font-size', '12')
      .style('font-weight', '700')
  }

  useEffect(() => {
    const container = d3.select(svgRef.current)
    setSvgWidth(parseInt(container.select('svg').style('width'), 10))
    setSvgHeight(parseInt(container.select('svg').style('height'), 10))
  }, [])
  return (
    <div ref={svgRef} id='d3-vh-container'>
      <div>
        <h1>Depreciation Value of Cars</h1>
      </div>
      <div id='d3-vh-header'>
        <label for='cost'>Vehicle Cost ($):</label>
        <input
          type='text'
          id='d3-vh-cost'
          onChange={(e) => setCost(e.target.value)}
        />
        <label for='rate'>Exponential Depreciation Rate (%):</label>
        <input
          type='text'
          id='d3-vh-rate'
          onChange={(e) => setRate(e.target.value)}
        />
        <button onClick={handleClick}>Check</button>
      </div>
      <div id='d3-vh-charts'>
        <svg></svg>
      </div>
    </div>
  )
}

export default VehicleDepreciation
