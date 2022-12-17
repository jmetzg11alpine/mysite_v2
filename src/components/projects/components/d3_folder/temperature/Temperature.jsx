import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'

const TempData = [-3.9, -3, 3, 11.7, 19, 22.4, 24.7, 22.7, 16.4, 8.9, 1.6, -2.3]
const Temperature = () => {
  const svgRef = useRef()
  const [svgHeight, setSvgHeight] = useState(0)
  const [svgWidth, setSvgWidth] = useState(0)
  const TempMin = Math.min(...TempData)
  const TempMax = Math.max(...TempData)
  const DataLength = TempData.length
  const COLOR_SCALE = d3
    .scaleLinear()
    .domain([TempMin, TempMax])
    .range(['skyblue', 'orange'])
  const X_TIME_SCALE = d3
    .scaleTime()
    .domain([new Date(2022, 0), new Date(2022, `${DataLength - 1}`)])
    .range([30, svgWidth - 30])
  const Y_SCALE = d3
    .scaleLinear()
    .domain([TempMax, TempMin])
    .range([50, svgHeight - 50])
  const monthNames = X_TIME_SCALE.ticks(12).map(
    X_TIME_SCALE.tickFormat(12, '%b')
  )

  d3.select(svgRef.current)
    .select('svg')
    .selectAll('circle')
    .data(TempData)
    .join('circle')
    .attr('cx', (d, i) => X_TIME_SCALE(new Date(2022, i)))
    .attr('cy', (d) => Y_SCALE(d))
    .attr('r', '15')
    .style('fill', (d) => COLOR_SCALE(d))
  d3.select(svgRef.current)
    .select('svg')
    .selectAll('text')
    .data(TempData)
    .join('text')
    .text((d, i) => monthNames[i] + ` ` + d + `\u00b0`)
    .attr('x', (d, i) => X_TIME_SCALE(new Date(2022, i)))
    .attr('y', 0 + 15)
    .style('fill', (d) => COLOR_SCALE(d))
    .style('text-anchor', 'middle')
    .style('font-size', '13')
    .style('font-weight', '500')

  useEffect(() => {
    const container = d3.select(svgRef.current)
    setSvgHeight(parseInt(container.select('svg').style('height')))
    setSvgWidth(parseInt(container.select('svg').style('width')))
  }, [])
  return (
    <div ref={svgRef} id='d3-temp-container'>
      <div id='d3-temp-header'>
        <h1>Moscow</h1>
        <p>Monthly Average High Temperature</p>
        <hr></hr>
      </div>
      <div id='d3-temp-chart'>
        <svg></svg>
      </div>
    </div>
  )
}

export default Temperature
