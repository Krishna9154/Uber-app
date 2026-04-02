import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex flex-row justify-between mt-3'>

          <img className='h-12 rounded-full' src="https://img.freepik.com/premium-psd/png-male-driver-driving-car-while-smiling-transparent-background_768733-97459.jpg?w=360" />

          <div className='-ml-18'>
            <h2 className='text-lg font-semibold'>Krishna Yadav</h2>
            <p className='text-gray-400 -mt-1'>Basic level</p>
          </div>

          <div className='flex flex-col ml-1 items-end'>
            <h5 className='text-lg font-bold'>$325.00</h5>
            <p className='text-gray-400 -mt-1'>Earned</p>
          </div>
        </div>


        <div className=' h-32 rounded mt-3 w-full bg-gray-100 flex flex-row justify-between items-center p-6 '>
          <div className='flex flex-col items-center'>
            <h4><i className="ri-time-line text-3xl text-zinc-400 font-thin "></i></h4>
            <h1 className=' text-lg font-semibold '>10.2</h1>
            <p className='text-gray-500 text-sm '>Hours online</p>
          </div>

          <div className='flex flex-col items-center'>
            <h4><i className="ri-dashboard-3-line text-3xl text-zinc-400 font-thin"></i></h4>
            <h1 className=' text-lg font-semibold'>30 KM</h1>
            <p className='text-gray-500 text-sm'>Total Distance</p>
          </div>

          <div className='flex flex-col items-center'>
            <h4><i className="ri-bill-line text-3xl text-zinc-400 font-thin"></i></h4>
            <h1 className=' text-lg font-semibold '>20</h1>
            <p className='text-gray-500 text-sm  '>Total Jobs</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails