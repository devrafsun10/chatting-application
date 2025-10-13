import React from 'react'
import login from '../../assets/login.jpg'
import google from '../../assets/google.png'

const Login = () => {
  return (
     <div className='flex items-center '>
            <div className='w-1/2'>
            <div className='flex justify-end mr-[70px]'>
                <div>
                    <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Login to your account!</h3>  
            <img className=' mt-[13px] mb-[40px] cursor-pointer' src={google} alt="#google" /> 
            <div className=' relative w-[368px]'>
                <p className='absolute top-[-10px] left-[20px] px-3 bg-white tracking-[2px] font-secondary text-[13px] text-[#11175D] font-semibold'>Email Address</p>
                <input type="email"
                className='w-full py-[20px] pr-[66px] pl-[30px] border-b-2 border-[#B8BACF] rounded-[8px] mb-[60px] outline-none'
                placeholder='Your Email Address' />
                </div>
            <div className=' relative w-[368px]'>
                <p className='absolute top-[-10px] left-[20px] px-3 bg-white tracking-[2px] font-secondary text-[13px] text-[#11175D] font-semibold'>Password</p>
                <input type="text"
                className='w-full py-[20px] pr-[66px] pl-[30px] border-b-2 border-[#B8BACF] rounded-[8px] outline-none'
                placeholder='Password' />
                </div>
                <div className='w-[368px] mt-[30px] '>
                  <button className='bg-[#1E1E1E] rounded-full w-full py-[20px] text-white font-secondary font-semibold text-[20px] relative cursor-pointer'>
                    <span className=' relative z-[50]'>Login to Continue</span>
                   
                    <span className=' absolute top-1/2 left-1/2 bg-[#5B36F5]/25 w-[179px] h-[40px] -translate-1/2 blur-[10px]'></span>
                  </button>
    
                   <p className=' text-center mt-[10px] font-primary font-normal text-[13px] text-[#03014C]'>Don’t have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign I n</span></p>
    
                </div>
                
            </div>
                
                </div>  
            </div>
            <div className='w-1/2'>
            <img className='h-screen w-full object-cover' src={login} alt="#login" />
            </div>
        </div>
  )
}

export default Login