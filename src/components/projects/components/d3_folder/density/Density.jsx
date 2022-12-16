import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './density.css'
import top10PopDensity from './prj_popdensity'

// 16.13 of scale video

const Scales = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const svgRef = useRef()

  const DATA_LENGTH = top10PopDensity.length
  const POP_DEN_MIN = 0
  let densityList = []
  top10PopDensity.forEach((country) => densityList.push(country.density))
  const POP_DEN_MAX = Math.max(...densityList)

  const SECOND_LIN_SCALE = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, POP_DEN_MAX])
  const handleClick = () => {
    const output_number = SECOND_LIN_SCALE(input)
    setOutput(Math.round(output_number))
  }

  useEffect(() => {
    let container = d3.select(svgRef.current)

    const SVG_WIDTH = container.select('svg').node().clientWidth
    const SVG_HEIGHT = container.select('svg').node().clientHeight
    const POP_DEN_LIN_SCALE = d3
      .scaleLinear()
      .domain([POP_DEN_MIN, POP_DEN_MAX])
      .range([0, SVG_WIDTH])
    const POP_DEN_COLOR_LIN_SCALE = d3
      .scaleLinear()
      .domain([POP_DEN_MIN, POP_DEN_MAX])
      .range(['antiquewhite', 'tomato'])
    const Y_SCALE = d3
      .scaleLinear()
      .domain([0, DATA_LENGTH - 1])
      .range([0, SVG_HEIGHT - 50])
    container
      .select('svg')
      .selectAll('rect')
      .data(top10PopDensity)
      .join('rect')
      .attr('width', (d) => POP_DEN_LIN_SCALE(d.density))
      .attr('y', (d, i) => 5 + Y_SCALE(i))
      .attr('height', SVG_HEIGHT / DATA_LENGTH - 5)
      .attr('x', '0')
      .style('fill', (d) => POP_DEN_COLOR_LIN_SCALE(d.density))
      .attr('rx', '5')
      .attr('ry', '5')
    container
      .select('svg')
      .selectAll('text')
      .data(top10PopDensity)
      .join('text')
      .text((d) => `${d.country}, ${d.density}`)
      .attr('x', '10')
      .attr('y', (d, i) => 7 + Y_SCALE(i) + SVG_HEIGHT / DATA_LENGTH / 2)
      .style('fill', 'black')
      .style('text-anchor', 'start')
      .style('font-size', '12')
      .style('font-weight', '600')
      .style('letter-spacing', '0.5')
  }, [])

  return (
    <div id='d3-density-container' ref={svgRef}>
      <div id='d3-density-header'>
        <h1>Population Density Chart</h1>
        <p>Top 10 countries with highest population density (in sq.km)</p>
      </div>
      <div id='d3-density-chart'>
        <svg></svg>
      </div>
      <div id='d3-density-output'>
        <h3>
          Enter any number between 0 and 100 to see what number would be scaled
          to the population density. 100 = Mocao, 0 = zero population
        </h3>
        <input
          value={input}
          onInput={(e) => setInput(e.target.value)}
          type='text'
          id='d3-density-scaleinput'
        ></input>
        <button onClick={handleClick} type='submit' id='d3-density-scalesubmit'>
          Get Population Density
        </button>
        <p id='d3-density-scaleoutput'>{output}</p>
      </div>
    </div>
  )
}

export default Scales
