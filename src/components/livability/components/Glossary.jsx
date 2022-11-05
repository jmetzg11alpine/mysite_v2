const Glossary = () => {
  return (
    <div className='glossary-container'>
      <h3 className='Glossary'>Glossary</h3>
      <table>
        <tr className='row'>
          <td>
            <img className='image' src={require('../data/air.png')} alt='' />
          </td>
          <td className='cell-text'>air pollution level</td>
          <td>
            <img className='image' src={require('../data/crime.png')} alt='' />
          </td>
          <td className='cell-text'>crime rates</td>
          <td>
            <img className='image' src={require('../data/income.png')} alt='' />
          </td>
          <td className='cell-text'>income levels</td>
        </tr>
        <tr className='row'>
          <td>
            <img
              className='image'
              src={require('../data/parking.png')}
              alt=''
            />
          </td>
          <td className='cell-text'>time to find parking</td>
          <td>
            <img
              className='image'
              src={require('../data/population.png')}
              alt=''
            />
          </td>
          <td className='cell-text'>city population</td>
          <td>
            <img className='image' src={require('../data/size.png')} alt='' />
          </td>
          <td className='cell-text'>city land size</td>
        </tr>
        <tr className='row'>
          <td>
            <img
              className='image'
              src={require('../data/stations.png')}
              alt=''
            />
          </td>
          <td className='cell-text'>electric car station count</td>
          <td>
            <img
              className='image'
              src={require('../data/temperature.png')}
              alt=''
            />
          </td>
          <td className='cell-text'>average temperature</td>
          <td>
            <img className='image' src={require('../data/ufo.png')} alt='' />
          </td>
          <td className='cell-text'>ufo count</td>
        </tr>
      </table>
      <p>Data has been tampered with and shouldn't be taken literally</p>
    </div>
  )
}
export default Glossary
