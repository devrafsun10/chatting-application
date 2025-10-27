import React, {  useState } from 'react'
import Talksy from '../../../public/talksy.png'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Home = () => {
   const auth = getAuth();
  const data = useSelector((state)=> (state.userInfo.value))
  console.log(data);
  const [verify, setVerify] = useState(false)

   onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
           setVerify(true)
        } 
    });

  // useEffect(()=>{
  //   if(data.emailVerified){
  //     setVerify(true)
  //   }
  // },[])
  
  return (
   <div>
    {
      verify ? 

      <div className='bg-gray-100 h-screen'>
      <img className="mx-auto" src={Talksy} alt="#talksyLogo" />
    </div> 
    : 
     <p className='text-red-600 text-center text-5xl mt-80 font-extrabold'>Please verify your email address to access Talksy.</p>      
      // alert("Please verify your email address to access Talksy.")
    }
   </div>
  )
}

export default Home