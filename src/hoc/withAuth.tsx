"use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthProps {
}

function isAuthenticated(): boolean {
  
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token'); 
  }
  return false;
}

export function withAuth<P extends AuthProps>(
  WrappedComponent: React.ComponentType<P>
) {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace('/login'); 
      }
    }, [router]);

    if (!isAuthenticated()) {
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}
