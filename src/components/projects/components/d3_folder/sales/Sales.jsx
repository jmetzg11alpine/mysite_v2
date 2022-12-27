import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'
import SALES_DATA from './data'

const Sales = () => {
  const salesContainer = useRef()
  const ABBR = new Map([
    ['s_t', 'Sports and Travel'],
    ['h_l', 'Home and Lifestyle'],
    ['e_g', 'Electronics and Gadgets'],
    ['h_b', 'Health and Beauty'],
  ])
  const [svgWidthR1, setSvgWidthR1] = useState(0)
  const [svgHeightR1, setSvgHeightR1] = useState(0)
  const [svgWidthR2, setSvgWidthR2] = useState(0)
  const [svgHieghtR2, setSvgHeightR2] = useState(0)
  const BUFFER = 25
  const DATA_LENGTH = SALES_DATA.length
  // linear scale helper function
  const linearScale_helper = (d_start, d_end, r_start, r_end) => {
    const LinearScale = d3.scaleLinear().domain([d_start, d_end]).range([r_start, r_end])
    return LinearScale
  }
  // axis creation helper function
  const axis_helper = (type, ticks, scale) => {
    let AXIS
    if (type === 'left') {
      AXIS = d3.axisLeft(scale)
    }
    if (type === 'right') {
      AXIS = d3.axisRight(scale)
    }
    if (type === 'top') {
      AXIS = d3.axisTop(scale)
    }
    if (type === 'bottom') {
      AXIS = d3.axisBottom(scale)
    }
    AXIS.ticks(ticks)
    return AXIS
  }
  // axis group creation helper function
  const group_helper = (context, id, x, y) => {
    const GROUP = context.append('g').attr('id', id).attr('transform', `translate(${x},${y})`)
    return GROUP
  }
  // category color scale
  const CAT_COLOR_SCALE = d3
    .scaleOrdinal()
    .domain([...Object.keys(SALES_DATA[0])])
    .range(d3.schemePastel1)
  // transition object
  const T1 = d3.transition().duration(2500)
  // helper function to find min and max category for each region in stats chart
  const minOrMax_helper = (obj, status, r_status) => {
    let value, valueKey
    Object.keys(obj).map((key) => {
      if (Number.isInteger(obj[key])) {
        if (status === 'min') {
          value = d3.min([obj[key], value])
        }
        if (status === 'max') {
          value = d3.max([obj[key], value])
        }
      }
      valueKey = obj[key] === value ? key : valueKey
    })
    return r_status === 0 ? value : r_status === 1 ? valueKey : { [valueKey]: value }
  }
  // helper function to return objects for each reagion that are larger than the regions average
  const meanAndMap_helper = (obj) => {
    let value = [],
      newObj = {},
      i = 0
    Object.keys(obj).map((key) => {
      if (Number.isInteger(obj[key])) {
        value.push(obj[key])
      }
    })
    let meanOutput = d3.map(value, (d) => d >= d3.mean(value))
    Object.keys(obj).map((key) => {
      if (Number.isInteger(obj[key])) {
        if (meanOutput[i]) {
          newObj[key] = obj[key]
        }
        i++
      }
    })
    return Object.entries(newObj)
  }
  // helper function for region groups
  const grouped_helper = (region) => {
    let eachRegion = []
    region[1].forEach((d) => eachRegion.push([d[2]]))
    return d3.sum(d3.merge(eachRegion))
  }
  useEffect(() => {
    const Row1 = d3.select(salesContainer.current).select('#d3-sales-row1')
    const Row2 = d3.select(salesContainer.current).select('#d3-sales-row2')
    setSvgWidthR1(parseInt(Row1.select('svg').style('width')))
    setSvgHeightR1(parseInt(Row1.select('svg').style('height')))
    setSvgWidthR2(parseInt(Row2.select('svg').style('width')))
    setSvgHeightR2(parseInt(Row2.select('svg').style('height')))

    const STAT_SVG = Row1.select('#d3-sales-statistics svg')
    STAT_SVG.selectAll('*').remove()
    const ITER_SVG = Row1.select('#d3-sales-iterations svg')
    ITER_SVG.selectAll('*').remove()
    const SEAR_SVG = Row2.select('#d3-sales-search svg')
    SEAR_SVG.selectAll('*').remove()
    const TRAN_SVG = Row2.select('#d3-sales-transformations svg')
    TRAN_SVG.selectAll('*').remove()
    const SETS_SVG = Row2.select('#d3-sales-sets svg')
    SETS_SVG.selectAll('*').remove()
    // Statistics chart -----------------------------------------------------
    let max_value = []
    for (let i = 0; i < DATA_LENGTH; i++) {
      max_value.push(minOrMax_helper(SALES_DATA[i], 'max', 0))
    }
    // y axis
    const STAT_Y_AXIS_SCALE = linearScale_helper(0, DATA_LENGTH - 1, BUFFER, svgHeightR1 - BUFFER)
    const STAT_Y_AXIS = axis_helper('left', 0, STAT_Y_AXIS_SCALE)
    const STAT_Y_AXIS_G = group_helper(STAT_SVG, 'statsYaxis', BUFFER, 0)
    STAT_Y_AXIS(STAT_Y_AXIS_G)
    // x axis
    const STAT_X_AXIS_SCALE = linearScale_helper(0, d3.max(max_value), BUFFER, svgWidthR1 - BUFFER)
    const STAT_X_AXIS = axis_helper('bottom', 4, STAT_X_AXIS_SCALE)
    const STAT_X_AXIS_G = group_helper(STAT_SVG, 'statsXaxis', 0, svgHeightR1 - BUFFER)
    STAT_X_AXIS(STAT_X_AXIS_G)
    // create a group for each data point
    SALES_DATA.forEach((obj, index) => STAT_SVG.append('g').attr('id', `stat${index}`))
    // render the bars
    const MAX_HEIGHT = (svgHeightR1 - 2 * BUFFER) / DATA_LENGTH
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#stat${index}`)
        .selectAll('rect')
        .data([minOrMax_helper(SALES_DATA[index], 'min', 0), minOrMax_helper(SALES_DATA[index], 'max', 0)])
        .join('rect')
        .attr('height', MAX_HEIGHT / 2 - 2)
        .attr('x', BUFFER + 2)
        .attr('y', (d, i) => (i === 0 ? linearScale_helper(0, DATA_LENGTH - 1, BUFFER, svgHeightR1 - BUFFER - MAX_HEIGHT)(index) : linearScale_helper(0, DATA_LENGTH - 1, BUFFER, svgHeightR1 - BUFFER - MAX_HEIGHT)(index) + MAX_HEIGHT / 2))
        .style('fill', (d, i) => (i === 0 ? CAT_COLOR_SCALE(minOrMax_helper(SALES_DATA[index], 'min', 1)) : CAT_COLOR_SCALE(minOrMax_helper(SALES_DATA[index], 'max', 1))))
        .attr('rx', '3')
        .attr('ry', '3')
    })
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#stat${index}`)
        .selectAll('rect')
        .transition(T1)
        .attr('width', (d) => STAT_X_AXIS_SCALE(d) - BUFFER)
    })
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#stat${index}`)
        .selectAll('text')
        .data([SALES_DATA[index].region])
        .join('text')
        .text((d) => d[0])
        .attr('x', '1')
        .attr('y', linearScale_helper(0, DATA_LENGTH - 1, BUFFER + MAX_HEIGHT / 2, svgHeightR1 - BUFFER - MAX_HEIGHT / 2)(index))
        .style('font-size', '11')
        .style('fill', 'gray')
    })
    // Iterations Chart --------------------------------------------
    // y axis (same as previous chart, but in different location)
    const ITER_Y_AXIS_G = group_helper(ITER_SVG, 'iterYaxis', BUFFER, 0)
    STAT_Y_AXIS(ITER_Y_AXIS_G)
    // x axis
    const ITER_X_AXIS_G = group_helper(ITER_SVG, 'iterXaxis', 0, svgHeightR1 - BUFFER)
    STAT_X_AXIS(ITER_X_AXIS_G)
    // create a group for each data point
    SALES_DATA.forEach((obj, index) => ITER_SVG.append('g').attr('id', `iter${index}`))
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#iter${index}`)
        .selectAll('rect')
        .data(meanAndMap_helper(obj))
        .join('rect')
        .attr('height', MAX_HEIGHT / 4 - 2)
        .attr('x', BUFFER + 2)
        .attr('y', (d, i) => linearScale_helper(0, DATA_LENGTH - 1, BUFFER, svgHeightR1 - BUFFER - MAX_HEIGHT)(index) + (MAX_HEIGHT / 4 - 2) * i)
        .style('fill', (d, i) => CAT_COLOR_SCALE(meanAndMap_helper(obj)[i][0]))
        .attr('rx', '3')
        .attr('ry', '3')
    })
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#iter${index}`)
        .selectAll('rect')
        .transition(T1)
        .attr('width', (d) => STAT_X_AXIS_SCALE(d[1]) - BUFFER)
    })
    SALES_DATA.forEach((obj, index) => {
      d3.select(`#iter${index}`)
        .selectAll('text')
        .data([SALES_DATA[index].region])
        .join('text')
        .text((d) => d[0])
        .attr('x', '1')
        .attr('y', linearScale_helper(0, DATA_LENGTH - 1, BUFFER + MAX_HEIGHT / 2, svgHeightR1 - BUFFER - MAX_HEIGHT / 2)(index))
        .style('font-size', '11')
        .style('fill', 'gray')
    })
    // search chart -------------------------------------------
    let entries = []
    SALES_DATA.forEach((obj, index) => {
      Object.keys(obj).map((key) => {
        if (Number.isInteger(obj[key])) {
          entries.push([index, key, obj[key]])
        }
      })
    })
    // y axis
    const SEAR_Y_AXIS_SCALE = linearScale_helper(d3.max(max_value), 0, BUFFER, svgHieghtR2 - BUFFER)
    const SEAR_Y_AXIS = axis_helper('left', 4, SEAR_Y_AXIS_SCALE)
    SEAR_Y_AXIS.ticks(4, '~s').tickPadding(0).tickSize(1)
    const SEAR_Y_AXIS_G = group_helper(SEAR_SVG, 'searYaxis', BUFFER, 0)
    SEAR_Y_AXIS(SEAR_Y_AXIS_G)
    // x axis
    const SEAR_X_AXIS_SCALE = linearScale_helper(0, entries.length - 1, BUFFER, svgWidthR2 - BUFFER)
    const SEAR_X_AXIS = axis_helper('bottom', 0, SEAR_X_AXIS_SCALE)
    const SEAR_X_AXIS_G = group_helper(SEAR_SVG, 'searXaxis', 0, svgWidthR2 - BUFFER)
    SEAR_X_AXIS(SEAR_X_AXIS_G)
    // redner circles
    SEAR_SVG.selectAll('cirlce')
      .data(d3.sort(entries, (a, b) => d3.ascending(a[2], b[2])))
      .join('circle')
      .attr('cx', (d, i) => SEAR_X_AXIS_SCALE(i))
      .attr('cy', (d) => SEAR_Y_AXIS_SCALE(d[2]))
      .style('fill', (d) => CAT_COLOR_SCALE(d[1]))
    SEAR_SVG.selectAll('circle').each((d, i, n) => {
      d3.select(n[i])
        .transition()
        .delay(100 * (i + 1))
        .duration(500)
        .attr('r', '6')
    })
    SEAR_SVG.append('g')
      .attr('id', 'regions')
      .selectAll('text')
      .data(d3.sort(entries, (a, b) => d3.ascending(a[2], b[2])))
      .join('text')
      .text((d) => {
        if (d[0] === 0) return 'N'
        if (d[0] === 1) return 'E'
        if (d[0] === 2) return 'S'
        if (d[0] === 3) return 'W'
      })
      .attr('x', (d, i) => SEAR_X_AXIS_SCALE(i) - 3)
      .attr('y', svgHieghtR2 - 5)
      .style('fill', 'gray')
      .style('font-weight', '500')
      .style('font-size', '10')
    // transformations chart -----------------------------------
    const grouped = d3.groups(entries, (d) => d[0])
    // y axis
    let sum = 0
    d3.max(grouped)[1].forEach((d) => {
      sum = sum + d[2]
    })
    const TRAN_Y_AXIS_SCALE = linearScale_helper(sum, 0, BUFFER, svgHieghtR2 - BUFFER)
    const TRAN_Y_AXIS = axis_helper('left', 4, TRAN_Y_AXIS_SCALE)
    TRAN_Y_AXIS.ticks(4, '~s').tickPadding(0).tickSize(1)
    const TRAN_Y_AXIS_G = group_helper(TRAN_SVG, 'tranYaxis', BUFFER, 0)
    TRAN_Y_AXIS(TRAN_Y_AXIS_G)
    // x axis
    const groupedWidth = (svgWidthR2 - 2 * BUFFER) / grouped.length
    const TRAN_X_AXIS_SCALE = linearScale_helper(0, grouped.lenght - 1, BUFFER, svgWidthR2 - BUFFER)
    const TRAN_X_AXIS = axis_helper('bottom', 0, TRAN_X_AXIS_SCALE)
    const TRAN_X_AXIS_G = group_helper(TRAN_SVG, 'transXaxis', 0, svgWidthR2 - BUFFER)
    TRAN_X_AXIS(TRAN_X_AXIS_G)
    TRAN_SVG.selectAll('rect')
      .data(grouped)
      .join('rect')
      .attr('x', (d, i) => linearScale_helper(0, grouped.length - 1, BUFFER, svgWidthR2 - BUFFER - groupedWidth)(i) + 5)
      .attr('y', (d, i) => linearScale_helper(sum, 0, BUFFER, svgHieghtR2 - 2 * BUFFER)(grouped_helper(d)))
      .attr('width', groupedWidth - 5)
      .attr('rx', '3')
      .attr('ry', '3')
      .style('fill', (d, i) => d3.schemePastel1[i + 5])
    TRAN_SVG.selectAll('rect').each((d, i, n) => {
      d3.select(n[i])
        .transition()
        .delay(200 * (i + 1))
        .duration(1500)
        .attr('height', (d, i) => svgHieghtR2 - BUFFER - 4 - linearScale_helper(sum, 0, BUFFER, svgHieghtR2 - 2 * BUFFER)(grouped_helper(d)))
    })
    TRAN_SVG.append('g')
      .attr('id', 'region')
      .selectAll('text')
      .data(grouped)
      .join('text')
      .text((d) => {
        if (d[0] === 0) return 'North'
        if (d[0] === 1) return 'East'
        if (d[0] === 2) return 'South'
        if (d[0] === 3) return 'West'
      })
      .attr('x', (d, i) => linearScale_helper(0, grouped.length - 1, BUFFER, svgWidthR2 - BUFFER - groupedWidth)(i) + groupedWidth / 2)
      .style('text-anchor', 'middle')
      .style('fill', 'gray')
      .style('font-size', '11')
      .style('font-weight', '500')
      .attr('y', svgHieghtR2 - 5)
    // legend
    let legend = d3
      .select(salesContainer.current)
      .select('#d3-sales-legend')
      .selectAll('p')
      .data(['s_t', 'h_l', 'e_g', 'h_b'])
      .join('p')
      .text((d) => ABBR.get(d))
      .style('background-color', (d) => CAT_COLOR_SCALE(d))
    console.log(legend)
  }, [svgWidthR1, svgHeightR1, svgWidthR2, svgHieghtR2])
  return (
    <div ref={salesContainer} className='d3-sales-container'>
      <div id='d3-sales-header'>
        <h1>Sales Analysis Dashboard | FY2021-2022 (in USD)</h1>
      </div>
      <hr />
      <div id='d3-sales-charts'>
        <div id='d3-sales-row1'>
          <div id='d3-sales-statistics'>
            <p>Categories with Lowest and Highest Sales</p>
            <svg></svg>
          </div>
          <div id='d3-sales-iterations'>
            <p>Categories crossing Average Sales in that region</p>
            <svg></svg>
          </div>
        </div>
        <div id='d3-sales-row2'>
          <div id='d3-sales-search'>
            <p>Category Sales, Lowest to Highest</p>
            <svg></svg>
          </div>
          <div id='d3-sales-transformations'>
            <p>Total Sales of all 4 regions</p>
            <svg></svg>
          </div>
        </div>
      </div>
      <div id='d3-sales-legend'></div>
    </div>
  )
}

export default Sales
