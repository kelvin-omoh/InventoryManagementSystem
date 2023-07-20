import Link from 'next/link'
import React from 'react'
import { RxVideo } from 'react-icons/rx'
import { auth } from '@/FirebaseConfig';

const Navbar = () => {
  return (
    <div className=' w-screen px-5'>
        <nav className=' flex w-full justify-between  items-center '>
        <div className=' flex text-[#51C9FF]   items-center  gap-5  cursor-pointer my-4 p-3 rounded-lg '>              <RxVideo size={40}/> <h1  className=' text-[#010D82]'>BC <span className='text-[#51C9FF]'>Inventory</span></h1>
            </div>
     
      
            <ul className=' flex gap-7 text-center items-center   text-[#010D82] text-[1.2em] '>
                <Link href={'/about'}>      
                          <li className=' text-[1.3em] font-bold '>About</li>
                </Link>
                <Link href={'/pricing'}>
                                <li className=' text-[1.3em] font-bold '>Pricing</li>

                </Link>
                
                <Link href={'/contact'}>      
                      <li className=' text-[1.3em] font-bold '>Contact</li></Link>
    
            </ul>
            {
              auth.currentUser ?  
              <Link href={'/home'}>

                <button className=' bg-[#010D82] p-4 rounded-lg text-white'>
              Dashboard
            </button>   
              </Link>
              
            :
            <>
              <div className=' flex justify-center items-center gap-4'>
            <Link href="/signin">   
            <button className='py-4 px-8 w-fit hover:bg-blue-800/70 hover:text-white   text-[#010D82] rounded-lg'>
             Sign In
           </button>   
           </Link>
           <Link href={"/signup"}><button  className=' bg-[#010D82] p-4 rounded-lg text-white'>Sign Up</button>
           </Link>
                
            </div>
            </>
            }
          
            </nav>
    </div>
  )
}

export default Navbar
