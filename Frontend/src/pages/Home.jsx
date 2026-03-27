import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/TMkYp.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Home = () => {

  const [Pickup, setPickup] = useState('');
  const [Destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen ] = useState(false)
  const panelRef = useRef(null)

  const submithndlier =(e)=>{
    e.preventDefault();
    // console.log(Pickup,Destination);
    setPickup('')
    setDestination('')
  }

  useGSAP(function(){
    gsap.to(panelRef.current,{
      height:'70%'
    })
  })


  return (   
    <div className=''>

      <div className='h-screen w-screen relative'>
        <img  className='h-full w-full ' src={bg} alt="" />
        <img className='w-25 absolute top-2 left-2 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

        <div className=' px-5 py-3  h-60 w-full bg-white  absolute bottom-0 left-0 rounded-2xl'>

        <form className='' onSubmit={(e)=>{submithndlier(e)}}>
          <h4 className='text-xl font-medium'>Find a trip</h4>

          <div className="line absolute h-18 w-1 top-[48%] -translate-y-1/2 left-8 bg-gray-700 rounded-full"></div>
          <input className='  px-10 py-3 mt-4 rounded bg-[#eeee] w-full border-0 focus:border-2 focus:border-yellow-500 outline-none text-base'
           type=" text"
           placeholder='Add a pick-up location'
           value={Pickup}
           onClick={()=>{
            setPanelOpen(true)
           }}
           onChange={(e)=>{setPickup(e.target.value)}} />
          <input className=' px-10 py-3  mt-5 mb-5 rounded bg-[#eeee] w-full border-0 focus:border-2 focus:border-yellow-500 outline-none text-base'
           type=" text"
           placeholder='Enter your destination'
           value={Destination}
           onChange={(e)=>{setDestination(e.target.value)}}
            onClick={()=>{
            setPanelOpen(true)
           }} />

        </form>
        </div>
        <div ref={panelRef} className='h-0 bg-red-400'></div>
      </div>
    </div>
  )
}

export default Home