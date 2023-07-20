import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../Context';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isLogged = useContext(AuthContext);

  useEffect(() => {
    if (isLogged === null) {
      // The user is still being authenticated
      alert("  user is still being authenticated")
      return;
    }

    if (!isLogged) {
      // If the user is not logged in, redirect to the login page
      router.push('/login');
      alert(" login")
    }
  }, [isLogged, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
