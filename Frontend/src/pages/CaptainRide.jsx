import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/TMkYp.png'
import FinishRidePanel from '../Components/FinishRidePanel'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const CaptainRide = () => {


  const [finishRide, setfinishRide] = useState(false)
  const finishRideRef =useRef(null)

  useGSAP(()=>{
    if(finishRide){
      gsap.to(finishRideRef.current,{
        transform:'translateY(0)'
      })
    } else{
      gsap.to(finishRideRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[finishRide])



  return (
    <div className='h-screen w-full relative'>


      <div className='fixed flex flex-row justify-between w-full p-4 items-center'>
        <img className='w-20 -ml-2' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
        <Link to={'/captain-logout'} ><i className="ri-logout-box-r-line text-2xl font-normal bg-white h-12 w-12 rounded-full flex items-center justify-center"></i></Link>
      </div>
      <img className='h-full w-full ' src={bg} />

      <div onClick={()=>{setfinishRide(true)}} className='h-[20%] w-full bg-yellow-400 absolute bottom-0  p-2'>
        <h2 className='w-full flex justify-center  '><i className=" text-black flex justify-center text-2xl ri-arrow-up-wide-line w-[80%]  mb-4"></i> </h2>
        <div  className='flex justify-between items-center mx-2'>
          <h2 className='font-semibold text-lg'>4 Km Away</h2>
          <button  className='text-lg text-center text-white  bg-green-600  rounded w-1/2 p-1 active:scale-95 h-10 '>Complete Ride</button>
        </div>
      </div>

      <div ref={finishRideRef} className='fixed bottom-0 h-[87%] w-full bg-white translate-y-full '>
        <FinishRidePanel setfinishRide={setfinishRide} />
      </div>

    </div>
  )
}

export default CaptainRide