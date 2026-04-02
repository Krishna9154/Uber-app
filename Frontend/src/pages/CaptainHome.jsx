import React, { useRef, useState } from 'react'
import bg from '../assets/TMkYp.png'
import {Link} from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {


  const [ridePopUp, setridePopUp] = useState(true)
  const ridePopUpRef=useRef(null)

  
useGSAP(()=>{
  if(ridePopUp){
    gsap.to(ridePopUpRef.current,{
      transform:"translateY(0)"
    })
  }else{
    gsap.to(ridePopUpRef.current,{
      transform:'translateY(100%)'
    })
  }
},[ridePopUp])





  return (
    <div className='h-screen w-full relative'>
      <div className='fixed flex flex-row justify-between w-full p-4 items-center'>
        <img className='w-20 -ml-2' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
        <Link to={'/captain-logout'} ><i className="ri-logout-box-r-line text-2xl font-normal bg-white h-12 w-12 rounded-full flex items-center justify-center"></i></Link>
      </div>
      <img className='h-full w-full ' src={bg} />

      <div className=' absolute bottom-0 rounded h-60 w-full bg-white  p-4 '>
        <CaptainDetails />
      </div>

      <div ref={ridePopUpRef} className='fixed bottom-0 h-120 w-full bg-white translate-y-full '>
        <RidePopUp  setridePopUp={setridePopUp}/>
      </div>

    </div>



  )
}

export default CaptainHome