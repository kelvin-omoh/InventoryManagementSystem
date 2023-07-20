'use client'
import React, { useState, useEffect } from 'react';
import { Bar,Pie, Doughnut} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js/auto';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/FirebaseConfig';
import Img from '../public/item1.jpeg'
import Img2 from '../public/item2.jpeg'
import Img3 from '../public/item3.jpg'
import Img4 from '../public/item4.jpeg'
import Img5 from '../public/item5.jpeg'
import Img6 from '../public/item6.jpeg'
import Img7 from '../public/item7.jpeg'
import Img8 from '../public/item8.jpeg'
import Img9 from '../public/item9.jpeg'
import Img10 from '../public/item10.jpeg'
import Img11 from '../public/item11.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const BarChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartDoughnutData, setChartDoughnutData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  






  


  const[products,setProducts]=useState([])
  const [array,setArray]=useState([])
  const dataArr=[]
  
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
        setArray(productData.map((e)=>e.sellingPrice * e.quantity))
        // dataArr.push(array)
        return () => {
          // Unsubscribe from the Firestore collection listener
         dataRef.onSnapshot(() => {});
        };
    
    }
    
        ReadingTheDb()
       
    },[])
  



  // array.push(6539,8055,5333)
  useEffect(() => {
   
   console.log(array[0]);
    let arrayData=array;

    function compressData(data) {
      const compressionFactor = Math.ceil(data.length / 7); // Calculate the compression factor
    
      const compressedData = [];
    
      for (let i = 0; i < data.length; i += compressionFactor) {
        const compressedValue = data[i]; // Take a data point at every compressionFactor interval
        compressedData.push(compressedValue);
      }
    
      return compressedData;
    }

    const originalData = array;
const compressedData = compressData(originalData); // Compress the data into 7 elements
console.log(compressedData);


    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data:compressedData,
                borderColor: 'rgb(93, 162, 25)',
                backgroundColor: 'rgb(3, 162, 235, 0.4)',
              }, 

              
        ]
    })
    setChartDoughnutData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data:arrayData?arrayData:999 ,
                borderColor: '#8D7BDC',
                backgroundColor: [
                  '#588E29',
                  '#0EB07D',
                  '#0E94A0',
                  '#6EE7F2',
                  '#F77D72',
                  '#F7A972',
                  '#FBD0B9',
                  '#F3732F',
                  '#A01D1E',
                  '#EDD8A4',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                  'linear-gradient(to right, #e3ffe7, #00ffa2)',
                ]
              }, 
        ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
          font: {
            size: 18,
            weight: 'bold',
            family: 'Arial'
          },
          color: 'purple'
        }
      },
      maintainAspectRatio: false,
      responsive: true,
      cutout: '70%',
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += context.formattedValue + ' USD';
              return label;
            }
          }
        }
      },
      elements: {
        arc: {
          borderWidth: 2
        }
      },
      scales: {
        y: {
          ticks: {
            beginAtZero: true
          }
        }
      },
      color: ['red', 'blue', 'yellow', 'green', 'purple'],
    });

    




  }, [array])

  const [img, setImg] = useState(Img);
console.log(Math.floor(Math.random() * 10) + 1);
  


  return (
    <>
     {isClient && (
      <div className=' w-[150%] md:col-span-2 relative lg:h-[120vh] flex flex-col  gap-[5em] h-[90vh] m-auto p-4 border rounded-lg bg-white'>
         <div className=' h-[20vh] '>
          {console.log(array)}
          <h1 className='text-[#010D82] '> Todays Statistics</h1>
          {/* <h2>{new Date().toLocaleString('en-US', 
          { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}</h2> */}
          <div className=' flex  justify-between'>
            <div>
                  <div className=' w-[15em]  items-center justify-center flex flex-col p-4  h-[10em] rounded-lg bg-[#9ddcfaaf] my-5'>
            <p className=' flex text-[1.3em] w-full justify-between  items-center h-full  '>
             
              <h3 className='text-[1.6em] text-white'>Total</h3>
              <h3 className=' text-white'>Today</h3>
            </p>
            {/* TOTAL NUMBER OF STOCKS */}
            <p className=' text-[#010D82] text-[1.9em]' > {products.length} </p>   
            
            <p className='text-white'>number of items in stock</p>
         
          </div>
          <div className=' w-[15em]  items-center justify-center flex flex-col p-4  h-[10em] rounded-lg bg-[#9ddcfaaf] my-5'>
            <p className=' flex text-[1.3em] w-full justify-between  items-center h-full  '>
             
              <h3 className='text-[1.6em] text-white'>Expiration</h3>
              <h3 className=' text-white'>Today</h3>
            </p>
            {/* TOTAL NUMBER OF STOCKS */}
            <p className=' text-[#010D82] text-[1.9em]' > {products.length} </p>   
            
            <p className='text-white'>number of items expiring this week</p>
         
          </div>
            </div> 
      

            <img
          className=" object-center object-cover h-[50vh] w-full absolute -z-10"
          src={Img+Math.floor(Math.random() * 10) + 1}
        />
          <div className=' w-[20rem] rounded-md border-[12px] border-[#9ddcfaaf] h-[19.5em] flex  justify-center'>



          <Carousel className='  h-fit w-full  ' showArrows={true} infiniteLoop={true}  autoPlay={true}>
                <div>
                <Image src={Img} className=' border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 122</p>
                </div>
                <div>
                <Image src={Img2} className='   border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Image src={Img3} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img4} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img5} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img6} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img7} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img8} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img9} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img10} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src={Img11} className='  border-[#9ddcfaaf]   h-[18em] object-cover w-[20em] rounded-md' alt="chow" width={250} height={250} />
     
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>




               </div>
          <div className=''>
          <Doughnut data={chartDoughnutData} options={chartOptions} />
          </div>


          </div>
     

         {/* </div> */}
            <div  className=' w-[50vw] h-[50vh] mx-auto mt-[2em] '>
               <Bar data={chartData} options={chartOptions} />

          
                 
   
        
      </div>
      </div>
      </div>
      )}
    </>
  );
};

export default BarChart;
