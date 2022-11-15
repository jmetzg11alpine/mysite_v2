import '../styles/pictures.css'
import pandas_python from '../imgs/pandas-python.png'
import d3 from '../imgs/d3.png'
import fast from '../imgs/fastapi.png'
import hug from '../imgs/huggingface.png'
import js from '../imgs/javascript.png'
import mat from '../imgs/matplotlib.png'
import soup from '../imgs/beautifulsoup.png'
import mongo from '../imgs/MongoDB.png'
import sql from '../imgs/mysql.png'
import react from '../imgs/React.png'
import selenium from '../imgs/selenium.png'
import sklearn from '../imgs/sklearn.png'
import tensor from '../imgs/tensorflow.png'

const Pictures = () => {
  return (
    <div className='home-picture-container'>
      <div className='picture-tools-title'>
        <p>My Tools:</p>
      </div>
      <div className='home-photo-container'>
        <div className='home-img-con zero'>
          <img className='home-img' src={pandas_python} alt='pandas-python' />
        </div>
        <p className='zero-tooltip'>Python + Pandas = Bread Winner</p>
        <div className='home-img-con one'>
          <img className='home-img' src={d3} alt='d3' />
        </div>
        <p className='one-tooltip'>
          D3.js - Dynamic data visualizations for web browsers
        </p>
        <div className='home-img-con two'>
          <img className='home-img' src={fast} alt='fastapi' />
        </div>
        <p className='two-tooltip'>FastAPI - RESTful APIs in Python</p>
        <div className='home-img-con three'>
          <img className='home-img' src={hug} alt='huggingface' />
        </div>
        <p className='three-tooltip'>
          HuggingFace - Sharable machine learning applications
        </p>
        <div className='home-img-con four'>
          <img className='home-img' src={js} alt='javascript' />
        </div>
        <p className='four-tooltip'>Javascript - 98% of websites use it</p>
        <div className='home-img-con five'>
          <img className='home-img' src={mat} alt='matplotlib' />
        </div>
        <p className='five-tooltip'>Matplotlib - Plotting library for Python</p>
        <div className='home-img-con six'>
          <img className='home-img' src={soup} alt='bs4' />
        </div>
        <p className='six-tooltip'>
          BeautifulSoup - Python package to parse HTML and XML documents
        </p>
        <div className='home-img-con seven'>
          <img className='home-img' src={mongo} alt='mongodb' />
        </div>
        <p className='seven-tooltip'>MongoDB - Non-Relational DataBase</p>
        <div className='home-img-con eight'>
          <img className='home-img' src={sql} alt='sql' />
        </div>
        <p className='eight-tooltip'>Relational DataBase</p>
        <div className='home-img-con nine'>
          <img className='home-img' src={tensor} alt='tensor' />
        </div>
        <p className='nine-tooltip'>Python library to build neural networks</p>
        <div className='home-img-con ten'>
          <img className='home-img' src={selenium} alt='selenium' />
        </div>
        <p className='ten-tooltip'>
          Selenium - I use it for dynamic web scrapping
        </p>
        <div className='home-img-con eleven'>
          <img className='home-img' src={sklearn} alt='sklearn' />
        </div>
        <p className='eleven-tooltip'>
          Scikit-learn - Python library for machine learning
        </p>
        <div className='home-img-con twelve'>
          <img className='home-img' src={react} alt='react' />
        </div>
        <p className='twelve-tooltip'>
          React - unopinionated front-end framework
        </p>
      </div>
    </div>
  )
}

export default Pictures
