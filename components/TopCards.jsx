import { db } from '@/FirebaseConfig'
import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const TopCards = ({setArray}) => {
   
    const[products,setProducts]=useState([])
useEffect(()=>{
    const dataRef = collection(db, "inventors");
      const ReadingTheDb=async()=>{
       
  
      const querySnapshot = await getDocs(collection(db, "inventory"));
      const productData = [];
      querySnapshot?.forEach((doc) => {
      productData?.push({...doc.data(),id:doc.id})
      });
      setProducts(productData?productData:[])
      console.log(productData.map((e)=>e.sellingPrice * e.quantity));
    //   setArray(productData?.map((e)=>e.sellingPrice * e.quantity))
      return () => {
        // Unsubscribe from the Firestore collection listener
       dataRef.onSnapshot(() => {});
      };
  
  }
  
      ReadingTheDb()
     
  },[])

  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'> ₦ {products.length>0 ?
                products.reduce((total, obj) => total + parseInt(obj.sellingPrice*obj.quantity
                    ), 0)* products.length :0} </p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'> ₦ {products.length>0 ?
                products.reduce((total, obj) => total + parseInt(obj.sellingPrice*obj.quantity
                    ), 0)- products.reduce((total,obj)=>total + parseInt(obj.costPrice),0) / products.reduce((total,obj)=>total + parseInt(obj.costPrice),0) * 100 :0}   </p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{products ? products.reduce((total, obj) => total + parseInt(obj.quantity), 0)-100 :0 }</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards