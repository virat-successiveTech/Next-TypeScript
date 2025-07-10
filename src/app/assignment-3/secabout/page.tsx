'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function AboutPage() {
  const { isLoggedIn, username } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page</h1>
      <p>This page is only visible to authenticated users.</p>
      <p>Hello, <strong>{username}</strong>.</p>
    </div>
  );
}
