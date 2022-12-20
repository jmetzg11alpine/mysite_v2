import { useState, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'

const BB = () => {
  const [one, setOne] = useState('0')
  const [two, setTwo] = useState('0')
  const [three, setThree] = useState('0')
  const svgRef = useRef()

  const handleClick = () => {
    d3.select(svgRef.current).select('svg').selectAll('*').remove()
    if (one === '0' && two === '0' && three === '0') {
      d3.select(svgRef.current)
        .select('svg')
        .append('text')
        .text('you did not play a game')
        .attr('x', '300')
        .attr('y', '100')
        .style('text-anchor', 'middle')
        .style('fill', 'orange')
    } else {
      const colorScale = d3
        .scaleOrdinal()
        .domain([0, 1, 2])
        .range(['#fff176', '#ffd54f', '#ffb74d'])
      console.log(colorScale(0))
      console.log(colorScale(1))
      console.log(colorScale(2))
      const radiusScale = d3
        .scaleLinear()
        .domain([0, Math.max(one * 1, two * 2, three * 3)])
        .range([0, 100])
      d3.select(svgRef.current)
        .select('svg')
        .selectAll('circle')
        .data([one * 1, two * 2, three * 3])
        .join('circle')
        .attr('cx', (d, i) => 100 + i * 200)
        .attr('cy', '100')
        .attr('r', (d) => radiusScale(d))
        .style('fill', (d, i) => colorScale(i))
      d3.select(svgRef.current)
        .select('svg')
        .selectAll('text')
        .data([one * 1, two * 2, three * 3])
        .join('text')
        .attr('x', (d, i) => 100 + i * 200)
        .attr('y', '105')
        .text((d) => `${d} points`)
        .style('text-anchor', 'middle')
    }
  }

  return (
    <div ref={svgRef} id='d3-bb-container'>
      <h2>Basketball Points Proportions</h2>
      <div id='d3-bb-inputs'>
        <div className='d3-bb-input-container'>
          <label># of 1 pointers</label>
          <input type='text' onChange={(e) => setOne(e.target.value)} />
        </div>
        <div className='d3-bb-input-container'>
          <label># of 2 pointers</label>
          <input type='text' onChange={(e) => setTwo(e.target.value)} />
        </div>
        <div className='d3-bb-input-container'>
          <label># of 3 pointers</label>
          <input type='text' onChange={(e) => setThree(e.target.value)} />
        </div>
      </div>
      <button onClick={handleClick}>Check Proportions</button>
      <hr />
      <div id='d3-bb-output'>
        <svg></svg>
      </div>
      <hr />
    </div>
  )
}
export default BB
