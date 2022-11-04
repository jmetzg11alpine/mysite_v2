import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/home/Home'
import Livability from './components/livability/Livability'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/livability' element={<Livability />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

//  <Link to='home' style={linkStyle}>
//     Home
//   </Link>
//   |
//   <Link to='livability' style={linkStyle}>
//     Livability
//   </Link>
//   |
//   <Link to='quiz' style={linkStyle}>
//     Quiz
//   </Link>
//   |
//   <Link to='projects' style={linkStyle}>
//     Projects
//   </Link>
//   |
//   <Link to='about' style={linkStyle}>
//     About
//   </Link>
