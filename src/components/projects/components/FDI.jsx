import '../styles/fdi.css'
import fdi_1 from '../img/fdi_1.png'
import fdi_2 from '../img/fdi_2.png'
import fdi_3 from '../img/fdi_3.png'
import fdi_4 from '../img/fdi_4.png'
import fdi_5 from '../img/fdi_5.png'
import fdi_6 from '../img/fdi_6.png'
import fdi_7 from '../img/fdi_7.png'
import fdi_8 from '../img/fdi_8.png'
import fdi_9 from '../img/fdi_9.png'

const FDI = () => {
  return (
    <div className='fdi-container projects-container'>
      <div className='fdi-title'>
        <h1>Foreign Direct Investment</h1>
        <h2>Objective:</h2>
        <p>A data exploration project to find trends in FDIs in 2021.</p>
      </div>
      <div className='fdi-data'>
        <h2>Data Used:</h2>
        <p>
          World Bank FDI{' '}
          <a
            href='https://data.worldbank.org/indicator/BX.KLT.DINV.CD.WD'
            target='_blank'
            rel='noopener noreferrer'
          >
            data
          </a>{' '}
          for the past 20 years {'\n'}World Bank GDP{' '}
          <a
            href='https://data.worldbank.org/indicator/NY.GDP.PCAP.CD'
            target='_blank'
            rel='noopener noreferrer'
          >
            data
          </a>{' '}
          for the past 20 years {'\n'}
          Colombia's Central Bank{' '}
          <a
            href='https://www.banrep.gov.co/es/estadisticas/inversion-directa'
            target='_blank'
            rel='noopener noreferrer'
          >
            data
          </a>{' '}
          on FDIs
          {'\n'}
          Bolivia's Central Bank{' '}
          <a
            href='https://www.bcb.gob.bo/webdocs/publicacionesbcb/2018/11/21/CPE_jun-18.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            data
          </a>{' '}
          on FDIs {'\n'}
          Banco Santander's{' '}
          <a
            href='https://santandertrade.com/en/portal/establish-overseas/brazil/foreign-investment'
            target='_blank'
            rel='noopener noreferrer'
          >
            report
          </a>{' '}
          on Brazil's FDIs {'\n'}
          United Nations'{' '}
          <a
            href='https://www.cepal.org/es/publications'
            target='_blank'
            rel='noopener noreferrer'
          >
            publications
          </a>{' '}
          on Venezuela's FDIs {'\n'}
          WTO's{' '}
          <a
            href='https://www.google.com/search?q=WT%2FTPR%2FS%2F10+venezuela+industry+fdi&rlz=1C1CHZL_enRU897RU898&oq=WT%2FTPR%2FS%2F10+venezuela+industry+fdi&aqs=chrome..69i57j69i58.4274j0j7&sourceid=chrome&ie=UTF-8'
            target='_blank'
            rel='noopener noreferrer'
          >
            report{' '}
          </a>
          on various industries that receive FDIs
        </p>
      </div>
      <div className='fdi-insigths-one'>
        <h2>Insights Found:</h2>
        <p className='fdi-paragraph'>
          We can see some clear outliers when looking at how much FDI countries
          receive. Countries with a stable government and economical potential
          are more attractive for investments.
        </p>
        <div className='fdi-img-insights-one-container'>
          <img className='big' src={fdi_2} alt='fdi_2' />
          <img className='small' src={fdi_1} alt='fdi_1' />
        </div>
      </div>
      <div className='fdi-insights-two'>
        <p className='fdi-paragraph'>
          Most countries in the developing world struggle to attract foreign
          investments.
        </p>
        <div className='fdi-img-insights-two-container'>
          <img className='big' src={fdi_4} alt='fdi_4' />
          <img className='small' src={fdi_3} alt='fdi_3' />
        </div>
      </div>
      <div className='fdi-insights-three'>
        <p className='fdi-paragraph'>
          Most countries in the developing world struggle to attract foreign
          investments.
        </p>
        <div className='fdi-img-insights-three-container'>
          <img src={fdi_5} alt='fdi_5' />
          <img src={fdi_6} alt='fdi_6' />
        </div>
      </div>
      <div className='fdi-south-america'>
        <p className='fdi-paragraph'>
          South America is an ideal continent to explore further. There aren't
          that many countries and the correlations between GDP per capita and
          FDIs are diverse.
        </p>
        <div className='fid-south-america-images'>
          <table className='fdi-south-america-table'>
            <tr>
              <th>Country</th>
              <th>Correlation</th>
            </tr>
            <tr>
              <td>Venezuela</td>
              <td>-0.1714</td>
            </tr>
            <tr>
              <td>Bolivia</td>
              <td>0.1259</td>
            </tr>
            <tr>
              <td>Suriname</td>
              <td>0.3324</td>
            </tr>
            <tr>
              <td>Argentina</td>
              <td>0.4460</td>
            </tr>
            <tr>
              <td>Ecuador</td>
              <td>0.4607</td>
            </tr>
            <tr>
              <td>Uruguay</td>
              <td>0.4895</td>
            </tr>
            <tr>
              <td>Guyana</td>
              <td>0.6209</td>
            </tr>
            <tr>
              <td>Chile</td>
              <td>0.6906</td>
            </tr>
            <tr>
              <td>Peru</td>
              <td>0.8138</td>
            </tr>
            <tr>
              <td>Paraguay</td>
              <td>0.8332</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>0.9193</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>0,9228</td>
            </tr>
          </table>
          <img className='fdi-south-america-img' src={fdi_7} alt='fdi_7' />
        </div>
      </div>
      <div className='south-america-two'>
        <p className='fdi-paragraph'>
          Bolivia and Venezuela had the lowest correlated GDP and FDIs, while
          Brazil and Colombia had the highest correlation.
        </p>
        <img src={fdi_8} alt='fdi_8' />
      </div>
      <div className='south-america-three'>
        <p className='fdi-paragraph'>
          These are the different industries that foreigners invest in. Energy
          is considered to be a more reliable investment and it the most common.
          For Bolivia and Venezuela nearly all the investments are in energy and
          natural minerals, while investments are much more varied in Brazil and
          Colombia.
        </p>
        <img src={fdi_9} alt='fdi_9' />
      </div>
      <div className='south-america-four'>
        <p className='fdi-paragraph'>
          Other factors that can determine the amount of FDIs a country receives
          is its ease of doing business ranking and levels of corruption.
        </p>
        <table className='south-america-four-table'>
          <tr>
            <th>Countries</th>
            <th>Ease of doing Business (percentile)</th>
            <th>Corruption Leve (percentil)</th>
            <th>Correlation of GDP and FDIs</th>
          </tr>
          <tr>
            <th>Colombia</th>
            <td>0.65</td>
            <td>0.53</td>
            <td>0.92</td>
          </tr>
          <tr>
            <th>Brazil</th>
            <td>0.35</td>
            <td>0.59</td>
            <td>0.91</td>
          </tr>
          <tr>
            <th>Bolivia</th>
            <td>0.21</td>
            <td>0.68</td>
            <td>0.13</td>
          </tr>
          <tr>
            <th>Venezuela</th>
            <td>0.02</td>
            <td>0.96</td>
            <td>-0.17</td>
          </tr>
        </table>
      </div>
      <div className='fdi-conclusion'>
        <h2>Conclusion</h2>
        <p className='fdi-conclusion-conclusion'>
          Investors want a return that is reliable and consistent. Investing in
          companies that are in countries with high levels of corruption or
          unpredicable institutions leave many factors and risks that are
          difficult to calculate. However, it is in these countries where the
          big returns are to be made because their various industries haven't
          been developed yet.
        </p>
        <p className='fdi-conclusion-github-link'>
          To see all the code for this project please visit my{' '}
          <a
            href='https://github.com/jmetzg11/Personal-Projects/blob/main/foreign_direct_investment.ipynb'
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

export default FDI
