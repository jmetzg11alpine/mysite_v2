import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'
import { color } from 'd3'

const Google = () => {
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)
  const Buffer = 25
  const svgRef = useRef()
  const DATA = [64, 71, 21, 62, 62, 83, 41, 40, 60, 60, 49, 38, 84]
  let START_DATE = new Date(2020, 0, 5)
  let END_DATE = new Date(2020, 2, 29)
  const averageSearch = Math.round(d3.mean(DATA))

  useEffect(() => {
    const container = d3.select(svgRef.current).select('svg')
    container.selectAll('*').remove()
    setSvgWidth(parseInt(container.style('width')))
    setSvgHeight(parseInt(container.style('height')))

    // color scale
    const COLOR = d3
      .scaleThreshold()
      .domain([Math.round(d3.mean(DATA))])
      .range(['#aed6f1', '#2874a6'])

    // Y axis scale
    const yAxisScale = d3
      .scaleLinear()
      .domain([Math.max(...DATA), 0])
      .range([Buffer, svgHeight - Buffer])
    // Y axis
    const yAxis = d3
      .axisLeft(yAxisScale)
      .tickSizeOuter(0)
      .tickSizeInner(3)
      .ticks(12)
    // Y axis group
    const yAxisG = container.append('g').attr('id', 'yAxisG')
    // render y axis
    yAxis(yAxisG)
    // Transform y axis group
    yAxisG.attr('transform', `translate(${Buffer}, 0)`)

    // X axis scale
    const xAxisScale = d3
      .scaleTime()
      .domain([
        new Date(START_DATE.setDate(START_DATE.getDate() - 7)),
        new Date(END_DATE.setDate(END_DATE.getDate() + 7)),
      ])
      .range([Buffer, svgWidth - Buffer])
    // X axis
    const xAxis = d3
      .axisBottom(xAxisScale)
      .tickSizeOuter(0)
      .tickSizeInner(3)
      .ticks(DATA.length, '%m/%d')
      .tickPadding(8)
    // X axis group
    const xAxisG = container.append('g').attr('id', 'xAxisG')
    // render x axis
    xAxis(xAxisG)
    // Transform x axis group
    xAxisG.attr('transform', `translate(0, ${svgHeight - Buffer})`)

    // render bars
    let maxBarWidth = xAxisScale(END_DATE) - xAxisScale(new Date(2020, 2, 29))
    maxBarWidth = Math.floor(maxBarWidth) - 2
    DATA.forEach((count) =>
      container.append('g').attr('class', 'pair').data([count])
    )
    const pairG = container.selectAll('.pair')
    pairG.each((d, i, n) => {
      d3.select(n[i])
        .selectAll('rect')
        .data((d) => [d])
        .join('rect')
        .attr('width', maxBarWidth)
        .attr('height', () => svgHeight - Buffer - yAxisScale(d) - 1)
        .attr(
          'x',
          xAxisScale(new Date(START_DATE.setDate(START_DATE.getDate() + 7))) -
            maxBarWidth / 2
        )
        .attr('y', () => yAxisScale(d))
        .attr('rx', '2')
        .attr('ry', '2')
        .style('fill', (d) => COLOR(d))
    })

    // Reset start date  and add text on top
    START_DATE = new Date(2019, 11, 29)
    pairG.each((d, i, n) => {
      d3.select(n[i])
        .selectAll('text')
        .data((d) => [d])
        .join('text')
        .text((d) => d)
        .attr(
          'x',
          xAxisScale(new Date(START_DATE.setDate(START_DATE.getDate() + 7)))
        )
        .attr('y', () => yAxisScale(d) - 5)
        .style('fill', 'grey')
        .style('font-size', '12')
        .style('font-weight', '600')
        .style('text-anchor', 'middle')
    })
  }, [svgHeight, svgWidth])
  return (
    <div ref={svgRef} className='d3-google-container'>
      <div id='d3-google-header'>
        <h2>Google Searches for D3.js Library</h2>
        <hr />
        <p>Weekly data for the time period January 2020 to March 2020</p>
        <p>
          <b>Start:</b> January 05th,2022 | <b>End:</b> March 20th,2020
        </p>
      </div>
      <hr />
      <div id='d3-google-chart'>
        <svg></svg>
      </div>
      <div id='d3-google-note'>
        <p>
          Note: Y-Axis is the count | X-Axis is the week | Average search count
          for the entire period was <b>{averageSearch}</b>
        </p>
      </div>
      <div id='d3-google-legend'>
        <div>
          <div id='d3-google-below'></div>
          <p>Below Average</p>
        </div>
        <div>
          <div id='d3-google-above'></div>
          <p>Above Average</p>
        </div>
      </div>
    </div>
  )
}

export default Google
