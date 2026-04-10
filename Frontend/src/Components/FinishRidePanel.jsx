import React from 'react'
import {Link} from 'react-router-dom'

const FinishRidePanel = (props) => {
  return (
     <div className='p-3 '>
         <h2 className='w-full flex justify-center '><i className=" text-gray-300 flex justify-center text-2xl ri-arrow-down-wide-line w-[80%] mb-4 " onClick={() => { props.setfinishRide(false) }}></i> </h2>
          <h1 className='text-2xl font-semibold  mb-6'>Your Ride is Completed</h1>

        <div className='flex flex-row justify-between mt-3 bg-yellow-300 p-3 rounded-xl'>

          <img className='h-12 rounded-full' src="https://img.freepik.com/premium-psd/png-male-driver-driving-car-while-smiling-transparent-background_768733-97459.jpg?w=360" />

          <div className='-ml-18'>
            <h2 className='text-lg font-semibold'>Krishna Yadav</h2>
            <p className='text-gray-400 -mt-1'>Basic level</p>
          </div>

          <div className='flex flex-col ml-1 items-end'>
            <h5 className='text-lg font-medium'>$25.00</h5>
            <p className='text-gray-400 -mt-1'>2.2 km</p>
          </div>
        </div>


          <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center mt-6 mb-4'>
            <h1><i className="ri-map-pin-user-fill text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>562/11-A </h2>
              <span className='text-zinc-700 text-sm'>Kankariya Talab, Gwalior</span>
            </div>     
          </div>

          <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center mb-4'>
            <h1><i className="ri-map-pin-2-fill text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>562/11-A </h2>
              <span className='text-zinc-700 text-sm'>Kankariya Talab, Gwalior</span>
            </div>
          </div>

          <div className='flex felx-row w-full px-4 py-2 border-gray-200  gap-4 items-center '>
            <h1><i className="ri-money-dollar-box-line text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>₹193.20 </h2>
              <span className='text-zinc-700 text-sm'>Cash Cash</span>
            </div> 
          </div>





      <div className='flex flex-col justify-between items-center mt-6  w-full'>
          <Link to={'/captain-home'} className='text-lg text-center text-white  bg-green-600  rounded  p-2 active:scale-95 w-full '>Finish Ride</Link>

          <p className='leading-tight mt-8 text-xs '>Click on finish Ride button if you have completed the payment.</p>
      </div>

    </div>
  )
}

export default FinishRidePanel