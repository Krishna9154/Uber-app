import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/TMkYp.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VechilePanel from '../Components/VehicalPanel'
import ConfirmRide from '../Components/ConfirmRide';
import LookingForDriver from '../Components/LookingForDriver';
import WaitingForDriver from '../Components/WaitingForDriver';
import Maps from '../Components/Maps'

const Home = () => {

  const [Pickup, setPickup] = useState('');
  const [Destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false)
  const [vechilePanelOpen, setvechilePanelOpen] = useState(false);
  const [Confirmride, setConfirmride] = useState(false);
  const [LookingFordriver, setLookingForDriver] = useState(false);
  const [watingForDriver, setwatingForDriver] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicalPannelRef = useRef(null)
  const ConfirmRideRef = useRef(null)
  const LookingForDriverRef = useRef(null)
  const watingForDriverRef = useRef(null)

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

  useGSAP(() => {
    if (Confirmride) {
      gsap.to(ConfirmRideRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmRideRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [Confirmride])

  useGSAP(() => {
    if (LookingFordriver) {
      gsap.to(LookingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(LookingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [LookingFordriver])

  useGSAP(() => {
    if (watingForDriver) {
      gsap.to(watingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(watingForDriverRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [watingForDriver])


  return (
    <div className='h-screen w-screen relative'>

      <div className="absolute inset-0 z-0 pointer-auto">
        <Maps />
      </div>

      {/* <img className='h-full w-full ' src={bg} /> */}
      <img className='w-25 absolute top-2 left-2 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />

      <div className='flex flex-col justify-end top-0  w-full h-screen absolute pointer-events-none'>
        <div className=' px-5   h-55 w-full bg-white  relative   rounded-2xl'>

          <div className='  flex justify-between w-full relative mt-2 pointer-events-auto'><h4 className='text-xl font-medium'>Find a trip</h4><i ref={panelCloseRef} className="text-2xl 
          text-gray-400 ri-skip-down-line" onClick={() => { setPanelOpen(false) }}></i></div>

          <form className='pointer-events-auto' onSubmit={(e) => { submithndlier(e) }}>
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

            <button  className='text-lg text-center text-white bg-green-600 rounded w-full p-1 mt-4 '>Confirm</button>

          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white overflow-hidden w-full pointer-events-auto '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setvechilePanelOpen={setvechilePanelOpen} />
        </div>

        <div ref={vehicalPannelRef} className=' bg-white fixed z-10 w-full h-90 p-2 flex flex-col gap-2 translate-y-full pointer-events-auto'>
          <VechilePanel setConfirmride={setConfirmride} setvechilePanelOpen={setvechilePanelOpen} />
        </div>

        <div ref={ConfirmRideRef} className=' bg-white fixed z-10 w-full h-115 p-2 flex flex-col gap-2 translate-y-full pointer-events-auto '>
          <ConfirmRide setConfirmride={setConfirmride} setvechilePanelOpen={setvechilePanelOpen} setLookingForDriver={setLookingForDriver} />
        </div>

        <div ref={LookingForDriverRef} className=' bg-white fixed z-10 w-full h-100 p-2 flex flex-col gap-2 translate-y-full pointer-events-auto '>
          <LookingForDriver setLookingForDriver={setLookingForDriver} />
        </div>

        <div ref={watingForDriverRef} className=' bg-white fixed z-10 w-full h-80 p-2 flex flex-col gap-2 translate-y-full pointer-events-auto'>
          <WaitingForDriver setwatingForDriver={setwatingForDriver} />
        </div>
      </div>
    </div>

  )
}

export default Home