import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Livability from './components/livability/Livability'
import GraphContainer from './components/livability/components/chart/GraphContainer'
import DataFlow from './components/livability/components/DataFlow'
import QuizHome from './components/quiz/QuizHome'
import Quizzes from './components/quiz/components/Quizzes'
import Q1 from './components/quiz/components/Q1'
import Q2 from './components/quiz/components/Q2'
import Q3 from './components/quiz/components/Q3'
import Q4 from './components/quiz/components/Q4'
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
          <Route path='/quiz' element={<QuizHome />}>
            <Route path='' element={<Quizzes />} />
            <Route path='q1' element={<Q1 />} />
            <Route path='q2' element={<Q2 />} />
            <Route path='q3' element={<Q3 />} />
            <Route path='q4' element={<Q4 />} />
          </Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
