import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Navbar from '../components/Navbar';
import { FaPlay } from 'react-icons/fa';
// import Image from 'next/image';
import { auth } from '@/FirebaseConfig';
import Link from 'next/link';
import F1 from "../public/F1.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main style={{ backgroundImage: 'url(/office.png)' }} className='bg-gray-100 bg-no-repeat h-[150vh] '>

       <Navbar/>
       <div className=' flex  justify-center items-center gap-8'>
        <Image className=' h-[80vh] w-[50vw]' src={F1} alt="" height={250} width={250} />
        <div className=' flex flex-col gap-8'>
          <h5 className=' text-[#51C9FF]'>Stand out of the crowd</h5>
          <h1 className='text-[#010D82]  font-bold'>Create the Next Gen
          Of Inventory Management</h1>
          <p>Get started quickly to increase customer satisfaction
          and maximize profit.</p>
          <div className=' flex  items-center gap-5 '>
          {
              auth.currentUser ?  
          <Link href={'/signup'}>
          <button className='py-4 px-8 w-fit hover:bg-blue-800/70  bg-[#010D82] text-white rounded-lg'>Get Started</button>
         </Link>
         :
         <>
          <Link href={'/signup'}>
          <button className='py-4 px-8 w-fit hover:bg-blue-800/70  bg-[#010D82] text-white rounded-lg'>Get Started</button>
         </Link>
         <Link href={'/sigIn'}>
          <button className='py-4 px-8 w-fit hover:bg-blue-800/70  bg-[#010D82] text-white rounded-lg'>Sign In</button>
         </Link>
         </>
          }
             
          </div>
      

        </div>
       </div>
      </main>
    </>
  );
}
