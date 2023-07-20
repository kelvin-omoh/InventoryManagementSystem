import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { RxVideo } from 'react-icons/rx'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '@/FirebaseConfig';
import { useRouter } from 'next/router';
import AppContext from '../Context';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 

  
const signin = () => {
   const router = useRouter();
   const { name, setName,setAdmin,Admin } = useContext(AppContext);

   const displayName=name

 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')
 const[phonenumber,setPhoneNumber]=useState('')
 const[department,setDepartment]=useState('')
console.log(name);


const handleFacebook=()=>{

}


const handleGoogle=()=>{
  setAdmin(true)
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    setAdmin(true)
    
    setTimeout(()=>{

      setAdmin(true)
      router.push('/home'); // Navigates to '/new-route'
    },500)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
   
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used. 
    console.log('Error',errorMessage)
     toast.error( error.code  +"!", {
              position: "top-right",
              autoClose: 5000,
              
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}





  const handleSubmit = async(e) => {
    
    e.preventDefault() //Prevent default action of refreshing

    //HANDLE ADD REQUEST TO ADD ADMINS TO THE DATABASE
    const docRef = await addDoc(collection(db, "Admins"), {
     name,
     phonenumber,
     department,
    });
    console.log("Document written with ID: ", docRef.id);
    // alert()
    setAdmin(true)
    console.log(Admin);
    signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user; 
            toast.success("Welcome " + name +"!", {
              position: "top-right",
              autoClose: 5000,
              
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            console.log('signed In successful !!!');
            
            setTimeout(()=>{
              router.push('/home'); // Navigates to '/new-route'
            },[1000])

            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            console.log(1);
            toast.error(error.code  +"!", {
              position: "top-right",
              autoClose: 5000,
              
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
 

            const errorMessage = error.message;
          })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === "auth/user-not-found") {
                alert("Wrong Email... Please try again !")
            }
            else if (errorCode === "auth/wrong-password") {
                alert("Wrong Password...Please try again !")
            }
            const errorMessage = error.message;
            console.log(errorMessage);
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

            <div className='  bg-[black]/5  py-4 rounded-md px-5 '>
              <h1 className=' text-center font-bold'>Sign Ind{Admin}</h1>
              <div className=' gap-6 flex justify-center items-center'>
              <button onClick={handleGoogle} className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <FcGoogle size={40}/> Sign-In with Google
                 </button>
                 <button onClick={handleFacebook} className=' bg-gray-700/10 p-2 rounded-lg  flex gap-4 justify-center items-center'>
                  <BsFacebook className=' text-blue-900' size={40}/> SignUp with Facebook
                 </button>
              </div>

              <h1 className=' text-center text-black/50'>OR</h1>

              <form onSubmit={handleSubmit} className=' mt-[3em] gap-8 flex flex-col'>
                <div className=' flex flex-col'>
                  <label>Full Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className=' border p-4' placeholder='Enter Name' required />
   
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
                 <p>Are you an Employee  ?     <Link className=' text-blue-500' href="/employee">Click here</Link>  </p>
                 <p>Already have an account?  <Link className=' text-blue-500' href="/signup">SignUp </Link>  </p>
              </form>
             
            </div>

    </div>
  )
}

export default signin
