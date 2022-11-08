import '../styles/stocks.css'
import stocks_1 from '../img/stocks_1.png'
import stocks_2 from '../img/stocks_2.png'
import stocks_3 from '../img/stocks_3.png'

const Stocks = () => {
  return (
    <div className='stocks-container'>
      <h1>An Automated Strategy for Picking Stocks</h1>
      <p>
        The following is a strategy to choose what stocks to buy. The theory of
        the strategy works off the assumptions that the stock market moves at a
        random walk, that prices return to their mean, and that the stock market
        is forever growing. There will be four stages where we start with a
        complete list of stocks and after each stage stocks will be eliminated
        until there is a relatively small list of stocks to focus on.
      </p>
      <p>
        The following strategey can be implemented with Python and these
        following packages:
      </p>
      <ul className='stocks-ul'>
        <li>pandas</li>
        <li>datetime</li>
        <li>numpy</li>
        <li>pandas_datareader</li>
        <li>selenium</li>
        <li>time</li>
      </ul>
      <h2>Data Used:</h2>
      <p>
        <a
          href='https://finance.yahoo.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Yahoo Finance
        </a>{' '}
        for historical daily closing prices for various stocks{'\n'}
        <a
          href='https://www.ibm.com/demos/live/watson-discovery/self-service'
          target='_blank'
          rel='noopener noreferrer'
        >
          IBM
        </a>{' '}
        for sentiment analysis for stocks
      </p>
      <div className='stocks-stage-one'>
        <h2>Stage 1</h2>
        <p>
          The first step is to import closing prices from yesterday and the
          previous week.
        </p>
        <div className='stocks-step-one-formula'>
          <p>
            <b>LW</b> = the closing price from the previous week{'\n'}
            <b>Y</b> = the closing price from yesterday{'\n'} Percent Change =
            ((
            <b>Y</b>-<b>LW</b>)/<b>LW</b>)*100
          </p>
        </div>

        <p>
          Keep any ticker that has a percent change -2% or lower. If it's a
          typical week and you're sampling the New York Stock Exchange then your
          list of potential stocks should shrink from a few thousand to a few
          hundred.
        </p>
        <table className='stocks-table'>
          <tbody>
            <tr>
              <th>Ticker</th>
              <th>Percent Change</th>
            </tr>
            <tr>
              <td>TRC</td>
              <td>-2.169492</td>
            </tr>
            <tr>
              <td>GTX</td>
              <td>-50.598802</td>
            </tr>
            <tr>
              <td>BSMX</td>
              <td>-3.539823</td>
            </tr>
            <tr>
              <td>JMIA</td>
              <td>-4.900000</td>
            </tr>
            <tr>
              <td>BFZ</td>
              <td>-2.479942</td>
            </tr>
            <tr>
              <td>LAIX</td>
              <td>-12.547529</td>
            </tr>
            <tr>
              <td>TPL</td>
              <td>-3.786357</td>
            </tr>
            <tr>
              <td>SWX</td>
              <td>-4.309816</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stocks-stage-two'>
        <h2>Stage 2</h2>
        <p>
          The next indicator we want is the RSI (Relative Strength Index). This
          is a financial indicator that measures a stock's current price
          behavior against a past period. 14 days is a typical period. If a
          stock is being sold at a higher rate (lower prices) than its previous
          period then it can be considered to be oversold and will have a low
          RSI score. I keep all tickers that got an RSI 40 or under. The Fomula
          is:
          <b>AvgU</b> = average price when moving up
          <b>AvgD</b> = average price when moving down
          <b>RS</b> = <b>AvgU</b>/AvgD
          <b>RSI</b> = 100 - (100 / (1 + <b>RS</b>))
        </p>
        <p>
          If your previous dataframe was called 'stocks' then you can do
          something like this to find the RSI from Yahoo.
        </p>
        <img className='stocks-stage-two-img' src={stocks_1} alt='stocks_1' />
        <p>
          Every time I do this I get lots of errors from Yahoo. Sometimes
          EODData gives tickers that Yahoo doesn't have and sometimes Yahoo is
          missing some dates. In any case there will still probably be more than
          100 stocks that will be left on the list of potential stocks.
        </p>
        <img className='stocks-stage-two-img' src={stocks_2} alt='stocks_2' />
        <p>
          Now there should be a RSI column in our data set of potential stocks
          to buy.
        </p>
        <table className='stocks-table'>
          <tbody>
            <tr>
              <th>Ticker</th>
              <th>Percent Change</th>
              <th>RSI</th>
            </tr>
            <tr>
              <td>TRC</td>
              <td>-2.169492</td>
              <td>16.666636</td>
            </tr>
            <tr>
              <td>GTX</td>
              <td>-50.598802</td>
              <td>14.260871</td>
            </tr>
            <tr>
              <td>BSMX</td>
              <td>-3.539823</td>
              <td>19.672123</td>
            </tr>
            <tr>
              <td>JMIA</td>
              <td>-4.900000</td>
              <td>16.003789</td>
            </tr>
            <tr>
              <td>BFZ</td>
              <td>-2.479942</td>
              <td>13.124788</td>
            </tr>
            <tr>
              <td>LAIX</td>
              <td>-12.547529</td>
              <td>27.272725</td>
            </tr>
            <tr>
              <td>TPL</td>
              <td>-3.786357</td>
              <td>16.308633</td>
            </tr>
            <tr>
              <td>SWX</td>
              <td>-4.309816</td>
              <td>19.883772</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stocks-stage-three'>
        <h2>Stage 3</h2>
        <p>
          Now we will try to figure out why these stocks are falling. If there
          is very bad news then we probably want to avoid these stocks. IBM
          developed a program that gives the current sentiment of a company
          based off of recent news reports. Through web automation we can get
          the sentiment score and add it to our data set.
        </p>
        <img className='stocks-stage-three-img' src={stocks_3} alt='stocks_3' />
        <p>
          Now there should be a sentiment column in our data set of potential
          stocks to buy.
        </p>
        <table className='stocks-table-type-two'>
          <tbody>
            <tr>
              <th>Ticker</th>
              <th>Percent Change</th>
              <th>RSI</th>
              <th>Sentiment</th>
            </tr>
            <tr>
              <td>TRC</td>
              <td>-2.169492</td>
              <td>16.666636</td>
              <td>8</td>
            </tr>
            <tr>
              <td>GTX</td>
              <td>-50.598802</td>
              <td>14.260871</td>
              <td>12</td>
            </tr>
            <tr>
              <td>BSMX</td>
              <td>-3.539823</td>
              <td>19.672123</td>
              <td>7</td>
            </tr>
            <tr>
              <td>JMIA</td>
              <td>-4.900000</td>
              <td>16.003789</td>
              <td>13</td>
            </tr>
            <tr>
              <td>BFZ</td>
              <td>-2.479942</td>
              <td>13.124788</td>
              <td>17</td>
            </tr>
            <tr>
              <td>LAIX</td>
              <td>-12.547529</td>
              <td>27.272725</td>
              <td>6</td>
            </tr>
            <tr>
              <td>TPL</td>
              <td>-3.786357</td>
              <td>16.308633</td>
              <td>17</td>
            </tr>
            <tr>
              <td>SWX</td>
              <td>-4.309816</td>
              <td>19.883772</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stocks-stage-four'>
        <h2>Stage 4</h2>
        <p>
          To get the final 'Score' column I add the 'RSI' and 'Sentiment'
          columns. Here a lower score is good. Low RSI means the stock is being
          oversold and a low sentiment score means that there isn't recent bad
          news about the company. The tickers with a low score can be companies
          worth investigating further. This strategy is more of a supplement in
          addition to other techniques you use to choose stocks.
        </p>
        <table className='stocks-table-type-three'>
          <tbody>
            <tr>
              <th>Ticker</th>
              <th>Percent Change</th>
              <th>RSI</th>
              <th>Sentiment</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>TRC</td>
              <td>-2.169492</td>
              <td>16.666636</td>
              <td>8</td>
              <td>24.666636</td>
            </tr>
            <tr>
              <td>GTX</td>
              <td>-50.598802</td>
              <td>14.260871</td>
              <td>12</td>
              <td>26.260871</td>
            </tr>
            <tr>
              <td>BSMX</td>
              <td>-3.539823</td>
              <td>19.672123</td>
              <td>7</td>
              <td>26.672123</td>
            </tr>
            <tr>
              <td>JMIA</td>
              <td>-4.900000</td>
              <td>16.003789</td>
              <td>13</td>
              <td>29.003789</td>
            </tr>
            <tr>
              <td>BFZ</td>
              <td>-2.479942</td>
              <td>13.124788</td>
              <td>17</td>
              <td>30.124788</td>
            </tr>
            <tr>
              <td>LAIX</td>
              <td>-12.547529</td>
              <td>27.272725</td>
              <td>6</td>
              <td>33.272725</td>
            </tr>
            <tr>
              <td>TPL</td>
              <td>-3.786357</td>
              <td>16.308633</td>
              <td>17</td>
              <td>33.308633</td>
            </tr>
            <tr>
              <td>SWX</td>
              <td>-4.309816</td>
              <td>19.883772</td>
              <td>14</td>
              <td>33.883772</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stocks-conclusion'>
        <h2>Results from a personal trial</h2>
        <p>
          After trying only this strategy for a month I was able to sell 20/34
          of the stocks I bought with an average 2.26% return. However, my other
          stocks fell so much that my overall profit was -0.76. Additionally, I
          wasted many hours watching the movments of individual stocks. I didn't
          enjoy this strategy and I perfer passive investing through ETFs.
        </p>
        <p className='stocks-github-link'>
          To see all the code for this project please visit my{' '}
          <a
            href='https://github.com/jmetzg11/Personal-Projects/blob/main/stocks.ipynb'
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

export default Stocks
