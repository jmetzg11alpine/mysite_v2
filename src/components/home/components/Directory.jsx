import '../styles/directory.css'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import machine_learning_img from '../imgs/machine_learning.png'
import city_graph_img from '../imgs/city_graph.png'
import quiz_time_img from '../imgs/quiz_time.png'
import world_financial_img from '../imgs/world_markets.png'
import my_tools_img from '../imgs/my_tools.png'

const Directory = () => {
  return (
    <div className='home-carosel'>
      <Carousel>
        <Carousel.Item>
          <div className='home-carosel-container'>
            <div className='home-carosel-left'>
              <img className='home-carosel-img' src={machine_learning_img} alt='First slide' />
            </div>
            <div className='home-carosel-right'>
              <h3 className='home-info-heading'>
                <a href='https://jesse-metzger.vercel.app/ml' rel='noreferrer' target='_blank'>
                  Machine Learning
                </a>
              </h3>
              <p className='home-info-p'>
                There are two projects here. The NLP one has micro servers that work daily to get Ney York Time articles about each of the 50 states and categoriezes each article. It categorizes each artice using the famous BART model. <br></br>
                <br></br>
                The second project is an image recogniztion model that was created with tensorflow. The training data is me drawing each number 100 times. It doesn't work well with everyone and that is why I added a feature where users can help grow my training data with more diverse numbers.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='home-carosel-container'>
            <div className='home-carosel-left'>
              <h3 className='home-info-heading'>
                <a href='https://jesse-metzger.vercel.app/livability' rel='noreferrer' target='_blank'>
                  Interactive Graphic with City Data
                </a>
              </h3>
              <p className='home-info-p'>
                These graphics where made with D3.js and such a strategy could be used to compare the features of different data samples. In my case I used the 50 biggest US cities and 9 different features that I scoured the web for. The left 3 graphs show the features of a selected city that most closely fit the distribution of the other cities. The right three graphs show how the selected city
                most differes from the other cities. The feature rankings where determined by z-scores, and much care was put into the pop up text when hovering the mouse over a data point.
              </p>
            </div>
            <div className='home-carosel-right'>
              <img className='home-carosel-img' src={city_graph_img} alt='Second slide' />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='home-carosel-container'>
            <div className='home-carosel-left'>
              <img className='home-carosel-img' src={quiz_time_img} alt='Third slide' />
            </div>
            <div className='home-carosel-right'>
              <h3 className='home-info-heading'>
                <a href='https://jesse-metzger.vercel.app/quiz' rel='noreferrer' target='_blank'>
                  4 Quizzes
                </a>
              </h3>
              <p className='home-info-p'>These are 4 quizzes where the scores are recorded in a database. The D3.js bar charts update automatically when new scores are entered. Only people with a login and password can take the quiz. Don't be shy and ask for credentials.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='home-carosel-container'>
            <div className='home-carosel-left'>
              <h3 className='home-info-heading'>
                <a href='https://jesse-metzger.vercel.app/world' rel='noreferrer' target='_blank'>
                  My investment and the world markets
                </a>
              </h3>
              <p className='home-info-p'>My investments are visualized through D3.js graphs</p>
              <p className='home-info-p'>There is also a world map that get data from scrapping a website. It shows how various national stock markets have changed in the past week.</p>
            </div>
            <div className='home-carosel-right'>
              <img className='home-carosel-img' src={world_financial_img} alt='Third slide' />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='home-carosel-container'>
            <div className='home-carosel-left'>
              <img className='home-carosel-img' src={my_tools_img} alt='Third slide' />
            </div>
            <div className='home-carosel-right'>
              <h3 className='home-info-heading'>
                <a href='https://jesse-metzger.vercel.app/projects' rel='noreferrer' target='_blank'>
                  Data Science Projects
                </a>
              </h3>
              <p className='home-info-p'>These are various projects that I did while I was just learning Python and I had just finished graduate school. It was from these individual projects that I gained the skills to break into the Data Science sphere.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Directory
