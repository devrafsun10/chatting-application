import React, {  useEffect, useState } from 'react'
import Talksy from '../../../public/talksy.png'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';


const Home = () => {
   const auth = getAuth();
   const navigate = useNavigate();
  const data = useSelector((state)=> (state.userInfo.value))
  console.log(data);
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if(!data){
      navigate("/login")
    }
  })

   onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
           setVerify(true)
        }
        setLoading(false) 
    });

  // useEffect(()=>{
  //   if(data.emailVerified){
  //     setVerify(true)
  //   }
  // },[])
  if(loading){
    return null
  }
  
  return (
   <div>
    {
      verify ? 

      <div className='bg-gray-100 h-screen'>
      <img className="mx-auto" src={Talksy} alt="#talksyLogo" />
    </div> 
    : 
     <div className='bg-[#1E1E1E] h-screen w-full flex justify-center items-center'>
     <div>
       <p className='text-red-600 font-primary text-5xl font-extrabold '>Please verify your email address to access Talksy.</p>
       <Link to="/Login">
                <button className=' block bg-[#EA6C00]  rounded-lg px-4  py-2 text-white font-secondary font-semibold text-base relative cursor-pointer mx-auto mt-5'
                  >
                    <span className=' relative z-[50]'>Go Back To Login</span>
                  </button>
                </Link>
     </div>
     </div>      
      // alert("Please verify your email address to access Talksy.")
    }
   </div>
  )
}

export default Home