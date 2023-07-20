'use client'
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import { BsFolder, BsPeople } from 'react-icons/bs';
import withAuth from './withAuth';
import { doc} from "firebase/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react'
import { FaCalendarTimes, FaExclamationCircle, FaFolder, FaPen, FaShoppingCart, FaTrash } from 'react-icons/fa';
import {  deleteDoc } from "firebase/firestore";
import moment from 'moment';
import axios from 'axios';
import { app, db } from '@/FirebaseConfig';
import {update} from "firebase/database"
import { toast } from 'react-toastify';
import AppContext from '@/Context';

const inventory = () => {


  const { Admin,setAdmin,setName,name} = useContext(AppContext);
const[products,setProducts]=useState([])
const[productsTotal,setProductsTotal]=useState(0)

const[date,setDate]=useState(0)
 const [countExpired,setCountExpired]=useState(0)
 const [countLowStock,setCountLowStock]=useState(0)
 const [active,setActive]=useState(0)
const [searchTerm, setSearchTerm] = useState('');
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

useEffect(() => {
  const collectionRef = collection(db, "inventory");

  const ReadingTheDb = async () => {
    const querySnapshot = await getDocs(collectionRef);
    const productData = [];
    querySnapshot?.forEach((doc) => {
      productData?.push({ ...doc.data(), id: doc.id });
    });
    setProducts(productData ? productData : []);
    setProductsTotal(productData.length);
  };

  ReadingTheDb();
   // Set up a listener to listen for real-time changes in the collection
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const productData = [];
    snapshot.forEach((doc) => {
      productData.push({ ...doc.data(), id: doc.id });
    });
    setProducts(productData);
    setProductsTotal(productData.length);
  });

  // Return a cleanup function to unsubscribe from the Firestore collection listener
  return () => {
    
    unsubscribe();
  };
}, []);


const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Effect triggered!');
  // Any side effects or actions you want to perform when count changes
  // For example, fetching data from an API or updating the document title
}, [count]); // The dependency array containing 'count'

const increment = () => {
  setCount(count + 1);
};

// --------------------- update -------------------------\\
const handleUpdate=(record)=>{
  // setIsEdit(true)

  // update(ref(db,`${tempUuid}`),{
  //   type,
  //   uuid:tempUuid,
  //   output,

  // });

  }
  

const handleDelete =async(id)=>{
    await deleteDoc(doc(db, "inventory", id));

}


