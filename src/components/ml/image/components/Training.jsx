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
  const [dataNotPassed, setDataNotPassed] = useState(false)

  const handleAddTrainingData = (num) => {
    setSubmitted(true)
    handleRefresh()
    const body = { number: num, data: data }
    axios
      .post(backend_url, body)
      .then((res) => console.log(num, 'was recorded'))
  }

  const checkData = (num) => {
    const sum = data.reduce((partialSum, a) => partialSum + a, 0)
    if (sum < 10) {
      setDataNotPassed(true)
      handleRefresh()
    } else {
      setDataNotPassed(false)
      handleAddTrainingData(num)
    }
  }

  const handleZero = () => {
    setTrainingNumber(0)
    checkData(0)
  }

  const handleOne = () => {
    setTrainingNumber(1)
    checkData(1)
  }

  const handleTwo = () => {
    setTrainingNumber(2)
    checkData(2)
  }

  const handleThree = () => {
    setTrainingNumber(3)
    checkData(3)
  }

  const handleFour = () => {
    setTrainingNumber(4)
    checkData(4)
  }

  const handleFive = () => {
    setTrainingNumber(5)
    checkData(5)
  }

  const handleSix = () => {
    setTrainingNumber(6)
    checkData(6)
  }

  const handleSeven = () => {
    setTrainingNumber(7)
    checkData(7)
  }
  const handleEight = () => {
    setTrainingNumber(8)
    checkData(8)
  }

  const handleNine = () => {
    setTrainingNumber(9)
    checkData(9)
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
        {dataNotPassed ? (
          <p>Please draw a number or draw bigger</p>
        ) : submitted ? (
          <p>{trainingNumber} was added to the database</p>
        ) : (
          <p>Draw a number and the click the number that you drew</p>
        )}
      </div>
    </div>
  )
}
export default Training
