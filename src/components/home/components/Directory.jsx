import '../styles/directory.css'

const Directory = () => {
  return (
    <div className='home-directory-container'>
      <h1>Directory</h1>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/ml'
            rel='noreferrer'
            target='_blank'
          >
            Machine Learning
          </a>
          <p>
            There are two projects here. The NLP one has micro servers that
            makes daily{' '}
            <a
              href='https://developer.nytimes.com/apis'
              rel='noreferrer'
              target='_blank'
            >
              API
            </a>{' '}
            calls to get Ney York Time articles about each of the 50 states. It
            categorizes each artice using the famous{' '}
            <a
              href='https://huggingface.co/joeddav/bart-large-mnli-yahoo-answers'
              rel='noreferrer'
              target='_blank'
            >
              BART
            </a>{' '}
            model. The results are display with D3.js on an interactive map.{' '}
          </p>
          <p>
            The second project is an image recogniztion model that was created
            with tensorflow. I wanted to use the{' '}
            <a
              href='https://en.wikipedia.org/wiki/MNIST_database'
              rel='noreferrer'
              target='_blank'
            >
              MNIST database
            </a>{' '}
            for training data, but their values range from 0-255 and my pixes
            only have a value of 0 or 1. Therefore, the training data is me
            drawing each number 100 times. With neural network of less than
            60,000 parameters it made a decent model, but it started to overfit
            in 3 epochs. However, it doesn't work well with everyone. That is
            why I added a feature where users can help grow my training data
            with more diverse numbers.
          </p>
        </h3>
      </div>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/livability'
            rel='noreferrer'
            target='_blank'
          >
            Interactive Graphics with City Data
          </a>
          <p>
            These graphics where made with D3.js and such a strategy could be
            used to compare the features of different data samples. In my case I
            used the 50 biggest US cities and 9 different features that I
            scoured the web for. The left 3 graphs show the features of a
            selected city that most closely fit the distribution of the other
            cities. The right three graphs show how the selected city most
            differes from the other cities. The feature rankings where
            determined by z-scores, and much care was put into the pop up text
            when hovering the mouse over a data point.
          </p>
        </h3>
      </div>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/quiz'
            rel='noreferrer'
            target='_blank'
          >
            4 Quizzes
          </a>
          <p>
            These are 4 quizzes where the scores are recorded in a database. The
            D3.js bar charts update automatically when new scores are entered.
            Only people with a login and password can take the quiz. Don't be
            shy and ask for credentials.
          </p>
        </h3>
      </div>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/world'
            rel='noreferrer'
            target='_blank'
          >
            Financial Data on a world map
          </a>
          <p>
            This world maps takes a second to load because the backend is
            scrapping all the financial data. It shows how various national
            stock markets have changed in the past week.
          </p>
        </h3>
      </div>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/projects'
            rel='noreferrer'
            target='_blank'
          >
            Data Science Projects
          </a>
          <p>
            These are various projects that I did while I was just learning
            Python and I had just finished graduate school. It was from these
            individual projects that I gained the skills to break into the Data
            Science sphere.
          </p>
        </h3>
      </div>
      <div className='home-description-container'>
        <h3>
          <a
            href='https://jesse-metzger.vercel.app/projects'
            rel='noreferrer'
            target='_blank'
          >
            About Section
          </a>
          <p>Here you can see my work history and you can send me an email.</p>
        </h3>
      </div>
    </div>
  )
}
export default Directory
