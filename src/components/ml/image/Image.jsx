import './image.css'
import { useState, useEffect } from 'react'
import Grid from './components/Grid'
import Training from './components/Training'
import * as tf from '@tensorflow/tfjs'

const Image = () => {
  const [data, setData] = useState(new Array(28 * 28).fill(0))
  const [mouseState, setMouseState] = useState(false)
  const [prediction, setPrediction] = useState(0)
  const [model, setModel] = useState(null)
  const [trainingNumber, setTrainingNumber] = useState(null)

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

  const handleMouseUp = () => {
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
      <p>
        Draw numbers in the blue box with your mouse and then click 'Predict'.
        If you got a correct number than that means you draw numbers like me!
        However, I've noticed that the model doesn't work with everyone. That is
        because people draw numbers differently and this model got its training
        data from me drawing each number 100 times. We can solve the problems if
        you help. Draw a number and then select the number that you drew. This
        will add more diverse data to train the model with, and in the end will
        result in a better model. Thank you:)
      </p>
      <Grid
        data={data}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        handleMouseMove={handleMouseMove}
      />
      <div className='image-button-container'>
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={handleSubmitData}>Predict</button>
        <h1>Prediction: {prediction}</h1>
      </div>
      <Training
        trainingNumber={trainingNumber}
        setTrainingNumber={setTrainingNumber}
        handleRefresh={handleRefresh}
        data={data}
      />
    </div>
  )
}
export default Image
