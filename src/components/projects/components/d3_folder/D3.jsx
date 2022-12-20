import { useState } from 'react'
import './d3.css'
import Header from './header/Header'
import Selections from './selections/Selections'
import Modify from './modify_elements/Modify'
import JoiningData from './joining_data/JoiningData.jsx'
import HandlingEvents from './handling_events/HandlingEvents'
import DryFruits from './dry_fruits/DryFruits'
import Density from './density/Density'
import VehicleDepreciation from './vehicle_depreciation/VehicleDepreciation'
import Temperature from './temperature/Temperature'
import WineColors from './wine_colors/WineColors'
import Employees from './employees/Employees'
import Air from './air/Air'
import BB from './bb/BB'
import University from './university/University'

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
      ) : section === 'dry_fruits' ? (
        <DryFruits />
      ) : section === 'density' ? (
        <Density />
      ) : section === 'vehicle_depreciation' ? (
        <VehicleDepreciation />
      ) : section === 'temperature' ? (
        <Temperature />
      ) : section === 'wine_colors' ? (
        <WineColors />
      ) : section === 'employees' ? (
        <Employees />
      ) : section === 'air' ? (
        <Air />
      ) : section === 'bb' ? (
        <BB />
      ) : (
        <University />
      )}
    </div>
  )
}

export default D3
