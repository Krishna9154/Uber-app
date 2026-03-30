import React from 'react'

const WaitingForDriver = () => {
  return (
    <div>
         <h2 className='w-full flex justify-end '> <i onClick={()=>{props.setLookingForDriver(false)}} className=" text-gray-300 flex justify-center text-2xl ri-close-circle-fill  w-10  "></i></h2>
          <h1 className='text-xl font-bold '>Looking For Driver</h1>

          <div className='w-full flex justify-center'>
            <img className='h-30 ' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" />
          </div>

          <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center'>
            <h1><i className="ri-map-pin-user-fill text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>562/11-A </h2>
              <span className='text-zinc-700 text-sm'>Kankariya Talab, Gwalior</span>
            </div>     
          </div>

          <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center'>
            <h1><i className="ri-map-pin-2-fill text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>562/11-A </h2>
              <span className='text-zinc-700 text-sm'>Kankariya Talab, Gwalior</span>
            </div>
          </div>

          <div className='flex felx-row w-full px-4 py-2    gap-4 items-center'>
            <h1><i className="ri-money-dollar-box-line text-xl"></i></h1>
            <div className='leading-tight'>
              <h2 className='text-lg font-medium'>₹193.20 </h2>
              <span className='text-zinc-700 text-sm'>Cash Cash</span>
            </div> 
          </div>
    </div>
  )
}

export default WaitingForDriver