import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './handleEvents.css'
import fordData from './fordData'

const HandlingEvents = () => {
  const [generated, setGenerated] = useState(false)
  const [year, setYear] = useState(0)
  const [quarter, setQuarter] = useState(null)

  let svgRef = useRef()
  let years = new Set()
  fordData.forEach((d) => {
    years.add(d.year)
  })
  years = Array.from(years)
  let yearlyData = []
  years.forEach((year) => {
    let yearSum = 0
    fordData.forEach((d) => {
      if (d.year === year) {
        yearSum += d.truck + d.suv + d.car
      }
    })
    yearlyData.push(yearSum)
  })
  const handleGenerate = () => {
    setGenerated(true)
  }
  const getQuarterlyData = (year) => {
    let quarterlyData = []
    fordData.forEach((d) => {
      if (d.year === Number(year)) {
        quarterlyData.push(d)
      }
    })
    return quarterlyData
  }
  const getVehicleData = (data, quarter) => {
    return data.find((d) => d.quarter === quarter)
  }
  useEffect(() => {
    const container = d3.select(svgRef.current)
    let yearSVG = container.select('#d3-ford-years')
    let quarterSVG = container.select('#d3-ford-quarters')
    let vTypeSVG = container.select('#d3-ford-vehicles')
    if (generated) {
      yearSVG
        .select('svg')
        .selectAll('rect')
        .data(yearlyData)
        .join('rect')
        .attr('y', (d, i, n) => {
          return (
            (parseInt(container.select('#d3-ford-years svg').style('height')) *
              (i + 1)) /
            4
          )
        })
        .attr('x', 0)
        .attr('height', (d, i, n) => {
          return (
            parseInt(container.select('#d3-ford-years svg').style('height')) /
              4 -
            5
          )
        })
        .attr('width', (d) => d / 10000)
        .attr('id', (d, i) => `${years[i]}`)
        .style('fill', (d, i) => {
          if (i === 0) {
            return 'steelblue'
          } else {
            return 'dodgerblue'
          }
        })
        .style('cursor', 'pointer')
      yearSVG.select('p').text('Number of Vehicles')
      yearSVG
        .select('svg')
        .selectAll('text')
        .data(yearlyData)
        .join('text')
        .attr('x', (d) => d / 10000 + 10)
        .attr('y', (d, i) => {
          let barHeight =
            parseInt(container.select('#d3-ford-years svg').style('height')) / 4
          return barHeight * (i + 1) + barHeight / 2
        })
        .text((d, i) => `${years[i]} - ${d}`)
        .style('font-size', '12')
        .style('font-weight', '500')
        .style('fill', 'gray')
      quarterSVG.select('p').text('Click on a year bar for more details')
      yearSVG.selectAll('rect').on('click', function (e, d) {
        setYear(this.id)
      })
    }
    let quarterlyData = getQuarterlyData(year)
    if (year === '2018') {
      quarterSVG.select('p').text(`${year}: Quarterly Break-up`)
    } else if (year === '2019') {
      quarterSVG.select('p').text(`${year}: Quarterly Break-up`)
    }
    if (year > 0) {
      quarterSVG
        .select('svg')
        .selectAll('rect')
        .data(quarterlyData)
        .join('rect')
        .attr('x', '0')
        .attr('y', (d, i, n) => {
          return (
            (parseInt(container.select('#d3-ford-years svg').style('height')) *
              (i + 1)) /
            6
          )
        })
        .attr('height', (d, i, n) => {
          return (
            parseInt(container.select('#d3-ford-years svg').style('height')) /
              6 -
            5
          )
        })
        .attr('width', (d) => {
          return (d.truck + d.suv + d.car) / 1500
        })
        .attr('id', (d) => `${d.quarter}`)
        .style('fill', 'skyblue')
        .style('cursor', 'pointer')
      quarterSVG
        .select('svg')
        .selectAll('text')
        .data(quarterlyData)
        .join('text')
        .attr('x', (d) => {
          return (d.truck + d.car + d.suv) / 1500 + 10
        })
        .attr('y', (d, i) => {
          let barHeight =
            parseInt(container.select('#d3-ford-years svg').style('height')) / 6
          return barHeight * (i + 1) + barHeight / 2
        })
        .text((d, i) => `${d.quarter} - ${d.truck + d.suv + d.car}`)
        .style('font-size', '12')
        .style('font-weight', '500')
        .style('fill', 'gray')
      vTypeSVG.select('p').text('Hover over quarter bar for vehicle type')
      quarterSVG
        .select('svg')
        .selectAll('rect')
        .on('mouseover', function (e, d) {
          setQuarter(e.target.id)
        })
    }
    if (quarter) {
      let vName = ['Truck', 'SUV', 'Car']
      let vColors = ['#38ACEC', '#79BAEC', '#a6dbf0']
      let vData = getVehicleData(quarterlyData, quarter)
      vTypeSVG.select('p').text(`Vehicles sold in ${quarter} ${year}`)
      vTypeSVG
        .select('svg')
        .selectAll('rect')
        .data([vData.truck, vData.suv, vData.car])
        .join('rect')
        .attr('x', '0')
        .attr('y', (d, i, n) => {
          return (
            (parseInt(
              container.select('#d3-ford-vehicles svg').style('height')
            ) *
              (i + 1)) /
            5
          )
        })
        .attr('height', (d, i, n) => {
          return (
            parseInt(
              container.select('#d3-ford-vehicles svg').style('height')
            ) /
              5 -
            5
          )
        })
        .attr('width', (d) => d / 1000)
        .style('fill', (d, i) => {
          return vColors[i]
        })

      vTypeSVG
        .select('svg')
        .selectAll('text')
        .data([vData.truck, vData.suv, vData.car])
        .join('text')
        .attr('x', (d) => {
          return d / 1000 + 10
        })
        .attr('y', (d, i, n) => {
          let barHeight =
            parseInt(
              container.select('#d3-ford-vehicles svg').style('height')
            ) / 5
          return barHeight * (i + 1) + barHeight / 2
        })
        .text((d, i) => `${vName[i]} - ${d}`)
        .style('font-size', '12')
        .style('font-weight', '500')
        .style('fill', 'gray')
    }
  }, [generated, year, quarter])
  return (
    <div className='d3-ford-container' ref={svgRef}>
      <div className='d3-ford-flex-row'>
        <div id='d3-ford-title'>
          <h1>FORD-US VEHICLE SALES</h1>
          <p>The sales figures are for 2018 and 2019</p>
          <p>Includes information on every quarter and the type of vehicle</p>
        </div>
        <div id='d3-ford-image'></div>
      </div>
      <div>
        <button id='d3-ford-gen-info' onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <div id='d3-ford-charts'>
        <div id='d3-ford-years'>
          <p></p>
          <svg></svg>
        </div>
        <div id='d3-ford-quarters'>
          <p></p>
          <svg></svg>
        </div>
        <div id='d3-ford-vehicles'>
          <p></p>
          <svg></svg>
        </div>
      </div>
    </div>
  )
}

export default HandlingEvents
