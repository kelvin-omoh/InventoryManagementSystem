import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from '@/FirebaseConfig';
import AppContext from'../Context'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const[Admin,setAdmin]=useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  const userImage=user?.photoURL|| ''
  const userName=user?.displayName|| ''
  console.log(userImage);



  
  return (
    <AppContext.Provider value={{ name,setAdmin,Admin,userName, setName,userImage }}>
      
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}