import './styles/pictures.css'
import pandas_python from './imgs/pandas-python.png'
import d3 from './imgs/d3.png'
import fast from './imgs/fastapi.png'
import hug from './imgs/huggingface.png'
import js from './imgs/javascript.png'
import mat from './imgs/matplotlib.png'
import soup from './imgs/beautifulsoup.png'
import mongo from './imgs/MongoDB.png'
import sql from './imgs/mysql.png'
import react from './imgs/React.png'
import selenium from './imgs/selenium.png'
import sklearn from './imgs/sklearn.png'
import tensor from './imgs/tensorflow.png'

const Pictures = () => {
  return (
    <>
      <p className='picture-tools-title'>My Tools:</p>
      <div className='home-photo-container'>
        <div className='home-img-con '>
          <img
            className='home-img tooltip-zero'
            src={pandas_python}
            alt='pandas-python'
          />
        </div>
        <div className='home-img-con one'>
          <img className='home-img' src={d3} alt='d3' />
        </div>
        <div className='home-img-con two'>
          <img className='home-img' src={fast} alt='fastapi' />
        </div>
        <div className='home-img-con three'>
          <img className='home-img' src={hug} alt='huggingface' />
        </div>
        <div className='home-img-con four'>
          <img className='home-img' src={js} alt='javascript' />
        </div>
        <div className='home-img-con five'>
          <img className='home-img' src={mat} alt='matplotlib' />
        </div>
        <div className='home-img-con six'>
          <img className='home-img' src={soup} alt='bs4' />
        </div>
        <div className='home-img-con seven'>
          <img className='home-img' src={mongo} alt='mongodb' />
        </div>
        <div className='home-img-con eight'>
          <img className='home-img' src={sql} alt='sql' />
        </div>
        <div className='home-img-con nine'>
          <img className='home-img' src={tensor} alt='tensor' />
        </div>
        <div className='home-img-con ten'>
          <img className='home-img' src={selenium} alt='selenium' />
        </div>
        <div className='home-img-con eleven'>
          <img className='home-img' src={sklearn} alt='sklearn' />
        </div>
        <div className='home-img-con twelve'>
          <img className='home-img' src={react} alt='react' />
        </div>
      </div>
    </>
  )
}

export default Pictures
