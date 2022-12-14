import { useState } from 'react'
import Header from './header/Header'
import Selections from './selections/Selections'
import Modify from './modify_elements/Modify'
import JoiningData from './joining_data/JoiningData.jsx'
import './d3.css'
import HandlingEvents from './handling_events/HandlingEvents'
import ControlFlow from './control_flow/ControlFlow'

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
        <ControlFlow />
      )}
    </div>
  )
}

export default D3
