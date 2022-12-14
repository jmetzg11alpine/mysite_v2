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
      <button onClick={handleClick} value='control_flow'>
        Dry Fruits
      </button>
    </div>
  )
}
export default Header
