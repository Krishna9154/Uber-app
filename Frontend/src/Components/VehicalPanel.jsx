import React from 'react'

const VehicalPanel = (props) => {
  return (
    <div>
          <h2 className='w-full flex justify-center '><i className=" text-gray-300 flex justify-center text-2xl ri-skip-down-line w-[80%] " onClick={() => { props.setvechilePanelOpen(false) }}></i></h2>
          <h1 className='text-xl font-semibold mb-2'>Choose a Vehicle </h1>

          <div onClick={()=>{props.setConfirmride(true)}} className='px-2 flex items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-20' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>UberGo <i className="ri-user-fill">4</i></h2>
              <h4>2 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, compact rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹193.20</h2>
          </div>

          <div onClick={()=>{props.setConfirmride(true)}} className='px-2 gap-2  flex flex-row items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-18 p-3' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>Moto <i className="ri-user-fill">1</i></h2>
              <h4>3 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, motercycle rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹65</h2>
          </div>

          <div onClick={()=>{props.setConfirmride(true)}}  className='px-1  flex flex-row items-center border-2 border-gray-100 active:border-black rounded-xl'>
            <img className='h-15 p-2' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" />
            <div className=' p-1 w-full  leading-tight'>
              <h2 className='font-medium'>UberGo <i className="ri-user-fill">4</i></h2>
              <h4>2 mins away</h4>
              <span className='text-[12px] text-gray-400'>Affordable, compact rides</span>
            </div>
            <h2 className='font-medium text-l p-1'>₹118.86</h2>
          </div>
    </div>
  )
}

export default VehicalPanel