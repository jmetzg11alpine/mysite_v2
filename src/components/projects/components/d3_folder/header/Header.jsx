import './header.css'

const Header = ({ section, setSection }) => {
  const handleClick = (e) => {
    setSection(e.target.value)
  }
  return (
    <div className='d3-header-container'>
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
      <button onClick={handleClick} value='vehicle_depreciation'>
        Price Decrease
      </button>
      <button onClick={handleClick} value='temperature'>
        Temperature
      </button>
      <button onClick={handleClick} value='wine_colors'>
        Wine Color
      </button>
      <button onClick={handleClick} value='employees'>
        Employees
      </button>
      <button onClick={handleClick} value='air'>
        Air
      </button>
      <button onClick={handleClick} value='bb'>
        Basketball
      </button>
      <button onClick={handleClick} value='university'>
        University
      </button>
      <button onClick={handleClick} value='google'>
        Google
      </button>
      <button onClick={handleClick} value='sales'>
        Sales
      </button>
      <button onClick={handleClick} value='tesla'>
        Tesla
      </button>
      <button onClick={handleClick} value='stocks'>
        Stocks
      </button>
    </div>
  )
}
export default Header
