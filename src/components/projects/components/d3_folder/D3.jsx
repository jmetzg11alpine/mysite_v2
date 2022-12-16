import { useState } from 'react'
import './d3.css'
import Header from './header/Header'
import Selections from './selections/Selections'
import Modify from './modify_elements/Modify'
import JoiningData from './joining_data/JoiningData.jsx'
import HandlingEvents from './handling_events/HandlingEvents'
import Density from './density/Density'

function D3() {
  const [section, setSection] = useState('')
  console.log(section)
  return (
    <div className='d3-tutorial-App'>
      <Header section={section} setSection={setSection} />
      {section === 'colors' ? (
        <Selections />
      ) : section === 'modify' ? (
        <Modify />
      ) : section === 'joining_data' ? (
        <JoiningData />
      ) : section === 'handling_events' ? (
        <HandlingEvents />
      ) : (
        <Density />
      )}
    </div>
  )
}

export default D3
