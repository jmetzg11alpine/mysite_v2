import { useState } from 'react'
import pushScore from './functions/pushScore'
import getAnswers from './functions/getAnswers'
import popCorrect from './functions/popCorrect'
import popWrong from './functions/popWrong'
import './styles/popup.css'

const Quiz = ({ questions, url, setQuizSubmitted }) => {
  const [intro, setIntro] = useState(true)
  const [endQuiz, setEndQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [endResultsSection, setEndResultsSection] = useState(false)
  const [endResultNumber, setEndResultNumber] = useState(3)
  const [popText, setPopText] = useState('')

  const handleStart = () => {
    setIntro(false)
    setEndResultsSection(false)
    setQuizSubmitted(3)
  }

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
      popCorrect(setPopText)
    } else {
      popWrong(setPopText)
    }
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1
      setCurrentQuestion(nextQuestion)
    } else {
      setEndQuiz(true)
    }
  }

  const handleSubmit = async (score) => {
    setQuizSubmitted(2)
    setEndQuiz(false)
    setScore(0)
    setEndResultsSection(true)
    const resultNumber = await pushScore(score, userName, password, url)
    setEndResultNumber(resultNumber)
  }

  const handleNoSubmit = () => {
    setIntro(true)
    setCurrentQuestion(0)
    setEndQuiz(false)
    setScore(0)
    setQuizSubmitted(3)
  }

  const handleShowAnswers = () => {
    const answers = getAnswers(questions)
    alert(answers)
  }

  return (
    <div className='quiz-container'>
      {intro ? (
        <div>
          <div className='quiz-start'>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      ) : endQuiz ? (
        <div className='end-quiz'>
          <div className='quiz-extra-text'>
            <h4>
              You got {score} correct. Would you like to submit your answers?
            </h4>
            <form>
              <label className='label-one'>
                Name:
                <input
                  type='text'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type='text'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>
          </div>

          <div className='button'>
            <button onClick={() => handleSubmit(score, userName)}>
              Submit Scores
            </button>
            <button onClick={handleNoSubmit}>No Thanks</button>
            <button onClick={handleShowAnswers}>See Answers</button>
          </div>
        </div>
      ) : endResultsSection ? (
        <div>
          {endResultNumber === 1 ? (
            <div>
              <h2>Thanks for playing</h2>
              <h4>your score was recorded</h4>
            </div>
          ) : endResultNumber === 2 ? (
            <div>
              <h2>Sorry, we are keeping the original data</h2>
              <h4>We have to keep the graphs interesting</h4>
            </div>
          ) : (
            <div>
              <h2>You are not registered</h2>
              <h4>Tell Jesse and he'll give you a password</h4>
            </div>
          )}
          <div className='button'>
            <button onClick={handleNoSubmit}>Close</button>
            <button onClick={handleShowAnswers}>See Answers</button>
          </div>
        </div>
      ) : (
        <div className='question-section'>
          <div className='quiz-extra-text'>
            <span>
              Question {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <div className='question-text'>
            {questions[currentQuestion].questionsText}
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
      <div id='quiz-pop-up'>
        <h1>{popText}</h1>
      </div>
    </div>
  )
}
export default Quiz
