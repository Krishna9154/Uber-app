import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
// import {UserDataContext} from '../context/UserDataContext'

const UserProtectedWrapper = ({ children }) => {

    // const navigate=useNavigate();
    // const {user}=React.useContext(UserDataContext);
    const token=localStorage.getItem('token');
    if(!token){
       return <Navigate to="/login" />
    }
    
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper