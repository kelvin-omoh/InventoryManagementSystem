import React, { useContext } from 'react'
import AppContext from '@/Context';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { auth } from '@/FirebaseConfig';
import Link from 'next/link';
const Header = () => {
  const { name, setName,userImage,userName,user,Admin} = useContext(AppContext);

  // console.log(auth.currentUser);
//  console.log(userName)
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2 className=' text-[#010D82]  text-[1.3em] font-semibold'>
          {Admin ?
          <span>Administrator </span>
        :
        <span>Employee </span>
        }
           Dashboard</h2>
        <div className=' flex font-semibold font-fantasy justify-center items-center gap-4'>
           {
            name?<h1 className='  text-[.9em]'>Welcome, {name}</h1>:<h1 className='  text-[.9em]'>Welcome {userName} {user} </h1>
           }
          
        
        {userImage ? 
         <div className=' relative w-fit'>
                 <Image className=' rounded-full' src={userImage} height={30} width={30} alt='user'/>

         <p className=' bg-green-500  top-0 right-0  p-1 rounded-full w-2 h-2 absolute'></p>
       </div>
      
         :
       
        <div className=' relative'>
          <FaUserCircle size={30}/>
          <p className=' bg-green-500 top-0 r-0 p-1 rounded-full w-2 h-2 absolute'></p>
        </div>
        }
        </div>
       
      

    </div>
  )
}

export default Header