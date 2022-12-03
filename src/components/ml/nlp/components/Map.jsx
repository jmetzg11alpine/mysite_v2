import { useRef, useEffect, useState } from 'react'
import Filter from './Filter'
import * as d3 from 'd3'
import './states.css'

const showLastDate = (newsData) => {
  const dates = Object.keys(newsData)
  dates.sort()
  return dates[dates.length - 1]
}

const findCategory = (stateItem, newsData, date) => {
  const choosenDayData = newsData[date]
  const choosenState = choosenDayData.find((item) => {
    return item.state.toLowerCase() === stateItem.properties.name.toLowerCase()
  })
  return choosenState.cat
}

const getTitle = (stateItem, date, newsData) => {
  const choosenDayData = newsData[date]
  const choosenState = choosenDayData.find((item) => {
    return stateItem.properties.name.toLowerCase() === item.state.toLowerCase()
  })
  return choosenState.title
}

const getBody = (stateItem, date, newsData) => {
  const choosenDayData = newsData[date]
  const choosenState = choosenDayData.find((item) => {
    return stateItem.properties.name.toLowerCase() === item.state.toLowerCase()
  })
  return choosenState.body
}

const getUrl = (stateItem, date, newsData) => {
  const choosenDayData = newsData[date]
  const choosenState = choosenDayData.find((item) => {
    return stateItem.properties.name.toLowerCase() === item.state.toLowerCase()
  })
  return choosenState.url
}

const Map = ({ newsData, geoData }) => {
  const [date, setDate] = useState(showLastDate(newsData))
  const [showState, setShowState] = useState('')
  const [showTitle, setShowTitle] = useState('')
  const [showBody, setShowBody] = useState('')
  const [showUrl, setShowUrl] = useState('')
  let ReferenceD3 = 'us-map'
  ReferenceD3 = useRef()
  let Legend = 'legend'
  Legend = useRef()

  const width = window.innerWidth * 0.55
  const height = window.innerHeight * 0.5
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }

  const projection = d3
    .geoAlbersUsa()
    .translate([width / 2.3, height / 2])
    .scale(width / 1.1)
  const path = d3.geoPath(projection)

  const colors = [
    '#ff0000',
    '#008000',
    '#0000ff',
    '#ffa500',
    '#ffff00',
    '#4b0082',
    '#ee82ee',
    '#313335',
  ]
  const colorText = [
    'crime',
    'econ',
    'nature',
    'gov',
    'tech',
    'world',
    'society',
    'error',
  ]

  useEffect(() => {
    const svg = d3.select(ReferenceD3.current)
    svg.selectAll('*').remove()
    const legend = d3.select(Legend.current)
    legend.selectAll('*').remove()
    legend
      .attr('width', width * 0.11)
      .attr('height', height + margin.top + margin.bottom)
      .style('background', '#d3d3d3')
      .style('z-index', 2)
    legend
      .selectAll('mydots')
      .data(colors)
      .enter()
      .append('circle')
      .attr('cx', width * 0.015)
      .attr('cy', function (d, i) {
        return height * 0.08 + i * height * 0.08
      })
      .attr('r', width * 0.011)
      .style('fill', function (d) {
        return d
      })
    legend
      .selectAll('mylabels')
      .data(colorText)
      .enter()
      .append('text')
      .attr('x', width * 0.03)
      .attr('y', function (d, i) {
        return height * 0.0801 + i * height * 0.0801
      })
      .text(function (d) {
        return d
      })
      .attr('text-anchor', 'left')
      .style('alignment-baseline', 'middle')

    const tooldiv = d3
      .select('#ReferenceD3')
      .append('div')
      .attr('class', 'states-tooltip')
      .style('visibility', 'hidden')
      .style('position', 'absolute')
      .style('background-color', '#ffa07a')
      .style('color', 'white')
      .style('width', width * 0.1)
      .style('font-size', width * 0.1)
      .style('z-index', 2)

    const mouseOver = function (e, d) {
      const title = getTitle(d, date, newsData)
      d3.selectAll('.state')
        .transition()
        .duration(200)
        .style('opacity', 0.8)
        .style('stroke', 'white')
      d3.select(this.parentNode.appendChild(this))
        .transition()
        .duration(200)
        .style('opacity', 1)
        .style('stroke', 'black')
      tooldiv
        .style('visibility', 'visible')
        .style('top', e.pageY - height * 0.08 + 'px')
        .style('left', e.pageX - width * 0.025 + 'px')
        .html(`<p>${d.properties.name}: ${title}</p>`)
    }

    const mouseLeave = function (e, d) {
      d3.selectAll('.state')
        .transition()
        .duration(200)
        .style('opacity', 1)
        .style('stroke', 'white')
      d3.select(this).transition().duration(200).style('stroke', 'white')
      tooldiv.style('visibility', 'hidden')
    }

    const handleClick = function (e, d) {
      setShowState(d.properties.name)
      setShowTitle(getTitle(d, date, newsData))
      setShowBody(getBody(d, date, newsData))
      setShowUrl(getUrl(d, date, newsData))
    }

    svg
      .attr('width', width * 0.9 + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .style('background', '#d3d3d3')

    svg
      .selectAll('path')
      .data(geoData)
      .enter()
      .append('path')
      .attr('class', 'state')
      .style('stroke', 'white')
      .attr('d', path)
      .attr('fill', (stateItem) => {
        let cat = findCategory(stateItem, newsData, date)
        if (cat === 0) {
          return '#ff0000'
        } else if (cat === 1) {
          return '#008000'
        } else if (cat === 2) {
          return '#0000ff'
        } else if (cat === 3) {
          return '#ffa500'
        } else if (cat === 4) {
          return '#ffff00'
        } else if (cat === 5) {
          return '#4b0082'
        } else if (cat === 6) {
          return '#ee82ee'
        } else {
          return '#313335'
        }
      })
      .on('mouseover', mouseOver)
      .on('mouseleave', mouseLeave)
      .on('click', handleClick)
  }, [date])

  return (
    <div>
      <div className='states-map-text-container'>
        <div className='legend'>
          <svg ref={Legend} />
        </div>
        <div id='ReferenceD3'>
          <svg ref={ReferenceD3} />
        </div>
        {showTitle.length === 0 ? (
          <div className='states-text-container'>
            click a state to see more info
          </div>
        ) : (
          <div className='states-text-container'>
            <div className='states-text-container-state'>{showState}</div>
            <div className='states-text-container-title'>{showTitle}</div>
            <div className='states-text-container-body'>{showBody}</div>
            <a className='states-text-container-link' href={showUrl}>
              link
            </a>
          </div>
        )}
      </div>
      <div className='states-filter'>
        <Filter newsData={newsData} setDate={setDate} />
      </div>
    </div>
  )
}
export default Map
