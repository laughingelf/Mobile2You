import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import Services from './pages/Services'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
