import React, { useEffect,useState } from 'react'
import axios from 'axios';
import{useNavigate} from 'react-router-dom';

import {CaptainDatacontex} from '../Contex/Captaincontex'

const CaptainPtotectedWrapper = ({children}) => {

  const navigate = useNavigate();
  const {Captain,setCaptain}= React.useContext(CaptainDatacontex);
  const [ isLoading, setIsLoading ] = useState(true)
  
  const token=localStorage.getItem("token");

  useEffect(()=>{
    if(!token){
      navigate('/captain-login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
     headers: {
                Authorization: `Bearer ${token}`
            }
    }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
        .catch(err => {

                localStorage.removeItem('token')
                setIsLoading(false)
                navigate('/captain-login')
            })
  },[token])

     if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


  return (
    <>
      {children}
    </>
  )
}

export default CaptainPtotectedWrapper