import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
                <h2 className='w-full flex justify-center '><i className=" text-gray-300 flex justify-center text-2xl ri-skip-down-line w-[80%] " onClick={() => { props.setConfirmride(false) }}></i></h2>
          <h1 className='text-xl font-semibold mb-2'>Choose a Vehicle </h1>
    </div>
  )
}

export default ConfirmRide