import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-bottom h-screen w-full flex flex-col justify-between pt-5 '>
        <img src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className='w-30 ml-8'/>
        <div className='bg-white px-4 pb-7 py-4'>
          <h1 className='text-3xl font-bold'>Get started with Uber</h1>
          <Link to={'/login'} className=' block w-full bg-black text-white text-center  p-3 rounded-lg mt-4 '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home