import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import './modify.css'
import movieData from './data'

const Modify = () => {
  const [selectedMovie, setSelectedMovie] = useState('')
  const [selectedMovies, setSelectedMovies] = useState('')
  const [u, setU] = useState(false)
  const [fifteen, setFifteen] = useState(false)
  const [twelve, setTwelve] = useState(false)
  const [pg, setPg] = useState(false)
  const [uCount, setUCount] = useState(0)
  const [fifteenCount, setFifteenCount] = useState(0)
  const [twelveCount, setTwelveCount] = useState(0)
  const [pgCount, setPgCount] = useState(0)
  let D3Ref = useRef()
  movieData.forEach((movie) => {
    movie.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`
  })
  const getMovieObject = (movie) => {
    for (let key in movieData) {
      if (movieData[key].name === movie) {
        return movieData[key]
      }
    }
  }
  const getMoviesObject = () => {
    const moviesArray = []
    let tempUCount = 0
    let tempFifteenCount = 0
    let tempTwelveCount = 0
    let tempPGCount = 0
    if (u) {
      movieData.forEach(function (movie) {
        if (movie.contentRating === 'U') {
          moviesArray.push(movie)
          tempUCount += 1
        }
      })
    }
    if (fifteen) {
      movieData.forEach(function (movie) {
        if (movie.contentRating === '15') {
          moviesArray.push(movie)
          tempFifteenCount += 1
        }
      })
    }
    if (twelve) {
      movieData.forEach(function (movie) {
        if (movie.contentRating === '12A') {
          moviesArray.push(movie)
          tempTwelveCount += 1
        }
      })
    }
    if (pg) {
      movieData.forEach(function (movie) {
        if (movie.contentRating === 'PG') {
          moviesArray.push(movie)
          tempPGCount += 1
        }
      })
    }
    setSelectedMovies(moviesArray)
    setUCount(tempUCount)
    setFifteenCount(tempFifteenCount)
    setTwelveCount(tempTwelveCount)
    setPgCount(tempPGCount)
  }
  const handleInput = (inputData) => {
    if (inputData === 'one') {
      setU(!u)
    } else if (inputData === 'two') {
      setFifteen(!fifteen)
    } else if (inputData === 'three') {
      setTwelve(!twelve)
    } else {
      setPg(!pg)
    }
  }
  const handleSubmit = (e) => {
    setUCount(0)
    setFifteenCount(0)
    setTwelveCount(0)
    setPgCount(0)
    e.preventDefault()
    getMoviesObject()
  }

  useEffect(() => {
    const container = d3.select(D3Ref.current)
    container.select('#d3-movielist').selectAll('div').remove()
    container.select('#d3-moviepost').selectAll('*').remove()
    const countContainer = container.select('#d3-movie-count')
    container.select('form').select('p').remove()
    countContainer.selectAll('div').remove()
    container.select('#d3-movie-legend').selectAll('div').remove()
    d3.select('#d3-movie-gross').selectAll('*').remove()
    d3.select('#d3-movie-dura').selectAll('*').remove()

    const divWidth =
      parseFloat(container.select('#d3-movielist').style('width')) / 2 - 10
    const divHeight =
      (parseFloat(container.select('#d3-movielist').style('height')) - 40) / 5

    for (let i = 0; i < movieData.length; i++) {
      container.select('#d3-movielist').append('div')
    }
    container
      .select('#d3-movielist')
      .selectAll('div')
      .select(function (d, i, n) {
        d3.select(n[i])
          .style('width', divWidth + 'px')
          .style('height', divHeight + 'px')
          .style('line-height', divHeight + 'px')
          .text(movieData[i].name)
          .on('click', function () {
            setSelectedMovie(getMovieObject(movieData[i].name))
          })
      })
    if (selectedMovie) {
      container.select('#d3-moviepost').html(
        `<h2>${selectedMovie.name}</h2>
        <p>Content Rating: <span>${selectedMovie.contentRating}</span></p>
        <p>Duration: <span>${selectedMovie.duration}</span></p>
        <p>Star Rating: <span>${selectedMovie.starRating}</span></p>
        <p>Total Votes: <span>${selectedMovie.votes}</span></p>
        <p>Gross $: <span>${selectedMovie.gross}</span></p>
        `
      )
    }

    if (selectedMovies.length === 0) {
      container
        .select('form')
        .append('p')
        .append('id', '#d3-movie-feedback')
        .text('select at least one movie')
    } else {
      container.select('form').select('p').remove()

      for (let i = 0; i < 4; i++) {
        container.select('#d3-movie-count').append('div')
      }
      countContainer
        .select('div:nth-child(1)')
        .html(`<h2>${uCount}</h2><p>"U" rating movie(s) selected</p>`)
      countContainer
        .select('div:nth-child(2)')
        .html(`<h2>${fifteenCount}</h2><p>"15" rating movie(s) selected</p>`)
      countContainer
        .select('div:nth-child(3)')
        .html(`<h2>${twelveCount}</h2><p>"12A" rating movie(s) selected</p>`)
      countContainer
        .select('div:nth-child(4)')
        .html(`<h2>${pgCount}</h2><p>"PG" rating movie(s) selected</p>`)

      selectedMovies.forEach(function (movie) {
        const Legendholder = d3.select('#d3-movie-legend').append('div')
        Legendholder.append('div')
          .style('width', '15px')
          .style('height', '15px')
          .style('background-color', `${movie.color}`)
        Legendholder.append('p').text(`${movie.name}`)
      })
      container
        .select('#d3-movie-gross')
        .append('h2')
        .attr('class', 'd3-movie-gross-title')
        .text('Gross Revenue:')
      selectedMovies.forEach(function (movie, i) {
        const grossHolder = container
          .select('#d3-movie-gross')
          .append('svg')
          .attr('width', 450)
          .attr('height', 60)
          .attr('x', 0)
          .attr('y', `${i * 25 + 25}`)
        grossHolder
          .append('rect')
          .attr('width', `${movie.gross / 2.4}`)
          .attr('height', '20')
          .attr('x', 0)
          .attr('y', 40)
          .style('fill', `${movie.color}`)
        grossHolder
          .append('text')
          .attr('x', 0)
          .attr('y', 35)
          .text(`${movie.name}: $${movie.gross}`)
          .style('fill', 'rgb(63, 63, 63)')
      })
      container.select('#d3-movie-dura').append('h2').text('Movie Duration')
      selectedMovies.forEach(function (movie, i) {
        const duraHolder = container
          .select('#d3-movie-dura')
          .append('svg')
          .attr('width', 450)
          .attr('height', 60)
          .attr('x', 0)
          .attr('y', `${i * 25 + 25}`)
        duraHolder
          .append('rect')
          .attr('width', `${movie.duration / 0.6}`)
          .attr('height', '20')
          .attr('x', 0)
          .attr('y', 40)
          .style('fill', `${movie.color}`)
        duraHolder
          .append('text')
          .attr('x', 0)
          .attr('y', 35)
          .text(`${movie.duration} minutes`)
          .style('fill', 'rgb(63, 63, 63)')
      })
    }
  }, [selectedMovie, selectedMovies])

  return (
    <div ref={D3Ref} className='d3-movie-container'>
      <div className='d3-movie-title'>
        <h1>IMDb Rating</h1>
        <p>Top 10 grossing English movies for 2019</p>
      </div>

      <div id='d3-movieinfo'>
        <div id='d3-movielist'></div>
        <div id='d3-moviepost'></div>
      </div>

      <form id='d3-move-choicesubmit'>
        <label>U</label>
        <input
          type='checkbox'
          id='d3-cbu'
          value={u}
          onChange={() => handleInput('one')}
        ></input>
        <label>15</label>
        <input
          type='checkbox'
          id='d3-cb15'
          value={fifteen}
          onChange={() => handleInput('two')}
        ></input>
        <label>12a</label>
        <input
          type='checkbox'
          id='d3-cb12a'
          value={twelve}
          onChange={() => handleInput('three')}
        ></input>
        <label>PG</label>
        <input
          type='checkbox'
          id='d3-cbpg'
          value={pg}
          onChange={() => handleInput('four')}
        ></input>
        <br />
        <button id='d3-movie-submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <div id='d3-movie-charts'>
        <div id='d3-movie-count'></div>
        <div id='d3-movie-legend'></div>
        <div className='d3-movie-gross-dura-container'>
          <div id='d3-movie-gross'></div>
          <div id='d3-movie-dura'></div>
        </div>
      </div>
    </div>
  )
}
export default Modify
