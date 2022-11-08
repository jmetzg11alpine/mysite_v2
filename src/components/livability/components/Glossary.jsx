const Glossary = () => {
  return (
    <div className='glossary-container'>
      <div className='glossary-title-container'>
        <h3 className='Glossary'>Glossary</h3>
      </div>
      <table className='livability-glossary-table'>
        <tbody>
          <tr className='row'>
            <td>
              <div className='glossary-cell'>
                {' '}
                <img
                  className='image'
                  src={require('../data/air.png')}
                  alt=''
                />
                <p>air pollution level</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/crime.png')}
                  alt=''
                />
                <p>crime rates</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/income.png')}
                  alt=''
                />
                <p>income levels</p>
              </div>
            </td>
          </tr>
          <tr className='row'>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/parking.png')}
                  alt=''
                />
                <p>time to find parking</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/population.png')}
                  alt=''
                />
                <p>city population</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/size.png')}
                  alt=''
                />
                <p>city land size</p>
              </div>
            </td>
          </tr>
          <tr className='row'>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/stations.png')}
                  alt=''
                />{' '}
                <p>electric car station count</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/temperature.png')}
                  alt=''
                />{' '}
                <p>average temperature</p>
              </div>
            </td>
            <td>
              <div className='glossary-cell'>
                <img
                  className='image'
                  src={require('../data/ufo.png')}
                  alt=''
                />{' '}
                <p>ufo count</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className='data-desclaimer'>
        *Data has been tampered with and shouldn't be taken literally*
      </p>
    </div>
  )
}
export default Glossary
