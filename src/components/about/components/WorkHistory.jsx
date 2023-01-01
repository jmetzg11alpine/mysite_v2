import React from 'react'
import '../styles/workhistory.css'

const WorkHistory = () => {
  return (
    <div className='about-workhistory-container'>
      <h1>Work History</h1>
      <table className='about-workhistory-table'>
        <tr>
          <th className='about-workhistory-column-one'>Occupation</th>
          <th className='about-workhistory-column-two'>Location</th>
          <th className='about-workhistory-column-three'>Organization</th>
          <th className='about-workhistory-column-four'>Date</th>
        </tr>
        <tr>
          <td>Data Scientist</td>
          <td>Phoenix, AZ</td>
          <td>BlueOptima</td>
          <td>2022 - current</td>
        </tr>
        <tr>
          <td>Data Analyst</td>
          <td>Istanbul, Turkey</td>
          <td>FindBobi</td>
          <td>2021 - current</td>
        </tr>
        <tr>
          <td>Research Assistant</td>
          <td>Moscow, Russia</td>
          <td>Higher School of Economics</td>
          <td>2021</td>
        </tr>
        <tr>
          <td>Data Analyst</td>
          <td>Moscow, Russia</td>
          <td>Japan Tobacco</td>
          <td>2021</td>
        </tr>
        <tr>
          <td>Data Wrangler</td>
          <td>Moscow, Russia</td>
          <td>Greenpeace</td>
          <td>2019-2020</td>
        </tr>
        <tr>
          <td>Intern</td>
          <td>Washington, DC</td>
          <td>Dept of Commerce</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>Intern</td>
          <td>Moscow, Russia</td>
          <td>Carnegie Center</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>Literature Lecturer</td>
          <td>Moscow, Russia</td>
          <td>The American Center</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>Head Teacher</td>
          <td>Moscow, Russia</td>
          <td>Liden & Denz</td>
          <td>2015-2017</td>
        </tr>
        <tr>
          <td>Grade School Teacher</td>
          <td>Nablus, Palestine</td>
          <td>Pioneers Baccalaureate School</td>
          <td>2014</td>
        </tr>
        <tr>
          <td>English Teacher</td>
          <td>Jakarta, Indonesia</td>
          <td>English First</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>Advertising Assistant</td>
          <td>Hong Kong</td>
          <td>Engel & Volkers</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>Facility Management</td>
          <td>Catalonia, Spain</td>
          <td>El Fonoll</td>
          <td>2012</td>
        </tr>
        <tr>
          <td>Violinist</td>
          <td>Accra, Ghana</td>
          <td>National Symphony Orchetra Ghana</td>
          <td>2011</td>
        </tr>
      </table>
    </div>
  )
}

export default WorkHistory
