import React from 'react'

const ConfirmRide = (props) => {


  // console.log(props.ridedata );
  // console.log(props.vechileType=="car");
  const selectedRide = props.ridedata?.rideData?.[props.vechileType] || []
  // console.log(selectedRide)

  



  return (
    <div className=' '>
      <h2 className='w-full flex justify-end '><i className=" text-gray-300 flex justify-center text-2xl ri-skip-down-line w-[80%] " onClick={() => { props.setConfirmride(false) }}></i> <i className=" text-gray-300 flex justify-center text-2xl ri-close-circle-fill  w-10  " onClick={() => {
        props.setvechilePanelOpen(false)
        props.setConfirmride(false)
      }}></i></h2>
      <h1 className='text-xl font-bold '>Confirm Your Ride</h1>

      <div className='w-full flex justify-center'>
        <img className='h-30 ' src={`${props.vechileType=="car"? 'https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png':props.vechileType=='bike'?"https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n":props.vechileType=='auto'?'https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png':'https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png'}`} />
      </div>

      <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center'>
        <h1><i className="ri-map-pin-user-fill text-xl"></i></h1>
        <div className='leading-tight'>
          <h2 className='text-lg font-medium'>Pickup</h2>
          <span className='text-zinc-700 text-sm'>{props.ridedata.Pickup}</span>
        </div>
      </div>

      <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center'>
        <h1><i className="ri-map-pin-2-fill text-xl"></i></h1>
        <div className='leading-tight'>
          <h2 className='text-lg font-medium'>Destination</h2>
          <span className='text-zinc-700 text-sm'>{props.ridedata.Destination}</span>
        </div>
      </div>

      <div className='flex felx-row w-full px-4 py-2    gap-4 items-center'>
        <h1><i className="ri-money-dollar-box-line text-xl"></i></h1>
        <div className='leading-tight'>
          <h2 className='text-lg font-medium'>{`₹${selectedRide?.totalFare}`} </h2>
          <span className='text-zinc-700 text-sm'>Cash Cash</span>
        </div>
      </div>

      <button onClick={() => {
        props.setLookingForDriver(true)
        props.setConfirmride(false)
      }} className='text-lg text-center text-white bg-green-600 rounded w-full p-1 mt-3'>Confirm</button>
      
    </div>
  )
}

export default React.memo(ConfirmRide) 