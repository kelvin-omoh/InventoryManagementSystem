import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import AppContext from './AppContext'



const ContextProvider = (props) => { 
const [name,setName]=useState('')
const[Admin,setAdmin]=useState("")

  return (
  
    <div>
       <AppContext.Provider value={{name,setName,Admin,setAdmin}} >
          {props.children}
      </AppContext.Provider>
    </div>
  )
}

export default ContextProvider
