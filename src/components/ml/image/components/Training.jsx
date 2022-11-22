import './training.css'
import axios from 'axios'
import { useState } from 'react'

const Training = ({
  trainingNumber,
  setTrainingNumber,
  handleRefresh,
  data,
}) => {
  const backend_url = 'https://tpcwio.deta.dev/'
  const [submitted, setSubmitted] = useState(false)
  const handleAddTrainingData = (num) => {
    setSubmitted(true)
    handleRefresh()
    const body = { number: num, data: data }
    axios
      .post(backend_url, body)
      .then((res) => console.log(num, 'was recorded'))
  }

  const handleZero = () => {
    setTrainingNumber(0)
    handleAddTrainingData(0)
  }

  const handleOne = () => {
    setTrainingNumber(1)
    handleAddTrainingData(1)
  }

  const handleTwo = () => {
    setTrainingNumber(2)
    handleAddTrainingData(2)
  }

  const handleThree = () => {
    setTrainingNumber(3)
    handleAddTrainingData(3)
  }

  const handleFour = () => {
    setTrainingNumber(4)
    handleAddTrainingData(4)
  }

  const handleFive = () => {
    setTrainingNumber(5)
    handleAddTrainingData(5)
  }

  const handleSix = () => {
    setTrainingNumber(6)
    handleAddTrainingData(6)
  }

  const handleSeven = () => {
    setTrainingNumber(7)
    handleAddTrainingData(7)
  }
  const handleEight = () => {
    setTrainingNumber(8)
    handleAddTrainingData(8)
  }

  const handleNine = () => {
    setTrainingNumber(9)
    handleAddTrainingData(9)
  }
  return (
    <div className='image-number-buttons-container'>
      <div className='image-number-buttons'>
        <div onClick={handleZero}>zero</div>
        <div onClick={handleOne}>one</div>
        <div onClick={handleTwo}>two</div>
        <div onClick={handleThree}>three</div>
        <div onClick={handleFour}>four</div>
        <div onClick={handleFive}>five</div>
        <div onClick={handleSix}>six</div>
        <div onClick={handleSeven}>seven</div>
        <div onClick={handleEight}>eight</div>
        <div onClick={handleNine}>nine</div>
      </div>
      <div className='image-training-bottom-message'>
        {submitted ? (
          <p>You submiited {trainingNumber} to the databaes</p>
        ) : (
          <p>Draw a number and then select the number that you drew</p>
        )}
      </div>
    </div>
  )
}
export default Training
