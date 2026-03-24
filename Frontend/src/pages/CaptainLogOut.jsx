import React from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const CaptainLogOut = () => {

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`     
        }
    })
    .then((response)=>{
        if(response.status===200){
            localStorage.removeItem('token')
            return <Navigate to="/captain-login" />
        }
    })


  return (
    <div>CaptainLogOut</div>
  )
}

export default CaptainLogOut