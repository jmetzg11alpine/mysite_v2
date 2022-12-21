import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import './styles.css'

const enroll_data = {
  1970: {
    female: 3118,
    male: 4249,
  },
  1975: {
    female: 4442,
    male: 5257,
  },
  1980: {
    female: 5474,
    male: 5000,
  },
  1985: {
    female: 5634,
    male: 4962,
  },
  1990: {
    female: 6579,
    male: 5379,
  },
}

const University = () => {
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState()
  const svgRef = useRef()
  const years = Object.keys(enroll_data)
  const female = []
  const male = []
  Object.values(enroll_data).forEach((obj) => female.push(obj.female))
  Object.values(enroll_data).forEach((obj) => male.push(obj.male))
  const scaleColor = d3
    .scaleOrdinal()
    .domain(['femaile', 'male'])
    .range(['#f48fb1', '#90caf9'])
  const yScale = d3
    .scaleLinear()
    .domain([0, Math.max(...female, ...male)])
    .range([0, svgHeight - 60])
  const xScale = d3
    .scaleLinear()
    .domain([0, years.length - 1])
    .range([svgWidth / years.length, svgWidth])
  const yearsText = d3
    .select(svgRef.current)
    .select('svg')
    .append('g')
    .attr('id', 'd3-uni-years')
    .style('fill', 'gray')
    .style('font-weight', '600')
    .style('font-size', '14')
    .style('text-anchor', 'middle')
  yearsText
    .selectAll('text')
    .data(years)
    .join('text')
    .text((d) => d)
    .attr('y', svgHeight - 8)
    .attr('x', (d, i) => xScale(i) - xScale(0) / 2)
  const femaleG = d3
    .select(svgRef.current)
    .select('svg')
    .append('g')
    .attr('id', 'd3-uni-female')
  femaleG
    .selectAll('rect')
    .data(female)
    .join('rect')
    .attr('width', '50')
    .attr('height', (d) => yScale(d))
    .attr('x', (d, i) => xScale(i) - xScale(0) / 2 - 50)
    .attr('y', (d) => svgHeight - yScale(d) - 25)
    .attr('rx', '5')
    .attr('ry', '5')
    .style('fill', () => scaleColor('female'))
  femaleG
    .selectAll('text')
    .data(female)
    .join('text')
    .text((d) => d)
    .attr('x', (d, i) => xScale(i) - xScale(0) / 2 - 25)
    .attr('y', (d) => svgHeight - yScale(d) - 30)
    .style('fill', () => scaleColor('female'))
    .style('font-size', '12')
    .style('font-weight', '500')
    .style('text-anchor', 'middle')

  const maleG = d3
    .select(svgRef.current)
    .select('svg')
    .append('g')
    .attr('id', 'd3-uni-male')
  maleG
    .selectAll('rect')
    .data(male)
    .join('rect')
    .attr('width', '50')
    .attr('height', (d) => yScale(d))
    .attr('x', (d, i) => xScale(i) - xScale(0) / 2 + 2)
    .attr('y', (d) => svgHeight - yScale(d) - 25)
    .attr('rx', '5')
    .attr('ry', '5')
    .style('fill', () => scaleColor('male'))
  maleG
    .selectAll('text')
    .data(male)
    .join('text')
    .text((d) => d)
    .attr('x', (d, i) => xScale(i) - xScale(0) / 2 + 27)
    .attr('y', (d) => svgHeight - yScale(d) - 30)
    .style('fill', () => scaleColor('male'))
    .style('font-size', '12')
    .style('font-weight', '500')
    .style('text-anchor', 'middle')

  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    setSvgWidth(parseInt(svg.style('width')))
    setSvgHeight(parseInt(svg.style('height')))
  }, [])
  return (
    <div ref={svgRef} id='d3-uni-container'>
      <div id='d3-uni-header'>
        <h2>Undergraduate Enrollment in USA</h2>
        <p>
          Female and Male enrollment number in '000s | 1970-1990 every 5 year
          period
        </p>
        <hr />
        <div id='d3-uni-legend'>
          <p id='d3-uni-legend-female'>FEMALE</p>
          <p id='d3-uni-legend-male'>MALE</p>
        </div>
        <hr />
      </div>
      <div id='d3-uni-chart'>
        <svg></svg>
      </div>
    </div>
  )
}

export default University