// TO IMPLEMENT TEH SEARCH
const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
 //HANDLE THE SENDING OF THE SMS INCASE OF EXPIRATION
  const sendSMS=async(ProductDate,ProductName,Productmessage,ProductMetaData)=>{
 
    console.log(4);
    const dataToSend = { ProductDate,ProductName,Productmessage,ProductMetaData};
   
    
    
    const response = await fetch('http://localhost:3001/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  body: JSON.stringify(dataToSend)
    })
      .then((response) => {
        console.log(dataToSend);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
 //TO COUNT THE EXPIRATION OF PRODUCTS IN THE DB
  useEffect(() => {
    let expiredCount = 0;
    let Lowstock=0
    let activeNo=0
    products.forEach((p) => {
      if (moment(p?.day).isBefore(moment())) {
        expiredCount++;
       console.log(p.day);
       if(expiredCount>0){
         console.log(expiredCount);
        //  console.log(111111111111111111);
        //TO GET THE EXPIRATION DATE AND THE PRODUCT THAT EXPIRED
        sendSMS(p.day,p.productName,'(Your Product has expired) '," has expired on the ")
         console.log(p.day,p.productName);
       }
      
      }
      if(p.quantity <=190){
        Lowstock++
      }
      if(p.quantity >=200){
        activeNo++
      }
    });
  
    setCountExpired(expiredCount);
    setCountLowStock(Lowstock )
    setActive(activeNo)
  }, [countExpired]);










  //for the expiration
  useEffect(()=>{

    let expiredCount = 0;

    products.forEach((p) => {
      if (moment(p?.day).isBefore(moment())) {
        expiredCount++;
        setCountExpired(expiredCount)
        console.log(expiredCount);
      //  console.log(p.day);
       if(expiredCount>0){
         console.log(expiredCount);
         console.log(111111111111111111);
        //TO GET THE EXPIRATION DATE AND THE PRODUCT THAT EXPIRED
        setTimeout(() => {
            sendSMS(p.day,p.productName,'(Your Product has expired) '," has expired on the ")
        }, 50000);
         console.log(p.day,p.productName,'(Your Product has expired) '," has expired on the ");
       }
      
      }

    });
  

  },[products])








  





  //for the expiration
  useEffect(()=>{
    
    products.forEach((p) => {

      console.log(p.day);
      const expirationDateString = p.day; // Example expiration date string
      const expirationDate = new Date(expirationDateString);
      const currentTime = new Date();
      
      const alertTime1 = new Date(expirationDate);
      alertTime1.setDate(alertTime1.getDate() );  // Set the first alert time (2 days before expiration)
      
      const alertTime2 = new Date(expirationDate);
      // alertTime2.setDate(alertTime2.getDate() -2);  // Set the second alert time (4 days before expiration)
      alertTime2.setDate(alertTime2.getDate() -2);  // Set the second alert time (4 days before expiration)
      
      console.log(alertTime1,'Alert time 1');
      console.log(currentTime,"current time");
      console.log(alertTime2,"timeUntilAlert1");
      
      
      // if (alertTime1 > currentTime) {
      //   const timeUntilAlert1 = alertTime1 - currentTime;
      //   console.log('Sending first alert');
       
      //   // setTimeout(() => {
      //     // sendSMS(p.day,p.productName,"(2 days before expiration)",' is expiring on the')  // Send the first alert
      //     console.log('MESAGE SENT:   '+ p.day,p.productName,'(2 days before expiration) ',' is expiring on the ');
      //   // }, 50000);
      // }
      
      // if (alertTime2 > currentTime) {
      //   console.log('Sending second alert');
      //   const timeUntilAlert2 = alertTime2 - currentTime;
      //   // setTimeout(() => {
      //     // sendSMS(p.day,p.productName,'(4days before expiration) ',' is expiring on the ')  // Send the second alert
      //     console.log('MESAGE SENT:   '+ p.day,p.productName,'(4 days before expiration) ',' is expiring on the ');
      //   // }, 50000);
      // }
      
      // if (currentTime > alertTime1) {
      //   console.log('Sending second alert');
      //   const timeUntilAlert2 = alertTime2 - currentTime;
      //   setTimeout(() => {
      //     sendSMS(p.day,p.productName,'(Your Product has expired) '," has expired on the ")  // Send the WHEN ITS EXPIRED
      //     console.log('MESAGE SENT:   '+ p.day,p.productName,'(2 days before expiration) ');
      //   }, );
      // }
      
      
      
      

    })



  },[products])

  

  return (

    
    <div>
       <Head>
 
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
<Sidebar>

     <main className='px-3  bg-gray-100 h-[150vh]  '>
        <Header />
        <TopCards />
       
        <div className='p-4 w-full grid  gap-2'>
             <h1 className=' text-[#010D82]  font-semibold'>Inventory </h1>
             <div className="flex flex-row justify-between gap-4">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 w-full bg-indigo-500 p-3 rounded-md text-white">
     <BsFolder size={30}/>
     <div className=' flex justify-between w-full  mt-[4em]'>
        <div>
      <h5>All Product</h5>
       <p>{products.length}</p>
        </div>
        <div>
      <h5>Active</h5>
       <p>{active}</p>
        </div>
      
     </div>
  </div>
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 w-full  bg-black/5 p-3 rounded-md text-black">
     <BsPeople size={30}/>
     <div className=' flex justify-between w-full  mt-[4em]'>
        <div className='text-center'>
      <h5 className=' text-red-700 font-thin'>Low Stock Alert</h5>
       <p>{countLowStock}</p>
        </div>
      
        <div className=' text-center'>
      <h5 className=' flex justify-center items-center gap-2'>Expired   <FaExclamationCircle/></h5>
   
       {/* <p>{moment(products.map()).isBefore(moment()) ?0:1}</p>
        */}
        <p>{countExpired}</p>
       
        </div>
      
     </div>
  </div>
</div>
{/* <button onClick={sendSMS} className=' p-3 w-fit bg-red-600 rounded-md text-white'>Send sms</button> */}
        </div>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
    <div className="pb-4 bg-white w-[87vw] dark:bg-gray-900">
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative mt-1 w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input
                  type='text'
                  id='table-search'
                  className='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search for items'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                  
                       S/N
                
                        {/* <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> */}
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="  py-3 w-[3em]  max-w-[2em]">
                    Product name
                </th>
                {/* <th scope="col" className="px-6 py-3">
                    C
                </th> */}
                <th scope="col" className="px-6 py-3">
                <div className="px-6   w-fit h-fit py-3 flex gap-3 justify-center items-center">
                    Category <FaFolder/>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Unit Price ₦
                </th>
                <th scope="col" className="px-6 py-3">
                <div className="px-6   w-fit h-fit py-3 flex gap-3 justify-center items-center">
                   In Stock <FaShoppingCart/>
                   </div>
                </th>
                <th scope="col"  className="px-6 py-3">
                    <div className="px-6  w-fit h-fit py-3 flex gap-3 justify-center items-center">
                        Expiring date <FaCalendarTimes/>
                    </div>
                   
                </th>
                <th scope="col" className="px-6 py-3">
                <div className="px-6 w-fit h-fit py-3 flex gap-3 justify-center items-center">
                   Total Price ₦
                   </div>
                </th>
                <th scope="col" className="px-6 py-3">
            
                </th>
                {/* <th scope="col" className="px-6 py-3">
            
                </th> */}
            </tr>
        </thead>
        <tbody className=''>

          
        {filteredProducts?.map((item, id) => (
                      <tr key={id} className="bg-white border-b text-center h-fit  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* <> */}
                    
                    <td className="w-4 p-4">
                    <div className="flex items-center">
                       {id + 1}
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 break-keep  break-words w-[12px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.productName}
                </th>
              
                <td className="px-6 py-4">
                   {item?.categories}
                </td>
                <td className="px-6 py-4">
                ₦ {item?.costPrice}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item?.quantity} X</a>
                </td>
                <td className="px-6 py-4">
                <a href="#" className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${moment(item?.day).isBefore(moment()) && ' text-red-500 '}`}>
                    {item?.day}
                    {moment(item?.day).isBefore(moment()) &&     <div> EXPIRED</div> }
                
                    </a>
                    </td>

                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">₦ {item?.sellingPrice * item?.quantity}</a>
                </td>
                    {/* </> */}

                    {
                      Admin ?

  <td onClick={()=>handleUpdate(item)} className=' mx-3 rounded relative flex gap-4  cursor-pointer '>
                        {/* <div className=' flex justify-center items-center px-6 py-4   rounded-lg cursor-pointer  text-white  bg-blue-500 hover:bg-blue-600 gap-2'>
                        update<FaPen className=' '/>
                        </div> */}

                        <div onClick={()=>handleDelete(item.id)}  className=' px-6 py-4 rounded-lg flex justify-center items-center cursor-pointer  text-white bg-red-500 hover:bg-red-600 gap-2'>
                        Delete<FaTrash className=' '/>
                        </div>

                        </td>
                        :null

                    }
                  

                    {/* <td onClick={()=>handleDelete(item.id)} className='px-6 py-4 mx-4 rounded relative  cursor-pointer  text-white bg-red-500 hover:bg-red-600 gap-2'>
                        <div className=' flex justify-center items-center gap-2'>
                        Delete<FaTrash className=' '/>
                        </div>
                        </td> */}
                       
                       

        
          
            
                        </tr>
                ))}
               

          
            
          
        </tbody>
    </table>
</div>

       
      </main>

      
</Sidebar>
    </div>
  )
}

export default withAuth(inventory)
