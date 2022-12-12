import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import './joiningdata.css'
import planetData from './planetData'

const JoiningData = () => {
  const [ascending, setAscending] = useState(true)
  const [diametereData, setDiametereData] = useState([])
  const [densityData, setDensityData] = useState([])
  let containerRef = useRef()
  const handleClick = () => {
    setAscending(!ascending)
  }

  useEffect(() => {
    const container = d3.select(containerRef.current)
    let cxValue = 0
    const diameterSVG = container
      .select('#d3-planet-diameter')
      .select('svg')
      .attr('width', '100%')
      .attr('height', '350')
    diameterSVG.selectAll('*').remove()
    const densitySVG = container
      .select('#d3-planet-density')
      .select('svg')
      .attr('width', '100%')
      .attr('height', '300')
    densitySVG.selectAll('*').remove()
    container
      .select('#d3-planet-diameter')
      .select('p')
      .text(`Diameter of the planets in kilometers`)
      .attr('class', 'd3-planet-text-info')
    container
      .select('#d3-planet-density')
      .select('p')
      .text(`Density of the Planets in kilogram per meter cube`)
      .attr('class', 'd3-planet-text-info')
    if (ascending) {
      setDiametereData(planetData.sort((a, b) => a.diameter - b.diameter))
    } else {
      setDiametereData(planetData.sort((a, b) => b.diameter - a.diameter))
    }
    let textXvalues = []
    diameterSVG
      .selectAll('circle')
      .data(diametereData)
      .join('circle')
      .attr('r', (d) => d.diameter / 1000)
      .attr('cy', 150)
      .attr('cx', (d, i, n) => {
        if (i === 0) {
          cxValue = d.diameter / 1000
        } else {
          let prevRadius = Number(d3.select(n[i - 1]).attr('r'))
          cxValue = cxValue + prevRadius + d.diameter / 1000
        }
        let xValue = 75 * (i + 1) + cxValue
        textXvalues.push(xValue)
        return xValue
      })
      .style('fill', (d) => d.color)
    diameterSVG
      .selectAll()
      .append('text')
      .data(diametereData)
      .join('text')
      .attr('x', function (d, i, n) {
        return textXvalues[i]
      })
      .attr('y', function (d, i) {
        return i % 2 === 0 ? '330' : '15'
      })
      .text((d) => `${d.name}: ${d.diameter}`)
      .style('text-anchor', 'middle')
      .style('fill', 'fgb(63,63,63')
      .style('font-size', '13')
      .style('font-weight', 'bold')
    if (ascending) {
      setDensityData(planetData.sort((a, b) => a.density - b.density))
    } else {
      setDensityData(planetData.sort((a, b) => b.density - a.density))
    }
    densitySVG
      .selectAll('rect')
      .data(densityData)
      .join('rect')
      .attr('x', '5')
      .attr('y', function (d, i, n) {
        return i * 30 + 20
      })
      .attr('height', '10')
      .attr('width', function (d, i, n) {
        return d.density / 4
      })
      .style('fill', function (d, i, n) {
        return d.color
      })
    densitySVG
      .selectAll()
      .append('text')
      .data(densityData)
      .join('text')
      .attr('x', '5')
      .attr('y', function (d, i, n) {
        return i * 30 + 14
      })
      .text((d) => `${d.name}: ${d.density}`)
      .style('font-size', '13')
  }, [ascending])
  return (
    <div className='d3-planet-container' ref={containerRef}>
      <div>
        <h1 id='d3-planet-title'>Planets of our Solar System</h1>
        <p className='d3-planet-text'>
          Some basic details of the 9 planets in the solar system (with Pluto).
        </p>
        <p className='d3-planet-text'>sort in ascending or descending order</p>
      </div>
      <div id='d3-planet-charts'>
        <div id='d3-planet-btn-msg'>
          <button id='d3-planet-btn' onClick={handleClick}>
            SORT
          </button>
          {ascending ? (
            <p id='d3-planet-msg'>Ascending</p>
          ) : (
            <p id='d3-planet-msg'>Descending</p>
          )}
        </div>
        <hr className='d3-planet-hr'></hr>
        <div id='d3-planet-diameter'>
          <p></p>
          <svg></svg>
        </div>
        <hr className='d3-planet-hr'></hr>
        <div id='d3-planet-density'>
          <p></p>
          <svg></svg>
        </div>
      </div>
    </div>
  )
}

export default JoiningData
