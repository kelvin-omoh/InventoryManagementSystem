import Image from 'next/image'
import React, { useState } from 'react'
import { RxVideo } from 'react-icons/rx'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import ContextProvider from '@/ContextProvider';
import AppContext from '@/Context';
  
const Employee = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[nameFull,setFullName]=useState('')
    const[error,setError]=useState('')
    const { Admin,setAdmin,setName,name} = useContext(AppContext);
  const navigate=useRouter()




  const handleSubmit = async(e) => {
    
    e.preventDefault() //Prevent default action of refreshing
  
    
 
    const auth = getAuth();
    setAdmin(false)
    setName(nameFull)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      toast.success("Succceful")
   
      navigate.push("/home")
        
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
    <div className=' h-[130vh] flex flex-col justify-center items-center  w-screen bg-no-repeat' >
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />

      <div className=' flex text-[#51C9FF]   items-center  gap-5  cursor-pointer my-1 p-3 rounded-lg '> 
      
      <Link href={"/"} className='flex justify-center items-center' >
           <RxVideo size={40}/> <h1  className=' text-[#010D82]'>BC <span className='text-[#51C9FF]'>Inventory</span></h1>
      </Link>        
            </div>

            <div className=' w-[40%]  bg-[black]/5  py-4 rounded-md px-5 '>
              <h1 className=' text-center font-bold'>EMPLOYEE</h1>
              {/* <div className=' gap-6 flex justify-center items-center'>
              <button onClick={handleGoogle} className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <FcGoogle size={40}/> Sign-In with Google
                 </button>
                 <button onClick={handleFacebook} className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <BsFacebook className=' text-blue-900' size={40}/> SignUp with Facebook
                 </button>
              </div> */}

              {/* <h1 className=' text-center text-black/50'>EMPLOYEE</h1> */}

              <form onSubmit={handleSubmit} className=' mt-[3em] gap-8 flex flex-col'>
                <div className=' flex flex-col'>
                  <label>Full Name</label>
                <input value={nameFull} onChange={(e)=>setFullName(e.target.value)} type="text" className=' border p-4' placeholder='Enter Name' required />
   
                </div>
                <div className=' flex flex-col'>
                  <label>Email Adress</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className=' border p-4' placeholder='Enter email' required />
                </div>
                {/* <div className=' flex flex-col'>
                  <label>Phone Number</label>
                <input value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)}  type="number" className=' border p-4' placeholder='Enter Phone Number' required />
                </div> */}
                {/* <div className=' flex flex-col'>
                  <label>Deparments</label>
                   <select>
                    <option>Choose a Department</option>
                    <option>Admin</option>
                    <option></option>
                   </select>
                </div> */}
                <div className=' flex flex-col'>
                  <label>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" className=' border p-4' placeholder='Enter Name' required />
                </div>
                 <button  className=' text-white bg-[#010D82] px-8 py-5  w-full rounded-lg'>SIGN IN</button>
                 {/* <p>Are you an Employee  ?     <Link className=' text-blue-500' href="/home">Click here</Link>  </p> */}
                 <p>Not an employee?  <Link className=' text-blue-500' href="/signup">SignUp as Administrator </Link>  </p>
                 <p>Not an employee?  <Link className=' text-blue-500' href="/signin">SignIn as Administrator  </Link>  </p>
              </form>
             
            </div>

    </div>
  )
}

export default Employee
