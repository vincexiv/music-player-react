import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import '../css/style.css'
import '../css/index.css'
import '../css/responsive.css'
import '../css/range-and-scrollbar.css'


function App(){
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />}/>
        <Route path="" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
