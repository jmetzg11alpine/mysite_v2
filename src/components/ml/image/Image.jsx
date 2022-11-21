import './image.css'
import { useState, useEffect } from 'react'
// import axios from 'axios'
import * as tf from '@tensorflow/tfjs'

const Image = () => {
  const [data, setData] = useState(new Array(28 * 28).fill(0))
  const [mouseState, setMouseState] = useState(false)
  const [prediction, setPrediction] = useState(0)
  const [model, setModel] = useState(null)

  const model_url =
    'https://raw.githubusercontent.com/jmetzg11alpine/number_image_backend/main/tfjs_model_dir/model.json'

  const load_model = async (model) => {
    let loadedModel = await tf.loadLayersModel(model_url)
    setModel(loadedModel)
    console.log('model loaded')
  }

  const prepare_data = (data) => {
    data = tf.tensor([data])
    data = data.reshape([1, 28, 28, 1])
    return data
  }

  const prepare_answer = (predictedValues) => {
    let max = predictedValues[0]
    let answer = 0
    for (let i = 1; i < 10; i++) {
      if (predictedValues[i] > max) {
        max = predictedValues[i]
        answer = i
      }
    }
    setPrediction(answer)
  }

  const get_prediction = async (data) => {
    const tensor = model.predict(prepare_data(data))
    const predictedValues = tensor.arraySync()[0]
    prepare_answer(predictedValues)
  }

  const handleSubmitData = () => {
    // console.log(data)

    // This was to get the training data sent to a backend
    // let num = 9
    // const body = { number: num, data: data }
    // axios
    //   .post('http://127.0.0.1:8000/', body)
    //   .then((res) => console.log(num, 'was recorded'))

    // when using local backend
    // const body = { data: data }
    // axios.post('http://127.0.0.1:8000/prediction', body).then((res) => {
    //   let data = res['data']
    //   setPrediction(data['prediction'])
    // })

    get_prediction(data)
    handleRefresh()
  }

  const handleMouseMove = (i) => {
    if (mouseState) {
      let newArr = [...data]
      newArr[i] = 1
      setData(newArr)
    }
  }

  const handleMouseDown = () => {
    setMouseState(true)
  }

  const handleMouseup = () => {
    setMouseState(false)
  }

  const handleRefresh = () => {
    let newArr = new Array(28 * 28).fill(0)
    setData(newArr)
  }

  useEffect(() => {
    load_model()
  }, [])

  return (
    <div className='image-grid-container'>
      <div className='grid-container'>
        {[...Array(28 * 28)].map((e, i) => {
          let classes = `cell-${i} cell`
          if (data[i] === 1) {
            classes += ' actived'
          }
          return (
            <div
              key={i}
              className={classes}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseup}
              onMouseMove={() => handleMouseMove(i)}
            ></div>
          )
        })}
      </div>
      <div className='image-button-container'>
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={handleSubmitData}>Send Data</button>
      </div>
      <div>
        <h1>Prediction: {prediction}</h1>
      </div>
    </div>
  )
}
export default Image
