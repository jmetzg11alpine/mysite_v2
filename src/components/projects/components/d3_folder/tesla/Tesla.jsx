import { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import './styles.css'

const Tesla = () => {
  const teslaContainer = useRef()
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)
  const [data, setData] = useState()
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [power, setPower] = useState('')
  const [range, setRange] = useState('')
  const [cargo, setCargo] = useState('')
  const [maxRange, setMaxRange] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [maxPower, setMaxPower] = useState(0)
  const svg = d3.select(teslaContainer.current).select('svg')
  const BUFFER = 50
  const COLOR = d3.interpolate('#00bbf9', '#f07167')
  const handleClick = (e) => {
    let id = e.target.id
    let index = e.target.className
    let model_data = data.filter((model) => model.id === id)[0]
    setModel(model_data.model)
    setPrice(model_data.price)
    setPower(model_data.power)
    setRange(model_data.range)
    setCargo(model_data.cargoSpace)
    d3.select(teslaContainer.current)
      .select('#d3-tesla-mInfo')
      .selectAll('p')
      .each((d, i, n) => {
        d3.select(n[i]).style('color', COLOR(index / 5))
      })
  }
  d3.select(teslaContainer.current)
    .selectAll('button')
    .each((d, i, n) => {
      d3.select(n[i]).style('background', COLOR((i + 1) / 5))
    })

  const draw = (xAxisScale, yAxisLeftScale, yAxisRightScale) => {
    // making circles for range and price
    svg
      .append('g')
      .attr('id', 'circles')
      .selectAll('cirlce')
      .data(data)
      .join('circle')
      .attr('cx', (d) => xAxisScale(d.price))
      .attr('cy', (d) => yAxisLeftScale(d.range))
      .style('fill', (d, i) => COLOR((i + 1) / 5))
      .style('fill-opacity', '0.8')
      .style('stroke', (d, i) => COLOR((i + 1) / 5))
      .style('stroke-width', '2')
    svg
      .select('#circles')
      .selectAll('circle')
      .transition()
      .duration(1200)
      .attr('r', (d) => d.cargoSpace / 1.75)
    svg
      .append('g')
      .attr('id', 'circlesDots')
      .selectAll('cirlce')
      .data(data)
      .join('circle')
      .attr('cx', (d) => xAxisScale(d.price))
      .attr('cy', (d) => yAxisLeftScale(d.range))
      .style('fill', 'black')
      .attr('r', '2')
    // making rect elements
    svg
      .append('g')
      .attr('id', 'rects')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d) => xAxisScale(d.price))
      .attr('y', (d) => yAxisRightScale(d.power))
      .attr('width', '3')
      .style('fill', (d, i) => COLOR((i + 1) / 5))
    svg
      .select('#rects')
      .selectAll('rect')
      .transition()
      .duration(1200)
      .attr('height', (d) => svgHeight - yAxisRightScale(d.power))
  }

  useEffect(() => {
    const svg = d3.select(teslaContainer.current).select('svg')
    svg.selectAll('*').remove()
    const BUFFER = 50
    setSvgWidth(parseInt(svg.style('width')) - BUFFER)
    setSvgHeight(parseInt(svg.style('height')) - BUFFER)
    const RAW_DATA = d3.csv('https://raw.githubusercontent.com/chethankambi/master-d3.js-with-25-projects-and-concepts/main/fetches/teslaData.csv', (d) => {
      return {
        model: d['Model'],
        price: Number(d['Price']),
        range: Number(d['Range']),
        power: Number(d['Power']),
        cargoSpace: Number(d['Cargo Space']),
        id: 'm' + Array.from(d['Model'])[6],
      }
    })

    RAW_DATA.then((data) => {
      setData(data)
      setMaxRange(d3.greatest(data, (car) => car.range).range)
      setMaxPrice(d3.greatest(data, (car) => car.price).price)
      setMaxPower(d3.greatest(data, (car) => car.power).power)
    })
    // left axis
    const yAxisLeftScale = d3.scaleLinear().domain([maxRange, 0]).range([BUFFER, svgHeight]).nice()
    const yAxisLeft = d3.axisLeft(yAxisLeftScale)
    d3.formatDefaultLocale({
      currency: ['', ' Mi'],
    })
    yAxisLeft.ticks(10, d3.format('$.0f'))
    const yAxisLeftGroup = svg.append('g').attr('id', 'yAxisLeftGroup')
    yAxisLeftGroup.transition().duration(1000).attr('transform', `translate(${BUFFER},0)`)
    yAxisLeft(yAxisLeftGroup)
    // right axis
    const yAxisRightScale = d3.scaleLinear().domain([maxPower, 0]).range([BUFFER, svgHeight]).nice()
    const yAxisRight = d3.axisRight(yAxisRightScale)
    d3.formatDefaultLocale({
      currency: ['', ' Hp'],
    })
    yAxisRight.ticks(15, d3.format('$.0f'))
    const yAxisRightGroup = svg.append('g').attr('id', 'yAxisRightGroup')
    yAxisRightGroup.transition().duration(1000).attr('transform', `translate(${svgWidth},0)`)
    yAxisRight(yAxisRightGroup)
    // bottom axis
    const xAxisScale = d3.scaleLinear().domain([0, maxPrice]).range([BUFFER, svgWidth]).nice()
    const xAxis = d3.axisBottom(xAxisScale)
    d3.formatDefaultLocale({
      currency: ['$', ' '],
    })
    xAxis.ticks(20, d3.format('$.0s'))
    const xAxisGrounp = svg.append('g').attr('id', 'xAxisGroup')
    xAxisGrounp.transition().duration(1000).attr('transform', `translate(0,${svgHeight})`)
    xAxis(xAxisGrounp)

    if (data) {
      draw(xAxisScale, yAxisLeftScale, yAxisRightScale)
    }
  }, [svgWidth, svgHeight, maxPrice, maxPower, maxRange])
  return (
    <div ref={teslaContainer} className='d3-tesla-container'>
      <div id='d3-tesla-header'>
        <h1>Tesla Models Comparison</h1>
        <div id='d3-tesla-mButtons'>
          <button onClick={handleClick} id='mS' className='1'>
            Model S
          </button>
          <button onClick={handleClick} id='m3' className='2'>
            Model 3
          </button>
          <button onClick={handleClick} id='mX' className='3'>
            Model X
          </button>
          <button onClick={handleClick} id='mY' className='4'>
            Model Y
          </button>
        </div>
        <div id='d3-tesla-mInfo'>
          <p>Model: {model}</p>
          <p>Price: ${price}</p>
          <p>Power: {power} Hp</p>
          <p>Range: {range} Miles</p>
          <p>Cargo Space: {cargo} Cu.Ft</p>
        </div>
        <hr />
      </div>
      <div id='d3-tesla-charts'>
        <svg></svg>
      </div>
      <div id='d3-tesla-notes'>
        <p>1. Circles are relationship between Price and Range | Size of the circle represents Cargo Space</p>
        <p>2. Lines are relationshipt between Price and Power</p>
      </div>
    </div>
  )
}

export default Tesla
