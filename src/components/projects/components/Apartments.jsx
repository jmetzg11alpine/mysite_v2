import ap_1 from '../img/r_ap_1.png'
import ap_2 from '../img/r_ap_2.png'
import ap_3 from '../img/r_ap_3.png'
import '../styles/apartments.css'
const Apartments = () => {
  return (
    <div className='apartments-container projects-container'>
      <h1>Where are the expensive apartments in Moscow?</h1>
      <h2>Objective:</h2>
      <p>
        Can a linear regression demonstrate where the most expensive apartments
        are?
      </p>
      <h2>Step 1 - Scrape apartment data</h2>
      <p>
        <a
          href='http://www.realto.ru/base/flat_sale/?SecLodg_step=1&filter%5BRegion%5D=moscow'
          target='_blank'
          rel='noopener noreferrer'
        >
          Realto.ru
        </a>{' '}
        has recent listings for apartments for sell in Moscow. Information
        includes price, nearest metro station, number of rooms, size and which
        floor. I will web scrape the 1500 most recent postings.
      </p>
      <h2>Step 2 - removing outliers</h2>
      <p>
        There are some apartments that we can consider to be very unusual. Some
        examples are: apartments that cost more than 200,000,000 rubles ($2.7
        million), have more than 6 rooms, more than 600 square meters, or are
        located on the 60th floor or a building.
      </p>
      <img className='apartments-img' src={ap_1} alt='ap_1' />
      <p>
        After removing these outliers my data set went from 1500 samples to 1484
        samples, but the data resembles a normal distribution. Comparing my
        linear regression with the new data my R2 score improved from 0.7655 to
        0.875.
      </p>
      <img className='apartments-img' src={ap_2} alt='ap_2' />
      <h2>Step 3 - Plotting the results</h2>
      <p>
        From Moscow's very convenient{' '}
        <a
          href='https://apidata.mos.ru/'
          target='_blank'
          rel='noopener noreferrer'
        >
          API
        </a>{' '}
        I was able to import all the GPS coordinates for each metro station.
        Additionally, I ranked each station by their coefficients from the
        linear regression. With these data points I got a scatter plot that
        resembles Moscow's metro map.
      </p>
      <p>
        Clearly we can see that most expensive apartments are in the center and
        the cheaper apartments are further out, just as one would suspect.
      </p>
      <img className='apartments-img' src={ap_3} alt='ap_3' />
      <p className='apartments-github-link'>
        To see all the code for this project please visit my{' '}
        <a
          href='https://github.com/jmetzg11/Personal-Projects/blob/main/metros_apartments_moscow.ipynb'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
        .
      </p>
    </div>
  )
}

export default Apartments
