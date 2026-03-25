import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate , useNavigate} from 'react-router-dom'

const CaptainLogOut = () => {

 const token = localStorage.getItem('captain-token')
    const navigate = useNavigate()

useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('captain-token')
            navigate('/captain-login')
        }
    }).catch((error) => {
        console.error('Logout failed:', error)
    })
},[token])
            
    

  return (
    <div>CaptainLogOut</div>
  )
}

export default CaptainLogOut