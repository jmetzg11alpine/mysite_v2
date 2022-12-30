import { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './styles.css'

const Ranking = () => {
  const svgRef = useRef()
  useEffect(() => {
    const svg = d3.select(svgRef.current).select('svg')
    svg.selectAll('*').remove()
    // svg.select('#d3-ranking-legend2').selectAll('*').remove()
    // svg.select('#d3-ranking-legend1').selectAll('*').remove()
    d3.csv('https://raw.githubusercontent.com/chethankambi/master-d3.js-with-25-projects-and-concepts/main/shapes/symbols/prj_best5Countries.csv', (d) => {
      return {
        country: d.Country.toUpperCase(),
        gdp: Number(d.GDP),
        adv: Number(d.Adventure),
        ci: Number(d['Cultural Influence']),
        ent: Number(d.Entrepreneurship),
        her: Number(d.Heritage),
        pow: Number(d.Power),
      }
    }).then((data) => {
      // usefule variables
      const svgWidth = parseInt(svg.style('width'))
      const svgHeight = parseInt(svg.style('height'))
      const BUFFER = 30
      const yScale = d3
        .scaleLinear()
        .domain([100, 0])
        .range([BUFFER, svgHeight - BUFFER])
      // y axis
      const yAxis = d3.axisLeft(yScale)
      const yAxisG = svg.append('g').attr('id', 'yAxis').attr('transform', `translate(${BUFFER}, 0)`)
      yAxis(yAxisG)
      // x axis
      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.gdp)])
        .range([BUFFER, svgWidth - BUFFER])
      const xAxis = d3.axisBottom(xScale)
      const xAxisG = svg
        .append('g')
        .attr('id', 'xAxis')
        .attr('transform', `translate(0,${svgHeight - BUFFER})`)
      xAxis(xAxisG)
      // minor y axis
      svg
        .append('g')
        .attr('id', 'minorYAxis')
        .attr('transform', `translate(${BUFFER}, ${svgHeight - BUFFER})`)
      for (let i = 500; i <= 5000; i += 500) {
        d3.select('#minorYAxis')
          .append('line')
          .attr('x1', xScale(i) - BUFFER)
          .attr('y1', '0')
          .attr('x2', xScale(i) - BUFFER)
          .attr('y2', -(svgHeight - 2 * BUFFER))
          .style('stroke', 'gray')
          .style('stroke-width', '0.1')
      }
      // minor x axis
      svg.append('g').attr('id', 'minorXAxis').attr('transform', `translate(${BUFFER}, ${svgHeight})`)
      for (let i = 10; i <= 100; i += 10) {
        d3.select('#minorXAxis')
          .append('line')
          .attr('x1', 0)
          .attr('y1', -yScale(i))
          .attr('x2', svgWidth - 2 * BUFFER)
          .attr('y2', -yScale(i))
          .style('stroke', 'gray')
          .style('stroke-width', '0.1')
      }
      // chart
      const CHART = svg
        .append('g')
        .attr('id', 'chart')
        .attr('transform', `translate(${BUFFER}, ${svgHeight - BUFFER})`)
      data.forEach((obj, index) => {
        CHART.append('g').attr('id', `${obj.country}`)
        d3.select(`#${obj.country}`)
          .selectAll('path')
          .data([obj.adv, obj.ci, obj.ent, obj.her, obj.pow])
          .join('path')
          .each((d, i, n) => {
            d3.select(n[i])
              .attr('transform', `translate(${xScale(obj.gdp) - BUFFER}, ${-(svgHeight - BUFFER - yScale(d))})`)
              .attr('d', d3.symbol().type(d3.symbolsFill[i]))
              .style('fill', d3.schemeDark2[index])
          })
        d3.select(`#${obj.country}`)
          .selectAll('text')
          .data([obj.adv, obj.ci, obj.ent, obj.her, obj.pow])
          .join('text')
          .each((d, i, n) => {
            d3.select(n[i])
              .text((d) => d)
              .attr('x', xScale(obj.gdp) - BUFFER - 10)
              .attr('y', (d) => -(svgHeight - BUFFER - yScale(d)) + 3)
              .style('text-anchor', 'end')
              .style('font-size', '10')
              .style('font-weight', '600')
              .style('fill', d3.schemeDark2[index])
          })
      })
      data.forEach((obj, index) => {
        d3.select('#d3-ranking-legend1').append('p').text(obj.country).style('color', d3.schemeDark2[index])
      })
      data.columns.forEach((col, index) => {
        if (index === 0 || index === 1) {
        } else {
          d3.select('#d3-ranking-legend2')
            .append('div')
            .append('svg')
            .attr('width', '20')
            .attr('height', '20')
            .append('path')
            .attr('transform', 'translate(7.5, 9)')
            .attr('d', d3.symbol().type(d3.symbolsFill[index - 2]))
            .style('fill', 'gray')
        }
      })
      d3.select('#d3-ranking-legend2')
        .selectAll('div')
        .each((d, i, n) => {
          d3.select(n[i])
            .append('p')
            .text(data.columns[i + 2])
        })
    })
  }, [])
  return (
    <div ref={svgRef} id='d3-ranking-container'>
      <div id='d3-ranking-header'>
        <h1>Top 5 Countries</h1>
        <p>Scatter Plost showing GDP on x-axis and 5 parameter scores on y-axis</p>
      </div>
      <hr />
      <div id='d3-ranking-chart'>
        <svg></svg>
      </div>
      <hr />
      <div id='d3-ranking-legend1'></div>
      <hr />
      <div id='d3-ranking-legend2'></div>
    </div>
  )
}
export default Ranking
