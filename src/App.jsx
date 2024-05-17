
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect } from 'react'
import Contact from './pages/Contact'
import Expertise from './pages/Expertise'
import Projects from './pages/Projects'

function App() {
   const location = useLocation();

  useEffect(()=> {
         window.scrollTo(0,0);
  }, [location])
  return (
    <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/expertise' element={<Expertise />} />
                <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
