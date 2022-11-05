import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import getText from './getText'

const formatData = (data) => {
  data = data[0]
  let new_data = []
  for (let i = 0; i < 50; i++) {
    new_data.push(data[i])
  }
  return new_data
}

const getMin = (data) => {
  let _min = Number.POSITIVE_INFINITY
  for (let i in data) {
    if (+data[i][1] < _min) {
      _min = +data[i][1]
    }
  }
  return _min
}

const getMax = (data) => {
  let _max = Number.NEGATIVE_INFINITY
  for (let i in data) {
    if (+data[i][1] > _max) {
      _max = +data[i][1]
    }
  }
  return _max
}

const get_colors = (fit) => {
  if (fit === 1) {
    return ['#3d348b', '#009fb7']
  } else {
    return ['#ff4b3e', '#ffb20f']
  }
}

const Graph = ({ category, data, cityInfo, city, fit, direction }) => {
  // console.log(category, direction)
  data = formatData(data)
  let ReferenceD3 = city + category
  ReferenceD3 = useRef()
  const [mainColor, secondColor] = get_colors(fit)
  const graphText = getText(category, city, fit, direction)
  const textLength = graphText.length

  useEffect(() => {
    const xMinValue = getMin(data)
    const xMaxValue = getMax(data)
    const padding = (xMaxValue - xMinValue) * 0.08
    const width = window.innerWidth * 0.35
    const height = window.innerHeight * 0.08

    const margin = { top: 10, right: 10, bottom: 20, left: 10 }
    const svg = d3.select(ReferenceD3.current)
    svg.selectAll('*').remove()
    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')

    const y = d3.scaleBand().range([height, 0]).domain(['']).padding(4)
    svg
      .append('g')
      .attr('transform', `translate(0,0)`)
      .call(d3.axisLeft(y).tickSize(0))
      .select('.domain')
      .remove()
    const x = d3
      .scaleLinear()
      .range([0, width])
      .domain([xMinValue - padding, xMaxValue + padding])

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${height})`)
      .call(d3.axisBottom(x).ticks(2))
      .select('.domain')
      .remove()

    // all points
    const toolpoint = d3
      .select('#ReferenceD3')
      .append('div')
      .style('visibility', 'hidden')
      .style('position', 'absolute')
      .style('background-color', mainColor)
      .style('color', 'white')
      .style('width', '150px')
      .style('padding', '2px')

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    }
    const jitter = () => {
      let random_number = getRandomArbitrary(-1, 1)
      random_number = random_number * 15
      return height / 2 + random_number
    }
    svg
      .selectAll('indPoints')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return x(d[1])
      })
      .attr('cy', function (d) {
        return jitter(d)
      })
      .attr('r', 3)
      .attr('opacity', 0.85)
      .attr('fill', secondColor)
      .on('mouseover', (e, d) => {
        toolpoint
          .style('visibility', 'visible')
          .text(d[0] + ': ' + d[1])
          .style('top', e.pageY - 30 + 'px')
          .style('left', e.pageX - 50 + 'px')
      })
      .on('mouseout', () => {
        toolpoint.style('visibility', 'hidden')
      })

    // main point
    const tooldiv = d3
      .select('#ReferenceD3')
      .append('div')
      .style('visibility', 'hidden')
      .style('position', 'absolute')
      .style('background-color', secondColor)
      .style('color', 'white')
      .style('width', '200px')
      .style('padding', '2px')
    svg
      .selectAll('point')
      .data([cityInfo[category]])
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return x(d)
      })
      .attr('cy', height / 2)
      .attr('r', 8)
      .attr('opacity', 0.7)
      .attr('fill', mainColor)
      .on('mouseover', (e, d) => {
        tooldiv
          .style('visibility', 'visible')
          .text(`${graphText}`)
          .style('top', e.pageY - textLength * 1.2 + 'px')
          .style('left', e.pageX - 50 + 'px')
      })
      .on('mouseout', () => {
        tooldiv.style('visibility', 'hidden')
      })
  }, [
    ReferenceD3,
    data,
    category,
    cityInfo,
    fit,
    mainColor,
    secondColor,
    graphText,
    textLength,
  ])

  return (
    <div className='graph_container_1'>
      <div id='ReferenceD3'>
        <svg ref={ReferenceD3}></svg>
      </div>
    </div>
  )
}

export default Graph
