import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/TMkYp.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';

const Home = () => {

  const [Pickup, setPickup] = useState('');
  const [Destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false)
  const [vechilePanelOpen, setvechilePanelOpen] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicalPannelRef = useRef(null)

  const submithndlier = (e) => {
    e.preventDefault();
    // console.log(Pickup,Destination);
    setPickup('')
    setDestination('')
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '80%',
        padding: 24
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vechilePanelOpen) {
      gsap.to(vehicalPannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicalPannelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vechilePanelOpen])


  return (
    <div className='h-screen w-screen relative overflow-hidden'>

      <img className='h-full w-full ' src={bg} />
      <img className='w-25 absolute top-2 left-2 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />

      <div className='flex flex-col justify-end top-0  w-full h-screen absolute'>
        <div className=' px-5   h-48 w-full bg-white  relative   rounded-2xl'>

          <div className='  flex justify-between w-full relative mt-2'><h4 className='text-xl font-medium'>Find a trip</h4><i ref={panelCloseRef} className="text-2xl 
          text-gray-400 ri-skip-down-line" onClick={() => { setPanelOpen(false) }}></i></div>

          <form className='' onSubmit={(e) => { submithndlier(e) }}>
            <div className="line absolute h-18 w-1 top-[58%] -translate-y-1/2 left-8 bg-gray-700 rounded-full"></div>
            <input className='  px-10 py-3 mt-4 rounded bg-[#eeee] w-full border-0 focus:border-2 focus:border-yellow-500 outline-none text-base'
              type=" text"
              placeholder='Add a pick-up location'
              value={Pickup}
              onClick={() => {
                setPanelOpen(true)
              }}
              onChange={(e) => { setPickup(e.target.value) }} />
            <input className=' px-10 py-3  mt-5 mb-3 rounded bg-[#eeee] w-full border-0 focus:border-2 focus:border-yellow-500 outline-none text-base'
              type=" text"
              placeholder='Enter your destination'
              value={Destination}
              onChange={(e) => { setDestination(e.target.value) }}
              onClick={() => {
                setPanelOpen(true)
              }} />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white overflow-hidden w-full '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setvechilePanelOpen={setvechilePanelOpen} />
        </div>

        <div ref={vehicalPannelRef} className=' bg-white fixed z-10 w-full h-90 p-2 flex flex-col gap-2 translate-y-full '>

          <h2 className='w-full flex justify-center '><i className=" text-gray-300 flex justify-center text-2xl ri-skip-down-line w-[80%] " onClick={() => { setvechilePanelOpen(false) }}></i></h2>
          <h1 className='text-xl font-semibold mb-2'>Choose a Vehicle </h1>

          <div className='px-2 flex items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-20' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>UberGo <i className="ri-user-fill">4</i></h2>
              <h4>2 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, compact rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹193.20</h2>
          </div>

          <div className='px-2 gap-2  flex flex-row items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-18 p-3' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>Moto <i className="ri-user-fill">1</i></h2>
              <h4>3 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, motercycle rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹65</h2>
          </div>

          <div className='px-1  flex flex-row items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-15 p-2' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>UberGo <i className="ri-user-fill">4</i></h2>
              <h4>2 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, compact rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹118.86</h2>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Home