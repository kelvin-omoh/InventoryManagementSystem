import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson, RxInfoCircled, RxHome, RxVideo } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings, FiXSquare } from 'react-icons/fi';
import { TbCircleSquare} from 'react-icons/tb';
import { BsBriefcase, BsGem, BsPlusCircle } from 'react-icons/bs';
import { FaRegCaretSquareRight, FaRegHandPointRight, FaSignOutAlt } from 'react-icons/fa';
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import AppContext from '@/Context';

const Sidebar = ({ children }) => {
  const { setAdmin,Admin,setName,name} = useContext(AppContext);
 const handleSignOut=()=>{
  const auth = getAuth();
  toast.success("Signed Out Succesfully", {
    position: "top-right",
    autoClose: 5000,
    
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    setAdmin(false)
  signOut(auth).then(() => {
    setAdmin(false)
    // Sign-out successful.
   
  }).catch((error) => {
    // An error happened.
  });
 }
  return (
    <div className='flex'>
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
      <div className='fixed w-80 h-screen p-4 bg-[#90c5de9e] text-[#010D82]  border-r-[1px] flex flex-col justify-between'>
        <div className='  flex flex-col '>
          <Link href='/'>
          <div className=' flex text-[#51C9FF]   items-center  gap-5  cursor-pointer my-4 p-3 rounded-lg '>              <RxVideo size={40}/> <h1  className=' text-[#010D82]'>BC <span className='text-[#51C9FF]'>Inventory</span></h1>
            </div>
          </Link>
          <span className='border-b-[1px]  w-full '></span>
          <Link href='/home'>
          <div className='  flex   items-center  gap-5  hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg '>              <RxHome size={20} />Dashboard
            </div>
          </Link>
          <Link href='/categories'>
          <div className=' flex   items-center  gap-5   hover:bg-[#a8d1f5ce]  cursor-pointer my-4 p-3 rounded-lg '>              <TbCircleSquare size={20} /> Categories
            </div>
          </Link>


          <div className='  flex flex-col'>
          <h1 className=' text-[1.2em] text-white'>PRODUCTS</h1>
          { Admin ? 
          
        
          <Link href='/addproduct'>
              

            <div className=' flex   items-center  gap-5   hover:bg-[#a8d1f5ce]  cursor-pointer my-4 p-3 rounded-lg '>  
            
                         <BsPlusCircle size={20} /> Add Products
            </div>
          </Link>
          :
          null
        }
          
          <Link href='/inventory'>
          <div className=' flex   items-center  gap-5    hover:bg-[#a8d1f5ce]  cursor-pointer my-4 p-3 rounded-lg '>  
            
              <BsBriefcase className=' rounded-md -600' size={20} /> 
         
              Inventory
            </div>
          </Link>
          </div>



{
  Admin===true?

   <div className=' flex flex-col'>
            <h1 className='text-white text-[1.2em]'>ADMIN</h1>
            <Link href='/admins'>
              
            <div className=' flex   items-center  gap-5   hover:bg-[#a8d1f5ce]  cursor-pointer my-4 p-3 rounded-lg '>                <HiOutlineShoppingBag size={20} /> Manage Admins
            </div>
          </Link>
          {/* <Link href=''>
          <div className=' flex   items-center  gap-5   hover:bg-[#a8d1f5ce]  cursor-pointer my-4 p-3 rounded-lg '>                <FiSettings size={20} /> Admin Roles
            </div>
          </Link> */}
          <Link className='' href=''>
          <div className=' flex justify-center   items-center text-white text-center  gap-3  bg-[#023e72ce]  cursor-pointer my-4 p-3 rounded-lg ' onClick={handleSignOut}>  <FaSignOutAlt size={20} /> log Out
            </div>
          </Link>
          </div>
          :<Link className='' href=''>
          <div className=' flex justify-center   items-center text-white text-center  gap-3  bg-[#023e72ce]  cursor-pointer my-4 p-3 rounded-lg ' onClick={handleSignOut}>  <FaSignOutAlt size={20} /> log Out
            </div>
          </Link>
}
         
         
        </div>
      </div>
      <main className='ml-80  w-[80%]'>{children}</main>
    </div>
  );
};

export default Sidebar;
