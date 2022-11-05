import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Livability from './components/livability/Livability'
import GraphContainer from './components/livability/components/chart/GraphContainer'
import DataFlow from './components/livability/components/DataFlow'
import Quiz from './components/quiz/Quiz'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/livability' element={<Livability />}>
            <Route path='' element={<GraphContainer />} />
            <Route path='data_flow' element={<DataFlow />} />
          </Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
