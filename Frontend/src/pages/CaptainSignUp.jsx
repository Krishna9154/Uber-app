import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {CaptainDatacontex} from "../Contex/Captaincontex"
import axios from 'axios';


const CaptainSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [captainData, setcaptainData] = useState({});
  const [color, setcolor] = useState('');
  const [plate, setplate] = useState('');
  const [capacity, setcapacity] = useState('');
  const [vechicleType, setvechicleType] = useState('');

  
  const navigate = useNavigate()
  const{Captain, setCaptain} = React.useContext(CaptainDatacontex)

  const submithandlier =async(e)=>{
    e.preventDefault();
    const captain={
      fullname:{
      firstname:firstname,
      lastname:lastname
      },
      email:email,
      password:password,
      vechicle:{
        color:color,
        plate:plate,
        capacity:Number(capacity),
        vechicleType:vechicleType
      }
    }
      //  console.log(captain);
    // console.log(typeof(capacity));

 try {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/captain/register`,
    captain
  );

  if (response.status === 201) {
    const data = response.data;
    setCaptain(data.captain);
    localStorage.setItem('token', data.token);
    navigate('/captain-login');
    console.log(data); // ✅ success data
  }

} catch (err) {
  console.log("ERROR 👉", err.response?.data); // 🔥 yaha milega real error
}   

    
    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
    setcapacity('')
    setcolor('')
    setplate('')
    setvechicleType('')
    // console.log(captainData);
  }




  return (
     <div className='p-8 h-screen flex flex-col justify-between'>
          <div>
            <img src="https://pngimg.com/d/uber_PNG24.png" className='w-20'/>
          <form onSubmit={(e)=>{submithandlier(e)}} className='mt-8 flex flex-col gap-1 '>
    
            <h1 className='mb-1 text-shadow-mauve-400 text-lg font-medium'>What's are Captain's name</h1>
            <div className='flex gap-2'>
    
            <input required
            value={firstname} 
            onChange={(e)=>{
              setfirstname(e.target.value)
            }}
            type="text" 
            placeholder='First name' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-3 placeholder:text-l text-base' />
    
            <input 
            value={lastname} 
            onChange={(e)=>{
              setlastname(e.target.value)
            }}
            type="text" 
            placeholder='Last name' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-3 placeholder:text-l text-base' />
    
            </div>
    
            <h1 className='mb-1 text-shadow-mauve-400 text-lg font-medium'>What's your email</h1>
            <input required
            value={email} 
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            type="text" 
            placeholder='email@example.com' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-3 placeholder:text-l text-base' />
    
            <h1 className='mb-1 text-shadow-mauve-400 text-lg font-medium'>Enter password</h1>
            <input required 
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            type="password" 
            placeholder='password' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded placeholder:text-sm text-base' />


            <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>Enter Your Vechile Detail's</h1>
            <div className='flex gap-2'>
    
            <input required
            value={color} 
            onChange={(e)=>{
              setcolor(e.target.value)
            }}
            type="text" 
            placeholder='Color' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-3 placeholder:text-l text-base' />
    
            <input 
            value={plate} 
            onChange={(e)=>{
              setplate(e.target.value)
            }}
            type="text" 
            placeholder='Plate Number' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-3 placeholder:text-l text-base' />
    
            </div>
            
            <div className='flex gap-2'>
    
            <input required
            value={capacity} 
            onChange={(e)=>{
              setcapacity(e.target.value)
            }}
            type="text" 
            placeholder='Capacity' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-2 placeholder:text-l text-base' />
    
            <input 
            value={vechicleType} 
            onChange={(e)=>{
              setvechicleType(e.target.value)
            }}
            type="text" 
            placeholder='Vechile Type' 
            className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-2 placeholder:text-l text-base' />
    
            </div>

            
    
            <button to={'/loin'} className=' block w-full bg-black text-white text-center  p-3 rounded mt-4'>Create Account</button>
          </form>
          <p className='text-center mt-2'>Already have an account? <Link to={'/captain-login'} className='text-blue-500 '>Login</Link></p>
          </div>
    

        </div>
  )
}

export default CaptainSignUp