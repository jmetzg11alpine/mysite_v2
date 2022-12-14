import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './controlflow.css'
import dryFruitData from './data'

const ControlFlow = () => {
  let svgRef = useRef()

  useEffect(() => {
    let svg = d3.select(svgRef.current).select('#d3-flow-charts')
    const svgWidth = svg.node().clientWidth
    const svgHeight = svg.node().clientHeight
    svg.attr('viewBox', `0 ${-svgHeight} ${svgWidth} ${svgHeight}`)

    const stackBars = (d3Object, data, index) => {
      let height = 0
      d3Object
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('width', svgWidth / 21)
        .attr('height', (d) => d * 5)
        .attr('x', svgWidth / 21 + index * ((2 * svgWidth) / 21))
        .attr('y', (d, i) => {
          height = height + data[i]
          return -height * 5
        })
        .attr('rx', '10')
        .attr('ry', '10')
        .style('fill', (d, i) => {
          return i === 0 ? 'burlywood' : i === 1 ? 'sandybrown' : 'navajowhite'
        })
      let t = d3Object
        .append('text')
        .data([dryFruitData[index]])
        .join('text')
        .attr('x', svgWidth / 21 + index * ((2 * svgWidth) / 21) - 15)
        .attr('y', '-250')
        .style('writing-mode', 'tb')
        .style('text-anchor', 'middle')
        .text((d) => `${d.name} (${d.carbs}, ${d.fats}, ${d.protein})`)
        .style('fill', 'lightgoldenrodyellow')
        .style('font-weigth')
      console.log(t)
    }

    let allGs = svg.selectAll('g').data(dryFruitData).join('g')

    allGs.each((d, i, n) => {
      const d3Object = d3.select(n[i])
      d3Object.call(stackBars, [d.carbs, d.fats, d.protein], i)
    })
  }, [])

  return (
    <div id='d3-flow-container' ref={svgRef}>
      <div id='d3-flow-header'>
        <h1>Caloric Ratio Split</h1>
        <p>Carbs, Fats and Proteins for 10 Dry Fruits</p>
      </div>
      <svg id='d3-flow-charts'></svg>
      <div id='d3-flow-legend'>
        <div id='d3-flow-legend-one'>CARBS</div>
        <div id='d3-flow-legend-two'>FATS</div>
        <div id='d3-flow-legend-three'>PROTEINS</div>
      </div>
    </div>
  )
}

export default ControlFlow
