import { useState } from 'react'
import './d3.css'
import Header from './header/Header'
import Modify from './modify_elements/Modify'
import JoiningData from './joining_data/JoiningData.jsx'
import HandlingEvents from './handling_events/HandlingEvents'
import DryFruits from './dry_fruits/DryFruits'
import VehicleDepreciation from './vehicle_depreciation/VehicleDepreciation'
import Temperature from './temperature/Temperature'
import WineColors from './wine_colors/WineColors'
import Employees from './employees/Employees'
import Air from './air/Air'
import BB from './bb/BB'
import University from './university/University'
import Google from './google/Google'
import Sales from './sales/Sales'
import Tesla from './tesla/Tesla'
import Stocks from './stocks/Stocks'
import BusinessSpending from './business_spending/BusinessSpending'
import Airport from './airport/Airport'
import R_AND_D from './r_and_d/R_AND_D'

function D3() {
  const [section, setSection] = useState('')
  console.log(section)
  return (
    <div className='d3-tutorial-App'>
      <Header section={section} setSection={setSection} />
      {section === 'modify' ? (
        <Modify />
      ) : section === 'joining_data' ? (
        <JoiningData />
      ) : section === 'handling_events' ? (
        <HandlingEvents />
      ) : section === 'dry_fruits' ? (
        <DryFruits />
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
      ) : section === 'university' ? (
        <University />
      ) : section === 'google' ? (
        <Google />
      ) : section === 'sales' ? (
        <Sales />
      ) : section === 'tesla' ? (
        <Tesla />
      ) : section === 'stocks' ? (
        <Stocks />
      ) : section === 'spending' ? (
        <BusinessSpending />
      ) : section === 'airport' ? (
        <Airport />
      ) : (
        <R_AND_D />
      )}
    </div>
  )
}

export default D3
