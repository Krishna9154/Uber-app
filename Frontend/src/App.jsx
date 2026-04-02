import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/UserSignUp'
import UserLogin from './pages/UserLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainPtotectedWrapper from './pages/CaptainPtotectedWrapper'
import UserLogOut from './pages/UserLogOut'
import CaptainLogOut from './pages/CaptainLogOut'
import Riding from './pages/Riding'

const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/signup" element={<UserSignup />}/>
        <Route path='/riding' element={<Riding />} />
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

        <Route path='/captain-home' element={
          <CaptainPtotectedWrapper>
            <CaptainHome />
          </CaptainPtotectedWrapper>
        } />

          <Route path='captain-logout' element={
          <CaptainPtotectedWrapper>
            <CaptainLogOut />
          </CaptainPtotectedWrapper>
          }/>
      </Routes>
      
    </div>
  )
}

export default App