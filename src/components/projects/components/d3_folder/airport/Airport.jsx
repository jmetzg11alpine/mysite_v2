import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'

let raw_data = [
  [2014, 31.83],
  [2015, 30.35],
  [2016, 34.56],
  [2017, 49.24],
  [2018, 45.76],
  [2019, 49.88],
  [2020, 19.4],
  [2021, 30.18],
]

let data = []
raw_data.forEach((d) => {
  let entry = { year: d[0], passengers: d[1] }
  data.push(entry)
})

const Airport = () => {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    svg.selectAll('*').remove()
    // helper variables
    const svgWidth = parseInt(svg.style('width'))
    const svgHeight = parseInt(svg.style('height'))
    const BUFFER = 35
    const maxPassengers = d3.max(data, (d) => d.passengers)
    const minPassengers = d3.min(data, (d) => d.passengers)
    // scales
    const yScale = d3
      .scaleLinear()
      .domain([maxPassengers, minPassengers])
      .range([BUFFER, svgHeight - BUFFER])
      .nice()
    const xScale = d3
      .scaleLinear()
      .domain([data[0].year, data[data.length - 1].year])
      .range([BUFFER, svgWidth - BUFFER])
      .nice()
    // axis
    const yAxis = d3.axisLeft(yScale).ticks(3)
    const yAxisGroup = svg.append('g').attr('id', 'yaxis').attr('transform', `translate(${BUFFER}, 0)`)
    yAxis(yAxisGroup)
    const xAxis = d3.axisBottom(xScale).ticks(8, '.0f')
    const xAxisGroup = svg
      .append('g')
      .attr('id', 'xAxis')
      .attr('transform', `translate(0,${svgHeight - BUFFER})`)
    xAxis(xAxisGroup)
    // area chart
    svg.append('g').attr('id', 'areaChart').attr('transform', `translate(0,${svgHeight})`)
    svg
      .select('#areaChart')
      .selectAll('path')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3.area(
          (d) => xScale(d.year),
          -BUFFER,
          (d) => -(svgHeight - yScale(d.passengers))
        )
      )
      .style('fill', 'tomato')
      .style('fill-opacity', '0.25')
      .style('stroke', 'tomato')
    // text elements
    data.forEach((year) => {
      d3.select('#areaChart')
        .append('text')
        .data([year])
        .join('text')
        .text((d) => d.passengers)
        .attr('x', (d) => xScale(d.year))
        .attr('y', (d) => -(svgHeight - yScale(d.passengers) + 10))
        .style('fill', 'tomato')
        .style('text-anchor', 'middle')
        .style('font-size', '11')
        .style('font-weight', '600')
    })
    data.forEach((year) => {
      d3.select('#areaChart')
        .append('circle')
        .data([year])
        .join('circle')
        .attr('cx', (d) => xScale(d.year))
        .attr('cy', (d) => -(svgHeight - yScale(d.passengers)))
        .attr('r', '3')
        .style('fill', 'tomato')
    })
  }, [])
  return (
    <div ref={svgRef} id='d3-airport-container'>
      <div id='d3-airport-header'>
        <h2>Sheremeyevo Airport </h2>
        <p>Passanger count between 2014 and 2021 in millions</p>
        <hr />
      </div>
      <div id='d3-airport-chart'>
        <svg></svg>
      </div>
    </div>
  )
}

export default Airport
