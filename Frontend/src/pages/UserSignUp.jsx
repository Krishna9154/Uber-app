import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDatacontex } from '../Contex/Usercontex';



const UserSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [userData, setUserData] = useState({});

   const navigate =useNavigate()
   const {User, setUser} = React.useContext(UserDatacontex)
  

  const submithandlier =async(e)=>{
    e.preventDefault();
    const newUser ={
      fullname:{
      firstname:firstname,
      lastname:lastname
      },
      email:email,
      password:password
    }
    
   const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
   if(response.status===201){
    const data = response.data;
    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate('/')
   }

    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
  }
  return (
 <div className='p-8 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" className='w-18'/>
      <form onSubmit={(e)=>{submithandlier(e)}} className='mt-10 flex flex-col gap-1 '>

        <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>What's your FullName</h1>
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

        <button to={'/loin'} className=' block w-full bg-black text-white text-center  p-3 rounded mt-4'>Create Account</button>
      </form>
      <p className='text-center mt-2'>Already have an account? <Link to={'/login'} className='text-blue-500 '>Login</Link></p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum illum. Repellendus molestias, rem veniam debitis accusantium fugiat.</p>
      </div>
    </div>
  )
}

export default UserSignUp