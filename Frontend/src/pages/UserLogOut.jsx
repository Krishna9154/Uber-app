import React from 'react'
import axios from 'axios'
import { Navigate ,useNavigate } from 'react-router-dom'

const UserLogOut = () => {
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`     
        }
    })
    .then((response)=>{
        if(response.status===200){
            localStorage.removeItem('token')
            // return <Navigate to="/login" />
            navigate('/login')
        }
    })

  return (
    <div>UserLogOut</div>
  )
}

export default UserLogOut