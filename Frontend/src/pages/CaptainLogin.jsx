import { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [captainData, setcaptainData] = useState({});

  const submithandlier =(e)=>{
    setpassword('')
    setcaptainData({
      email:email,
      password:password
    })
    e.preventDefault();
    setemail('')
  }
  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://pngimg.com/d/uber_PNG24.png" className='w-20'/>

      <form onSubmit={(e)=>{submithandlier(e)}} className='mt-8 flex flex-col gap-1 '>

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

        <button to={'/loin'} className=' block w-full bg-black text-white text-center  p-3 rounded mt-4'>Login</button>
      </form>
      <p className='text-center mt-2'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-500 '>Register as a Captain</Link></p>
      </div>

      <div>
        <Link  to={'/login'} 
        className=' block bg-[#d5622d]  w-full text-white text-center  p-3 rounded mt-4'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin