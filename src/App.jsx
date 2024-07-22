import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
     </Routes>
       
    </>
  )
}

export default App
