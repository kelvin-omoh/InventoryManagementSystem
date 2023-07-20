import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { RxVideo } from 'react-icons/rx'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import AppContext from '@/Context';

const signup = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[fullName,setFullName]=useState('')
  const[error,setError]=useState('')

  const { Admin,setAdmin,setName,name} = useContext(AppContext);

const navigate=useRouter()

 const submitRequest=(e)=>{
  e.preventDefault() 
 
  const auth = getAuth();
  setAdmin(true)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast.success("Succceful")
    navigate.push("/signin")
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('ERROR:'+error.code)
    console.log(errorMessage);
    setError(error.code)
    // ..
  });
 }


  return (
    <div className=' h-[120vh]   bg-[black]/5  flex flex-col justify-center items-center  w-screen bg-no-repeat' >
      <ToastContainer/>
      <div className=' flex p-9 text-[#51C9FF]    items-center  gap-5  cursor-pointer my-4  rounded-lg '> 
      
      <Link href={"/"} className='flex justify-center items-center' >
           <RxVideo size={40}/> <h1  className=' text-[#010D82]'>BC <span className='text-[#51C9FF]'>Inventory</span></h1>
      </Link>        
            </div>

            <div className=' bg-[black]/10 rounded-md p-5 '>
            {error && <p className='bg-red-700 p-1 text-white border-sky-100 border rounded-lg text-center font-mono  font-light '>NOTE: {error} </p>}
              <h1 className=' text-center font-semibold text-[1.4em] mb-[3em]'>Create Account</h1>
              <div className=' gap-6 flex justify-center items-center'>
              <button className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <FcGoogle size={40}/> SignUp with Google
                 </button>
                 <button className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <BsFacebook className=' text-blue-900' size={40}/> SignUp with Facebook
                 </button>
              </div>
              <h1 className=' text-center text-black/50'>OR</h1>

              <form className=' mt-[3em] gap-8 flex flex-col'>
                {/* <div className=' flex flex-col'>
                  <label>Full Name</label>
                <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" className=' border p-4' placeholder='Enter Name' required />
                </div> */}
                <div className=' flex flex-col'>
                  <label>Email Adress</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className=' border p-4' placeholder='Enter email' required />
                </div>
                <div className=' flex flex-col'>
                  <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className=' border p-4' placeholder='Enter Name' required />
                </div>
                 <button type={'submit'} onClick={(e)=>submitRequest(e)} className=' text-white bg-[#010D82] px-8 py-5  w-full rounded-lg'>Create Account</button>
                 <p>Already have an account?<Link className=' text-blue-500' href="/signin">Sign In</Link>  </p>

                 <p>Are you an Employee  ?     <Link className=' text-blue-500' href="/employee">Click here</Link>  </p>
               
              </form>
             
            </div>

    </div>
  )
}

export default signup
