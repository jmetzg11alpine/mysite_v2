import { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [headerWidth, setHeaderWidth] = useState()
  const svgRef = useRef()
  console.log(headerHeight, headerWidth)
  d3.select(svgRef.current)
    .select('ellipse')
    .attr('cx', headerWidth * 0.15)
    .attr('cy', headerHeight * 0.75)
    .attr('rx', headerHeight * 0.55)
    .attr('ry', headerHeight * 0.4)
    .style('fill', '#034078')
  d3.select(svgRef.current)
    .select('text')
    .attr('x', headerWidth * 0.12)
    .attr('y', headerHeight * 0.85)
    .text('JM')
    .style('fill', 'white')
    .style('anchor-text', 'middle')
    .style('font-size', headerWidth * 0.045)
    .style('font-style', 'bold')
    .style('font-family', 'Montserrat')

  useEffect(() => {
    const header = d3.select(svgRef.current)
    setHeaderHeight(parseInt(header.style('height')))
    setHeaderWidth(parseInt(header.style('width')))
  }, [])

  return (
    <div ref={svgRef} className='header'>
      <svg>
        <ellipse></ellipse>
        <text></text>
      </svg>
      <div className='header-link-container'>
        <Link to='/' className='header-link'>
          Home
        </Link>
        <Link to='/ml' className='header-link'>
          ML
        </Link>
        <Link to='/livability' className='header-link'>
          Livability
        </Link>
        <Link to='/quiz' className='header-link'>
          Quiz
        </Link>
        <Link to='/world' className='header-link'>
          World
        </Link>
        <Link to='/projects' className='header-link'>
          Projects
        </Link>
        <Link to='/about' className='header-link'>
          About
        </Link>
      </div>
    </div>
  )
}

export default Header
