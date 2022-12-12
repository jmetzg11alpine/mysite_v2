import './header.css'

const Header = ({ section, setSection }) => {
  const handleClick = (e) => {
    setSection(e.target.value)
  }
  return (
    <div className='d3-header-container'>
      <button onClick={handleClick} value='svgs'>
        Basic D3 Elements
      </button>
      <button onClick={handleClick} value='colors'>
        Element Selector
      </button>
      <button onClick={handleClick} value='modify'>
        Modify Elements with Movie Data
      </button>
      <button onClick={handleClick} value='joining_data'>
        Joining Data with Planet Data
      </button>
      <button onClick={handleClick} value='handling_events'>
        Handling Events with Car Data
      </button>
    </div>
  )
}
export default Header
