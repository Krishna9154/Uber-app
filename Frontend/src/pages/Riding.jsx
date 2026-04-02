import React from 'react'
import bg from '../assets/TMkYp.png'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
         <div className='h-screen '>

            <Link to={'/home'} className='fixed w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center right-3 top-3'>
                <i className="ri-home-4-line text-lg font-semibold text-gray-600"></i>
            </Link> 

            <div className='h-1/2'>
                <img className='h-full w-full  object-cover' src={bg} />
            </div>



            <div className='p-3'>

                <div className='w-full flex justify-between items-center'>
                    <img className='h-25 ' src="https://i.pinimg.com/originals/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.png" />

                    <div className='flex flex-col items-end '>
                        <h4 className='text-base text-gray-500 font-medium'>Sahil tomar</h4>
                        <h1 className='text-lg font-semibold -mt-1 -mb-1'>MP 07 MZ 2540</h1>
                        <h4 className='text-gray-400'>White Suzuki S-presso LXI</h4>

                    </div>
                </div>

                <div className='flex felx-row w-full px-4 py-2  border-b-2 border-[#eeee] gap-4 items-center'>
                    <h1><i className="ri-map-pin-user-fill text-xl"></i></h1>
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

                <button className='text-lg text-center text-white bg-green-600 rounded w-full p-1 mt-5'>Make Payment</button>
            </div>


        </div>
    )
}

export default Riding