import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import ML from './components/ml/Ml'
import States from './components/ml/nlp/States'
import Image from './components/ml/image/Image'
import Livability from './components/livability/Livability'
import GraphContainer from './components/livability/components/chart/GraphContainer'
import DataFlow from './components/livability/components/DataFlow'
import QuizHome from './components/quiz/QuizHome'
import Quizzes from './components/quiz/components/Quizzes'
import Q1 from './components/quiz/components/Q1'
import Q2 from './components/quiz/components/Q2'
import Q3 from './components/quiz/components/Q3'
import Q4 from './components/quiz/components/Q4'
import World from './components/world/World'
import Projects from './components/projects/Projects'
import FDI from './components/projects/components/FDI'
import DS from './components/projects/components/DS'
import Transport from './components/projects/components/Transport'
import Migration from './components/projects/components/Migration'
import Stocks from './components/projects/components/Stocks'
import Apartments from './components/projects/components/Apartments'
import About from './components/about/About'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ml' element={<ML />}>
            <Route path='' element={<States />} />
            <Route path='image' element={<Image />} />
          </Route>
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
          <Route path='/world' element={<World />} />
          <Route path='/projects'>
            <Route index element={<Projects />} />
            <Route path='fdi' element={<FDI />} />
            <Route path='ds' element={<DS />} />
            <Route path='transport' element={<Transport />} />
            <Route path='migration' element={<Migration />} />
            <Route path='stocks' element={<Stocks />} />
            <Route path='apartments' element={<Apartments />} />
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
