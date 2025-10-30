import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Admission from './pages/Admission/Admission'
import Contact from './pages/Contact/Contact'
import Courses from './pages/Courses/Courses'
import Facilities from './pages/Facilities/Facilities'
import Career from './pages/Career/Career'
import Gallery from './pages/Gallery/Gallery'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BscNursing from './pages/BscNursing/BscNursing'
import Dpharm from './pages/D Pharm/Dpharm'
import Carrerdetails from './pages/Carrer details/Carrerdetails'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import { ToastContainer } from 'react-toastify'
import ComingSoon from './pages/Coming Soon/ComingSoon'


function App() {
  const location = useLocation()

  // Routes where Header/Footer should NOT be shown
  const hideHeaderFooter = location.pathname.startsWith("/admin")

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admission' element={<ComingSoon />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/career' element={<ComingSoon />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/dpharm' element={<Dpharm />} />
        <Route path='/bscnursing' element={<BscNursing />} />
        <Route path='/careerdetails' element={<ComingSoon />} />


        {/* New Admin Route */}
        <Route path='/admin' element={<AdminDashboard />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
      <ToastContainer/>
    </>
  )
}

export default App
