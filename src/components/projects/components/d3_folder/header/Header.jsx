import './header.css'

const Header = ({ section, setSection }) => {
  const handleClick = (e) => {
    setSection(e.target.value)
  }
  return (
    <div className='d3-header-container'>
      <button onClick={handleClick} value='colors'>
        Color Selector
      </button>
      <button onClick={handleClick} value='modify'>
        Movie Data
      </button>
      <button onClick={handleClick} value='joining_data'>
        Planet Data
      </button>
      <button onClick={handleClick} value='handling_events'>
        Ford Car Sales
      </button>
      <button onClick={handleClick} value='dry_fruits'>
        Dry Fruits
      </button>
      <button onClick={handleClick} value='density'>
        Pop. Density
      </button>
      <button onClick={handleClick} value='vehicle_depreciation'>
        Price Decrease
      </button>
    </div>
  )
}
export default Header
