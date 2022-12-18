import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './styles.css'

const employees = [466000, 101000, 334600, 281000, 740315, 73700, 300000]
const companies = [
  'Gazprom',
  'Lukoil',
  'Rosneft',
  'Sberbank',
  'R. Railways',
  'Norilsk Nickel',
  'Magnit',
]

const Employees = () => {
  const svgRef = useRef()
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)
  const dataMin = Math.min(...employees)
  const dataMax = Math.max(...employees)
  const dataCount = employees.length
  const growthFactor = d3
    .scaleQuantize()
    .domain([dataMin, dataMax])
    .range(['#ff8c61', '#f9cff2', '#a5ae9e'])
  d3.select(svgRef.current)
    .select('svg')
    .selectAll('rect')
    .data(employees)
    .join('rect')
    .attr('height', (d) => d / 1500)
    .attr('width', svgWidth / dataCount - 10)
    .attr('y', (d) => svgHeight - d / 1500 - 25)
    .attr('x', (d, i) => (i * svgWidth) / dataCount)
    .attr('fill', (d) => growthFactor(d))
    .attr('rx', '5')
    .attr('ry', '5')
  d3.select(svgRef.current)
    .select('svg')
    .append('g')
    .selectAll('text')
    .data(employees)
    .join('text')
    .text((d) => d)
    .attr(
      'x',
      (d, i) => (i * svgWidth) / dataCount + svgWidth / dataCount / 2 - 10
    )
    .attr('y', (d) => svgHeight - d / 1500 - 30)
    .style('text-anchor', 'middle')
    .style('fill', 'darkgrey')
    .attr('font-weight', '400')
    .attr('font-size', '14')
  d3.select(svgRef.current)
    .select('svg')
    .append('g')
    .selectAll('text')
    .data(companies)
    .join('text')
    .text((d) => d)
    .attr(
      'x',
      (d, i) => (i * svgWidth) / dataCount + svgWidth / dataCount / 2 - 10
    )
    .attr('y', svgHeight - 5)
    .style('text-anchor', 'start')
    .style('fill', 'darkgrey')
    .style('font-weight', '400')
    .attr('font-size', '14')
    .style('text-anchor', 'middle')
  useEffect(() => {
    setSvgWidth(
      parseInt(d3.select(svgRef.current).select('svg').style('width'))
    )
    setSvgHeight(
      parseInt(d3.select(svgRef.current).select('svg').style('height'))
    )
  }, [])

  return (
    <div ref={svgRef} id='d3-quant-container'>
      <div id='d3-quant-header'>
        <h1>Employee Count at Russian Companies</h1>
        <p>Intensity is represented in the bar's color</p>
      </div>
      <hr></hr>
      <div id='d3-quant-chart'>
        <svg></svg>
      </div>
    </div>
  )
}

export default Employees
