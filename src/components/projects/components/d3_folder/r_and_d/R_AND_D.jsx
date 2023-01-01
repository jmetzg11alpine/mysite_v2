import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './styles.css'

const R_AND_D = () => {
  const [text, setText] = useState('select a slice')
  const svgRef = useRef()

  function handleHover(e, d) {
    setText(d.industry + ': ' + d.percentage + '%')
    d3.select(svgRef.current).select('#d3-rd-output h2').style('color', d3.schemeTableau10[d.id])
    d3.select(this).style('stroke', 'black').style('stroke-width', '2')
  }

  function handleLeave(e, d) {
    d3.select(this).style('stroke', 'none').style('stroke-width', '0')
  }

  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    svg.selectAll('*').remove()
    d3.csv('https://raw.githubusercontent.com/chethankambi/master-d3.js-with-25-projects-and-concepts/main/shapes/arcs/prj_globalRD.csv', (d) => {
      return {
        industry: d.Industry,
        percentage: Number(d.Percentage),
      }
    }).then((data) => {
      const svgWidth = parseInt(svg.style('width'))
      const svgHeight = parseInt(svg.style('height'))
      const CUMSUM = d3.cumsum(data, (d) => d.percentage)
      const SUM = d3.sum(data, (d) => d.percentage)
      data.forEach((obj, index) => {
        obj.startAngle = index === 0 ? 0 : (CUMSUM[index - 1] / SUM) * Math.PI * 2
        obj.endAngle = (CUMSUM[index] / SUM) * Math.PI * 2
        obj.innerRadius = (svgWidth / 2) * 0.1
        obj.outerRadius = (svgWidth / 2) * 0.9
        obj.id = index
      })
      const DONUT_G = svg
        .append('g')
        .attr('id', 'donutG')
        .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`)
      DONUT_G.selectAll('path')
        .data(data)
        .join('path')
        .attr(
          'd',
          d3
            .arc()
            .innerRadius((d) => d.innerRadius)
            .outerRadius((d) => d.outerRadius)
            .startAngle((d) => d.startAngle)
            .endAngle((d) => d.endAngle)
            .padAngle(0.01)
            .cornerRadius(5)
        )
        .style('fill', (d, i) => d3.schemeTableau10[i])
      data.forEach((obj, index) => {
        let [x, y] = d3.arc().centroid({
          innerRadius: obj.outerRadius + 12,
          outerRadius: obj.outerRadius + 12,
          startAngle: obj.startAngle,
          endAngle: obj.endAngle,
        })
        DONUT_G.append('text')
          .text(obj.percentage + '%')
          .attr('x', x)
          .attr('y', y)
          .style('text-anchor', 'middle')
          .style('font-weight', '600')
          .style('font-size', '10')
          .style('fill', d3.schemeTableau10[index])
      })
      DONUT_G.selectAll('path').style('cursor', 'pointer')
      DONUT_G.selectAll('path').on('mouseover', handleHover).on('mouseleave', handleLeave)
    })
  }, [])
  return (
    <div ref={svgRef} id='d3-rd-container'>
      <div id='d3-rd-header'>
        <h2>Global R&D Spending in 2022, by Industry</h2>
        <p>Spending is in percent values</p>
      </div>
      <hr />
      <div id='d3-rd-chart'>
        <svg></svg>
      </div>
      <hr />
      <div id='d3-rd-output'>
        <h2>{text}</h2>
      </div>
      <hr />
    </div>
  )
}

export default R_AND_D
