import '../styles/migration.css'
import mig_2 from '../img/r_mig_2.png'
import mig_3 from '../img/r_mig_3.png'
import mig_4 from '../img/r_mig_4.png'
import mig_5 from '../img/r_mig_5.png'
import mig_6 from '../img/r_mig_6.png'
import mig_7 from '../img/r_mig_7.png'
import mig_8 from '../img/r_mig_8.png'

const Migration = () => {
  return (
    <div className='migration-container projects-container'>
      <h1>Russian Migration</h1>
      <h2>Objective:</h2>
      <p>
        Can the population change in Russia's biggest cities be explained
        through data? My hypothesis is that through relevant data points we can
        determine what factors make a city grow or shrink.
      </p>
      <h2>Step 1 - Find the population change</h2>
      <p>
        From this{' '}
        <a
          href='https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D1%81_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC_%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5_100_%D1%82%D1%8B%D1%81%D1%8F%D1%87_%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9'
          target='_blank'
          rel='noopener noreferrer'
        >
          wikipedia
        </a>{' '}
        page we can web scrape the population table for the 171 listed cities.
        Based soley off of the 2020 and 2019 populations I created a population
        change variable.
      </p>
      <img className='migration-img-two' src={mig_2} alt='mig_2' />
      <p>
        The distribution of the percent change looks normal. Most cities grew
        slightly, the cities that lost population didn't lose more than 2%, and
        there are a few cities that grew more than 3%. Using city gps{' '}
        <a
          href='https://gist.github.com/nalgeon/5307af065ff0e3bc97927c832fabe26b'
          target='_blank'
          rel='noopener noreferrer'
        >
          coordinates
        </a>{' '}
        and labling each city according to their population change we can have a
        nice visual representation.
      </p>
      <img className='migration-img-three' src={mig_3} alt='mig_3' />
      <h2>Step 2 - Find the average salary for each city</h2>
      <p>
        From{' '}
        <a
          href='https://www.trud.com/elista/salary/1571.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Trud.com
        </a>{' '}
        we can web scrape the average salary of each city and add this to our
        data set.
      </p>
      <h2>Step 3 - Find a safety rating for each city</h2>
      <p>
        From{' '}
        <a
          href='https://www.domofond.ru/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Domofond.ru
        </a>{' '}
        we can web scrape a safety score for each city. 19 of my cities were not
        listed on the site. Therefore, I google searched each missing city and
        filled in my own safety score based on what I read about each city.
        Popular sources for this research were regional crime reports,
        newspapers, and traveling blogs. It's not an ideal method but I thought
        it was better than having missing data.
      </p>
      <h2>Step 4 - Find the vacancy rate</h2>
      <p>
        From{' '}
        <a
          href='https://hh.ru/search/vacancy'
          target='_blank'
          rel='noopener noreferrer'
        >
          hh.ru
        </a>{' '}
        we can web scrape the number vacancies for each city. This vacancy
        number in relation with the city's population will give us the vacancy
        rate.
      </p>
      <h2>Step 6 - Statistical model</h2>
      <table className='migration-table'>
        <tbody>
          <tr>
            <th>city</th>
            <th>19</th>
            <th>20</th>
            <th>percent_change</th>
            <th>label</th>
            <th>long</th>
            <th>lat</th>
            <th>salary</th>
            <th>safty</th>
            <th>vacany</th>
            <th>vacancy_rate</th>
          </tr>
          <tr>
            <td>Абакан</td>
            <td>186</td>
            <td>187</td>
            <td>0.54</td>
            <td>gain</td>
            <td>53.7223661</td>
            <td>91.4437792</td>
            <td>39275</td>
            <td>7.2</td>
            <td>1192</td>
            <td>6.374331551</td>
          </tr>
          <tr>
            <td>Альметьевск</td>
            <td>157</td>
            <td>158</td>
            <td>0.64</td>
            <td>gain</td>
            <td>54.9013662</td>
            <td>52.2970654</td>
            <td>33592</td>
            <td>7.3</td>
            <td>670</td>
            <td>4.240506329</td>
          </tr>
          <tr>
            <td>Ангарск</td>
            <td>225</td>
            <td>225</td>
            <td>0</td>
            <td>stable</td>
            <td>52.5448102</td>
            <td>103.8885385</td>
            <td>34463</td>
            <td>6</td>
            <td>958</td>
            <td>4.257777778</td>
          </tr>
          <tr>
            <td>Арзамас</td>
            <td>104</td>
            <td>104</td>
            <td>0</td>
            <td>stable</td>
            <td>55.3947544</td>
            <td>43.8407855</td>
            <td>33709</td>
            <td>6.9</td>
            <td>261</td>
            <td>2.509615385</td>
          </tr>
          <tr>
            <td>Армавир</td>
            <td>190</td>
            <td>189</td>
            <td>-0.53</td>
            <td>loss</td>
            <td>45.0010338</td>
            <td>41.132392</td>
            <td>31082</td>
            <td>6.6</td>
            <td>537</td>
            <td>2.841269841</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Элиста</td>
            <td>103</td>
            <td>103</td>
            <td>0</td>
            <td>stable</td>
            <td>46.3082947</td>
            <td>44.2701417</td>
            <td>36597</td>
            <td>6.8</td>
            <td>223</td>
            <td>2.165048544</td>
          </tr>
          <tr>
            <td>Энгельс</td>
            <td>226</td>
            <td>227</td>
            <td>0.44</td>
            <td>stable</td>
            <td>51.4854893</td>
            <td>46.1267479</td>
            <td>30929</td>
            <td>6.4</td>
            <td>947</td>
            <td>4.171806167</td>
          </tr>
          <tr>
            <td>Южно-Сахалинск</td>
            <td>201</td>
            <td>201</td>
            <td>0</td>
            <td>stable</td>
            <td>46.959133</td>
            <td>142.7381252</td>
            <td>49568</td>
            <td>6.3</td>
            <td>1578</td>
            <td>7.850746269</td>
          </tr>
          <tr>
            <td>Якутск</td>
            <td>319</td>
            <td>323</td>
            <td>1.25</td>
            <td>gain</td>
            <td>62.0280273</td>
            <td>129.7325717</td>
            <td>47502</td>
            <td>5.3</td>
            <td>881</td>
            <td>2.72755418</td>
          </tr>
          <tr>
            <td>Ярославль</td>
            <td>610</td>
            <td>608</td>
            <td>-0.33</td>
            <td>loss</td>
            <td>57.6216145</td>
            <td>39.897878</td>
            <td>34775</td>
            <td>6.2</td>
            <td>5346</td>
            <td>8.792763158</td>
          </tr>
        </tbody>
      </table>
      <p>
        Before running the data through any model we should have a table that
        resembles this. I ran this data through a Random Forest Classifier from
        sklearn because they provide a feature importance method that allows you
        to see which variables are important. My target variable is 'label' and
        my feature variables are '19', 'lat', 'salary', 'safety', and
        'vacancy_rate'. The feature importance ouputs are all within 7% of each
        other, which means one feature is not much better than the others at
        determing the target variable. Below are scatter plots to view the
        correlations of the feature variables with the target variable.
      </p>
      <img className='migration-img-scatter' src={mig_4} alt='mig_4' />
      <img className='migration-img-scatter' src={mig_5} alt='mig_5' />
      <img className='migration-img-scatter' src={mig_6} alt='mig_6' />
      <img className='migration-img-scatter' src={mig_7} alt='mig_7' />
      <img className='migration-img-scatter' src={mig_8} alt='mig_8' />
      <h1>Conclusion</h1>
      <p>
        The variables that were gathered were probably not the best. Safety
        ratings are subjective, hh.ru is not uniformly used throughout all of
        the cities, latitude doesn't accurately describe the climate that might
        affect one's choice to relocate, and one's salary will have different
        purchasing powers depending on the city. Finding official statistics for
        each city proved to be very challenging. I believe that if I had focused
        on administrative territories, where there are more official statistics,
        I would have been able to construct a more meaningful model that could
        predict population movement.
      </p>
      <p className='migration-link-github'>
        To see all the code for this project please visit my{' '}
        <a
          href='https://github.com/jmetzg11/Personal-Projects/blob/main/russian_city_migration.ipynb'
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

export default Migration
