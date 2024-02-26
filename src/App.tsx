import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Porfolio from './Pages/Porfolio'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='porfolio' element={<Porfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
