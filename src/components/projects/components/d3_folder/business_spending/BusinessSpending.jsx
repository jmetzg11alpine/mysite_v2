import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './styles.css'

const BusinessSpending = () => {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    svg.selectAll('*').remove()
    const BUFFER = 35
    d3.csv('https://raw.githubusercontent.com/chethankambi/master-d3.js-with-25-projects-and-concepts/main/shapes/radialLines/prj_businessOutreach.csv', (d) => {
      return {
        month: d['Month'].substring(0, 3).toUpperCase(),
        mktg: Number(d.Marketing),
        sales: Number(d.Sales),
        dMktg: Number(d['Digital Marketing']),
      }
    }).then((data) => {
      const MAX_MKTG = d3.max(data, (d) => d.mktg)
      const MAX_SALES = d3.max(data, (d) => d.sales)
      const MAX_DMKTG = d3.max(data, (d) => d.dMktg)
      const MAX_VALUE = d3.max([MAX_MKTG, MAX_SALES, MAX_DMKTG])
      const SVG_WIDTH = parseInt(svg.style('width'))
      const MAX_RADIUS = SVG_WIDTH / 2 - BUFFER
      // centering into the middle of the svg
      svg
        .append('g')
        .attr('id', 'radialChart')
        .attr('transform', `translate(${SVG_WIDTH / 2}, ${SVG_WIDTH / 2})`)
      // Radial Scale
      const RADIAL_SCALE = d3.scaleLinear().domain([0, MAX_VALUE]).range([0, MAX_RADIUS])
      // Radial Line
      const RADIAL_LINE = d3
        .lineRadial()
        .angle((d) => d[0] * (Math.PI / 180))
        .radius((d) => RADIAL_SCALE(d[1]))
      const ANGLE = 360 / data.length
      // making month lines
      data.forEach((spend, index) => {
        svg
          .select('#radialChart')
          .append('path')
          .attr('id', `axisMonth${index}`)
          .attr(
            'd',
            RADIAL_LINE([
              [index * ANGLE, 0],
              [index * ANGLE, MAX_VALUE],
            ])
          )
          .style('fill', 'none')
          .style('stroke-width', '0.5')
          .style('stroke', 'lightgray')
        // making transition
        const PATH_LENGTH = svg.select(`#axisMonth${index}`).node().getTotalLength()
        svg.select(`#axisMonth${index}`).style('stroke-dasharray', PATH_LENGTH).style('stroke-dashoffset', PATH_LENGTH).transition().duration(2000).style('stroke-dashoffset', 0)
        const PATH = RADIAL_LINE([
          [index * ANGLE, 0],
          [index * ANGLE, MAX_VALUE],
        ])
        const SELECT_INDEX = PATH.indexOf('L')
        const SELECT_POSITION = PATH.slice(SELECT_INDEX + 1)
        let [X, Y] = [...SELECT_POSITION.split(',')]
        svg
          .select('#radialChart')
          .append('text')
          .attr('class', 'axisMonthText')
          .text(() => spend.month)
          .attr('x', X)
          .attr('y', Y)
          .style('text-anchor', 'middle')
          .style('font-size', '9')
          .style('fill', 'white')
          .transition()
          .duration(2000)
          .style('fill', 'gray')
      })
      // creating minor axis
      function createMinorAxis(rad) {
        svg
          .select('#radialChart')
          .append('g')
          .attr('class', 'minorAxis')
          .selectAll('path')
          .data([data])
          .join('path')
          .attr(
            'd',
            d3
              .lineRadial()
              .angle((d, i) => i * ANGLE * (Math.PI / 180))
              .radius(() => RADIAL_SCALE(MAX_VALUE / rad))
              .curve(d3.curveLinearClosed)
          )
          .style('fill', 'none')
          .style('stroke', 'lightgray')
          .style('stroke-width', '0.5')
      }
      createMinorAxis(2)
      createMinorAxis(1)
      // department lines
      function createRadialLine(dept, color) {
        svg
          .select('#radialChart')
          .append('g')
          .attr('id', dept)
          .selectAll('path')
          .data([data])
          .join('path')
          .attr(
            'd',
            d3
              .lineRadial()
              .angle((d, i) => i * ANGLE * (Math.PI / 180))
              .radius((d) => RADIAL_SCALE(d[dept]))
              .curve(d3.curveLinearClosed)
          )
          .style('fill', 'none')
          .style('stroke-width', '2')
          .style('stroke-opacity', '0.65')
          .style('stroke', color)
        const PATH_LENGTH = d3.select(`#${dept} path`).node().getTotalLength()
        svg.select(`#${dept} path`).style('stroke-dasharray', PATH_LENGTH).style('stroke-dashoffset', PATH_LENGTH).transition().delay(1000).duration(2000).style('stroke-dashoffset', 0)
      }
      createRadialLine('mktg', 'orange')
      createRadialLine('sales', 'chocolate')
      createRadialLine('dMktg', 'saddlebrown')
      // department text
      function createValues(dept, color) {
        let DATA_ATTRIBUTE = d3.select(`#${dept}`).select('path').attr('d')
        DATA_ATTRIBUTE = DATA_ATTRIBUTE.slice(1)
        DATA_ATTRIBUTE = DATA_ATTRIBUTE.substring(0, DATA_ATTRIBUTE.length - 1)
        DATA_ATTRIBUTE = DATA_ATTRIBUTE.split('L')
        DATA_ATTRIBUTE.forEach(function (point, index) {
          let SPLIT_POINTS = point.split(',')
          d3.select(`#${dept}`).append('text').text(d3.format('$.2s')(data[index][dept])).attr('x', SPLIT_POINTS[0]).attr('y', SPLIT_POINTS[1]).style('font-size', '11').style('font-weight', '600').style('fill', 'rgba(0,0,0,0)').transition().delay(2000).duration(3000).style('fill', color)
        })
      }
      createValues('mktg', 'orange')
      createValues('sales', 'chocolate')
      createValues('dMktg', 'saddlebrown')
    })
  }, [])
  return (
    <div ref={svgRef} id='d3-business-container'>
      <div id='d3-business-header'>
        <hr />
        <h1>Business Outreach Spending Comparison for FY2022</h1>
        <p>The spending is across - Marketing, Sales, and Digital Marketing</p>
        <hr />
        <div id='d3-business-legend'>
          <p style={{ color: 'orange' }}>MARKETING</p>
          <p style={{ color: 'chocolate' }}>SALES</p>
          <p style={{ color: 'saddlebrown' }}>DIGITAL MARKETING</p>
        </div>
        <hr />
      </div>
      <div id='d3-business-chart'>
        <svg></svg>
      </div>
      <hr />
    </div>
  )
}

export default BusinessSpending
