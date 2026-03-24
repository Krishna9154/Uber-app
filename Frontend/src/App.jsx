import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/UserSignUp'
import UserLogin from './pages/UserLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'
import { UserDatacontex } from './Contex/Usercontex'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogOut from './pages/UserLogOut'
import CaptainLogOut from './pages/CaptainLogOut'

const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/signup" element={<UserSignup />}/>
        <Route path="/captain-login" element={<CaptainLogin />}/>
        <Route path="/captain-signup" element={<CaptainSignUp />}/>
        <Route path='/home'  element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }/>
        <Route path='/logout' element={
          <UserProtectedWrapper>
          <UserLogOut />
          </UserProtectedWrapper>} />

          <Route path='captain-logout' element={
            <UserProtectedWrapper>
              <CaptainLogOut />
            </UserProtectedWrapper>
          }/>
      </Routes>
      
    </div>
  )
}

export default App