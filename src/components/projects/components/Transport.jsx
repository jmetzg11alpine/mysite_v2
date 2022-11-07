import '../styles/transport.css'
import sd_1 from '../img/sd_1.png'
import sd_2 from '../img/sd_2.png'
import sd_3 from '../img/sd_3.png'
import sd_4 from '../img/sd_4.png'
import sd_5 from '../img/sd_5.png'

const Transport = () => {
  return (
    <div className='transport-container'>
      <div className='transport-title'>
        <h1>San Dieog Transportation</h1>
        <h2>Objective:</h2>
        <p>
          San Diego is an affluent city in Southern California where many people
          use private cars as their main form of transportation. This project
          will test the hypothesis that richer regions will have less public
          transportation compared to poorer regions, as poorer regions have less
          access to private transportion.
        </p>
      </div>
      <div className='transport-data'>
        <h2>Data Used:</h2>
        <p>
          All of the geographic{' '}
          <a
            href='https://www.sandag.org/index.asp?subclassid=100&fuseaction=home.subclasshome'
            target='_blank'
            rel='noopener noreferrer'
          >
            Data
          </a>{' '}
          (shapefiles) can be found on San Diego's Regional Planning Agency's
          site. The site also has data sets for regional populations.
          <a
            href='https://datasurfer.sandag.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {'\n'}Datasurfer SANDAG
          </a>{' '}
          has information about income levels for different regions.
        </p>
      </div>
      <div className='insight-container'>
        <h2>Insights Found:</h2>
        <img className='transport-img' src={sd_1} alt='sd_1' />
        <p>
          Looking at just the regions and public transportation stops doesn't
          give us much information to answer our question. Anyone who is
          familiar with San Diego knows that most people live near the ocean
          (west) and the inland area (east) is a lot less populated. To have a
          better understanding how these public transportation stops are
          distributed we should use other data points.
        </p>
        <p>
          After combining four data sets (geographical regions, public
          transportation coordinates, population sizes, and incomes) I was able
          to create this data table. Here is an example of 10 of the 41 regions
          in San Diego.
        </p>
        <img className='transport-img-table' src={sd_2} alt='sd_2' />
        <p>
          Here we can see the 10 poorest and 10 richest regions of San Diego.
          According to the hypothesis the purple regions will be more dependent
          on public transportation than the green regions
        </p>
        <img className='transport-img' src={sd_3} alt='sd_3' />
        <p>
          These ratios are based off the population size and the number of
          public transportation stops.
        </p>
        <img className='transport-img' src={sd_4} alt='sd_4' />
        <p>
          These are the 9 regions where a rich region had relatively few public
          transportation stops or a poor region had a relatively high amout of
          stops. In other words, these are the regions where my assumption is
          correct.
        </p>
        <img className='transport-img' src={sd_5} alt='sd_5'></img>
        <h2>Conclusion</h2>
        <p>
          Regional wealth seems to be a weak indicator for the quantity of
          public transportation. Furthermore, some of the richest regions are
          some of the most remote and some of the poorest regions are small and
          centrally located. Geographical location and regional size would seem
          to be better indicators of public transportation quantity than wealth.
        </p>
        <p className='transport-link-github'>
          To see all the code for this project please visit my{' '}
          <a
            href='https://github.com/jmetzg11/Personal-Projects/blob/main/transport_san_diego.ipynb'
            target='_blank'
            rel='noopener noreferrer'
          >
            github
          </a>
          .
        </p>
      </div>
    </div>
  )
}
export default Transport
