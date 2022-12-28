import { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import './styles.css'
let rawData = [
  ['2022/11/02', 27.59],
  ['2022/11/03', 27.8],
  ['2022/11/04', 28.64],
  ['2022/11/07', 29.69],
  ['2022/11/08', 29.99],
  ['2022/11/09', 29.39],
  ['2022/11/10', 30.53],
  ['2022/11/11', 30.04],
  ['2022/11/14', 30.63],
  ['2022/11/15', 31.13],
  ['2022/11/16', 30.88],
  ['2022/11/17', 29.79],
  ['2022/11/18', 30.2],
  ['2022/11/21', 39.75],
  ['2022/11/22', 32.46],
  ['2022/11/23', 32.5],
  ['2022/11/25', 33.5],
  ['2022/11/28', 33.34],
  ['2022/11/29', 33.77],
  ['2022/11/30', 34.3],
]
let data = []
rawData.forEach((d) => {
  let entry = {
    date: new Date(d[0]),
    close: Number(d[1]),
  }
  data.push(entry)
})
const Stocks = () => {
  const [svgWidth, setSvgWidth] = useState()
  const [svgHeight, setSvgHeight] = useState()
  const maxClose = d3.max(data, (d) => d.close)
  const minClose = d3.min(data, (d) => d.close)
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    svg.selectAll('*').remove()
    const BUFFER = 35
    setSvgHeight(parseInt(svg.style('height')) - BUFFER)
    setSvgWidth(parseInt(svg.style('width')) - BUFFER)
    // y axis
    const yAxisScale = d3
      .scaleLinear()
      .domain([maxClose + maxClose * 0.05, minClose - minClose * 0.05])
      .range([BUFFER, svgHeight])
      .nice()
    const yAxis = d3.axisLeft(yAxisScale).ticks(10, d3.format('$'))
    const yAxisGroup = svg.append('g').attr('id', 'yAxis').attr('transform', `translate(${BUFFER}, 0)`)
    yAxis(yAxisGroup)
    // x axis
    const xAxisScale = d3
      .scaleTime()
      .domain([data[0].date, data[data.length - 1].date])
      .range([BUFFER, svgWidth])
      .nice()
    const xAxis = d3.axisBottom(xAxisScale).ticks(9, '%d %b')
    const xAxisGroup = svg.append('g').attr('id', 'xAxis').attr('transform', `translate(0, ${svgHeight})`)
    xAxis(xAxisGroup)
    // path element
    svg
      .append('g')
      .attr('id', 'linechart')
      .selectAll('path')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3
          .line(
            (d) => xAxisScale(d.date),
            (d) => yAxisScale(d.close)
          )
          .curve(d3.curveMonotoneX)
      )
      .style('fill', 'none')
      .style('stroke-width', '1.5')
      .style('stroke', 'cornflowerblue')
    // transition on a path element
    const PATH_LENGTH = d3.select('#linechart path').node().getTotalLength()
    svg.select('#linechart path').style('stroke-dashArray', PATH_LENGTH).style('stroke-dashoffset', PATH_LENGTH).transition().duration(3000).style('stroke-dashoffset', 0)
    // render circle elements
    svg
      .append('g')
      .attr('id', 'lineChartDots')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d) => xAxisScale(d.date))
      .attr('cy', (d) => yAxisScale(d.close))
      .style('fill', 'cornflowerblue')
    svg
      .select('#lineChartDots')
      .selectAll('circle')
      .each((d, i, n) => {
        d3.select(n[i])
          .transition()
          .delay(100 * (i + 1))
          .duration(1000)
          .attr('r', '3')
      })
    // render text elements
    svg
      .append('g')
      .attr('id', 'lineChartText')
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('x', (d) => xAxisScale(d.date))
      .attr('y', (d) => yAxisScale(d.close) - 5)
      .style('fill', (d, i) => {
        if (i === 0) {
          return 'gray'
        }
        if (data[i].close - data[i - 1].close > 0) {
          return 'seagreen'
        } else {
          return 'tomato'
        }
      })
      .style('text-anchor', 'middle')
      .style('font-size', '9')
      .style('font-weight', '600')
    svg
      .select('#lineChartText')
      .selectAll('text')
      .each((d, i, n) => {
        d3.select(n[i])
          .transition()
          .delay(100 * (i + 1))
          .duration(1000)
          .text((d) => d3.format('.2f')(d.close))
      })
  }, [svgWidth, svgHeight, maxClose, minClose])
  return (
    <div ref={svgRef} id='d3-stocks-container'>
      <div id='d3-stocks-header'>
        <h1>iShares Turkey for November 2022</h1>
        <hr />
      </div>
      <div id='d3-stocks-chart'>
        <svg></svg>
      </div>
    </div>
  )
}

export default Stocks
