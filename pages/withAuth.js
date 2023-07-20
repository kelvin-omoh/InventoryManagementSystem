import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/FirebaseConfig';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(user);
        if (!user) {
          router.push('/signin'); // Redirect to login page if user is not authenticated
        }
        
      });
      return () => unsubscribe();
    }, []);
    
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
