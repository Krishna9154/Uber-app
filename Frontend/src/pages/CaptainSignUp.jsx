import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [captainData, setcaptainData] = useState({});

  const submithandlier =(e)=>{
    e.preventDefault();
    setcaptainData({
      fullname:{
      firstname:firstname,
      lastname:lastname
      },
      email:email,
      password:password
    })
    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
    console.log(userData);
  }




  return (
     <div className='p-8 h-screen flex flex-col justify-between'>
          <div>
            <img src="https://pngimg.com/d/uber_PNG24.png" className='w-20'/>
          <form onSubmit={(e)=>{submithandlier(e)}} className='mt-10 flex flex-col gap-1 '>
    
            <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>What's are Captain's name</h1>
            <div className='flex gap-2'>
    
            <input required
            value={firstname} 
            onChange={(e)=>{
              setfirstname(e.target.value)
            }}
            type="text" 
            placeholder='First name' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-5 placeholder:text-l text-base' />
    
            <input 
            value={lastname} 
            onChange={(e)=>{
              setlastname(e.target.value)
            }}
            type="text" 
            placeholder='Last name' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-5 placeholder:text-l text-base' />
    
            </div>
    
            <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>What's your email</h1>
            <input required
            value={email} 
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            type="text" 
            placeholder='email@example.com' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-5 placeholder:text-l text-base' />
    
            <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>Enter password</h1>
            <input required 
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            type="password" 
            placeholder='password' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded placeholder:text-sm text-base' />
    
            <button to={'/loin'} className=' block w-full bg-black text-white text-center  p-3 rounded mt-4'>Create Captain</button>
          </form>
          <p className='text-center mt-2'>Already have an account? <Link to={'/captain-login'} className='text-blue-500 '>Login</Link></p>
          </div>
    
          <div>
            <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum illum. Repellendus molestias, rem veniam debitis accusantium fugiat.</p>
          </div>
        </div>
  )
}

export default CaptainSignUp