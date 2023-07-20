(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{4360:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[category]",function(){return t(411)}])},6375:function(e,s,t){"use strict";var l=t(5893),n=t(7294),c=t(2619),r=t(9583),i=t(5675),a=t.n(i);t(8079),t(1664);let x=()=>{let{name:e,setName:s,userImage:t,userName:i,user:x,Admin:d}=(0,n.useContext)(c.Z);return(0,l.jsxs)("div",{className:"flex justify-between px-4 pt-4",children:[(0,l.jsxs)("h2",{className:" text-[#010D82] text-[1.3em] font-semibold",children:[d?(0,l.jsx)("span",{children:"Administrator "}):(0,l.jsx)("span",{children:"Employee "}),"Dashboard"]}),(0,l.jsxs)("div",{className:" flex font-semibold font-fantasy justify-center items-center gap-4",children:[e?(0,l.jsxs)("h1",{className:" text-[.9em]",children:["Welcome, ",e]}):(0,l.jsxs)("h1",{className:" text-[.9em]",children:["Welcome ",i," ",x," "]}),t?(0,l.jsxs)("div",{className:" relative w-fit",children:[(0,l.jsx)(a(),{className:" rounded-full",src:t,height:30,width:30,alt:"user"}),(0,l.jsx)("p",{className:" bg-green-500 top-0 right-0 p-1 rounded-full w-2 h-2 absolute"})]}):(0,l.jsxs)("div",{className:" relative",children:[(0,l.jsx)(r.m3W,{size:30}),(0,l.jsx)("p",{className:" bg-green-500 top-0 r-0 p-1 rounded-full w-2 h-2 absolute"})]})]})]})};s.Z=x},9446:function(e,s,t){"use strict";var l=t(5893),n=t(8079),c=t(6100),r=t(7294);let i=e=>{let{setArray:s}=e,[t,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=(0,c.hJ)(n.db,"inventors"),s=async()=>{let s=await (0,c.PL)((0,c.hJ)(n.db,"inventory")),t=[];return null==s||s.forEach(e=>{null==t||t.push({...e.data(),id:e.id})}),i(t||[]),console.log(t.map(e=>e.sellingPrice*e.quantity)),()=>{e.onSnapshot(()=>{})}};s()},[]),(0,l.jsxs)("div",{className:"grid lg:grid-cols-5 gap-4 p-4",children:[(0,l.jsxs)("div",{className:"lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full pb-4",children:[(0,l.jsxs)("p",{className:"text-2xl font-bold",children:[" ₦ ",t.length>0?t.reduce((e,s)=>e+parseInt(s.sellingPrice*s.quantity),0)*t.length:0," "]}),(0,l.jsx)("p",{className:"text-gray-600",children:"Daily Revenue"})]}),(0,l.jsx)("p",{className:"bg-green-200 flex justify-center items-center p-2 rounded-lg",children:(0,l.jsx)("span",{className:"text-green-700 text-lg",children:"+18%"})})]}),(0,l.jsxs)("div",{className:"lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full pb-4",children:[(0,l.jsxs)("p",{className:"text-2xl font-bold",children:[" ₦ ",t.length>0?t.reduce((e,s)=>e+parseInt(s.sellingPrice*s.quantity),0)-t.reduce((e,s)=>e+parseInt(s.costPrice),0)/t.reduce((e,s)=>e+parseInt(s.costPrice),0)*100:0,"   "]}),(0,l.jsx)("p",{className:"text-gray-600",children:"YTD Revenue"})]}),(0,l.jsx)("p",{className:"bg-green-200 flex justify-center items-center p-2 rounded-lg",children:(0,l.jsx)("span",{className:"text-green-700 text-lg",children:"+11%"})})]}),(0,l.jsxs)("div",{className:"bg-white flex justify-between w-full border p-4 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full pb-4",children:[(0,l.jsx)("p",{className:"text-2xl font-bold",children:t?t.reduce((e,s)=>e+parseInt(s.quantity),0)-100:0}),(0,l.jsx)("p",{className:"text-gray-600",children:"Customers"})]}),(0,l.jsx)("p",{className:"bg-green-200 flex justify-center items-center p-2 rounded-lg",children:(0,l.jsx)("span",{className:"text-green-700 text-lg",children:"+17%"})})]})]})};s.Z=i},411:function(e,s,t){"use strict";t.r(s);var l=t(5893),n=t(6375),c=t(1804),r=t(9446),i=t(9008),a=t.n(i),x=t(1163),d=t(7294),o=t(6100),h=t(8079),p=t(9583);let f=()=>{let e=(0,x.useRouter)(),{category:s}=e.query,[t,i]=(0,d.useState)([]);return(0,d.useEffect)(()=>{let e=(0,o.hJ)(h.db,"inventors"),t=async()=>{let t=await (0,o.PL)((0,o.hJ)(h.db,"inventory")),l=[];return null==t||t.forEach(e=>{null==l||l.push({...e.data(),id:e.id})}),console.log(l),i(l.filter(e=>e.categories==s)),console.log(l.filter(e=>e.categories==s)),()=>{e.onSnapshot(()=>{})}};t()},[]),(0,l.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"Create Next App"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(c.Z,{children:(0,l.jsxs)("main",{className:"bg-gray-100 h-[150vh] ",children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)(r.Z,{}),(0,l.jsx)("div",{className:"p-4 grid md:grid-cols-3 grid-cols-1 gap-4",children:(0,l.jsxs)("h1",{children:["Category: ",s]})}),(0,l.jsx)("div",{class:"flex flex-col",children:(0,l.jsx)("div",{class:"overflow-x-auto sm:mx-0.5 lg:mx-0.5",children:(0,l.jsx)("div",{class:"py-2 inline-block min-w-full sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{class:"overflow-hidden",children:[0==t.length&&(0,l.jsx)("p",{className:" mb-4 text-red-700 font-[fantasy] text-lg font-bold bg-red-100 p-1",children:"Note: This section is empty "}),(0,l.jsxs)("table",{class:"min-w-full",children:[(0,l.jsx)("thead",{class:"bg-gray-200 w-full border-b",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",className:"p-4",children:(0,l.jsxs)("div",{className:"flex items-center",children:["S/N",(0,l.jsx)("label",{for:"checkbox-all-search",className:"sr-only",children:"checkbox"})]})}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Product name"}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:(0,l.jsxs)("div",{className:"px-6 w-fit h-fit py-3 flex gap-3 justify-center items-center",children:["Category ",(0,l.jsx)(p.$nz,{})]})}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Unit Price ₦"}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:(0,l.jsxs)("div",{className:"px-6 w-fit h-fit py-3 flex gap-3 justify-center items-center",children:["In Stock ",(0,l.jsx)(p.FeP,{})]})}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:(0,l.jsxs)("div",{className:"px-6 w-fit h-fit py-3 flex gap-3 justify-center items-center",children:["Expiring date ",(0,l.jsx)(p.j5f,{})]})}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:(0,l.jsx)("div",{className:"px-6 w-fit h-fit py-3 flex gap-3 justify-center items-center",children:"Total Price ₦"})})]})}),(0,l.jsx)("tbody",{className:"w-full",children:t.length>0?t.map((e,s)=>(0,l.jsxs)("tr",{class:"bg-white border-b w-full text-center transition duration-300 ease-in-out hover:bg-gray-100",children:[(0,l.jsxs)("td",{class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["   ",s+1]}),(0,l.jsx)("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null==e?void 0:e.productName}),(0,l.jsx)("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null==e?void 0:e.categories}),(0,l.jsxs)("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:["₦ ",null==e?void 0:e.costPrice]}),(0,l.jsxs)("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:[null==e?void 0:e.quantity," X"]}),(0,l.jsx)("td",{class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null==e?void 0:e.day}),(0,l.jsxs)("td",{class:"text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap",children:[(null==e?void 0:e.quantity)*e.costPrice," X"]})]})):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("tr",{class:"bg-white border-b w-full transition duration-300 ease-in-out hover:bg-gray-100",children:[(0,l.jsxs)("td",{class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900",children:["   ",1]}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"EMPTY"}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"EMPTY"}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"₦ 0"}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"EMPTY"}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"EMPTY"}),(0,l.jsx)("td",{class:"text-sm text-center text-red-600 font-light px-6 py-4 whitespace-nowrap",children:"₦ 0"})]})})})]})]})})})})]})})]})};s.default=f},9008:function(e,s,t){e.exports=t(3121)},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4360)}),_N_E=e.O()}]);