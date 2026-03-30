import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{ UserDatacontex } from '../Contex/Usercontex'
import axios from 'axios'

const UserLogin = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [userData, setUserData] = useState({});

  const {User, setUser} = React.useContext(UserDatacontex)
  const navigate =useNavigate()


  const submithandlier = async(e)=>{
    e.preventDefault();
    const UserData={
      email:email,
      password:password
    }

    const resposne = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,UserData)
    if(resposne.status===200){
      const data = resposne.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }


    setemail('')
    setpassword('')
  }


  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" className='w-18'/>

      <form onSubmit={(e)=>{submithandlier(e)}} className='mt-10 flex flex-col gap-1 '>

        <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>What's your email</h1>
        <input required
        value={email} 
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        type="text" 
        placeholder='email@example.com' 
        className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded mb-5 placeholder:text-base text-lg' />

        <h1 className='mb-2 text-shadow-mauve-400 text-lg font-medium'>Enter password</h1>
        <input required 
        value={password}
        onChange={(e)=>{
          setpassword(e.target.value)
        }}
        type="password" 
        placeholder='password' 
        className=' bg-[#ebe7e8]  p-2 w-full border-transparent rounded placeholder:text-base text-lg' />

        <button  className=' block w-full bg-black text-white text-center  p-3 rounded mt-4'>Login</button>
      </form>
      <p className='text-center mt-2'>New here? <Link to={'/signup'} className='text-blue-500 '>Create new Account</Link></p>
      </div>

      <div>
        <Link  to={'/captain-login'} 
        className=' block bg-[#10b461]  w-full text-white text-center  p-3 rounded mt-4'>Sign in as captain</Link>
      </div>
    </div>
  )
}

export default UserLogin