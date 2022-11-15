import { useState, useEffect } from 'react'
import Graph from './Graph'
import getData from './functions/getData.js'
import './styles/quiz.css'

const url = 'https://emj00l.deta.dev/all_scores_average'

const Quiz = () => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    getData(url, setScores)
  }, [])

  return (
    <div>
      <div className='info-container'>
        <h1>Quizzes</h1>
        <p>
          Here are four trivia quizzes. Topics are Geography, STEM, History, and
          Jesse.
        </p>
        <p>
          Below are the average scores of people who have taken some of the
          quizzes.
        </p>
      </div>

      <Graph graph_name='graph_home' data={scores} />
    </div>
  )
}
export default Quiz
