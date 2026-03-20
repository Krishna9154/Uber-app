import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignUp'
import UserLogin from './pages/UserLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'
import { UserDatacontex } from './Contex/Usercontex'

const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/signup" element={<UserSignup />}/>
        <Route path="/captain-login" element={<CaptainLogin />}/>
        <Route path="/captain-signup" element={<CaptainSignUp />}/>
      </Routes>
    </div>
  )
}

export default App