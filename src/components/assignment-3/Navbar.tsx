'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
      <button onClick={() => router.push('/pages/home')}>Home</button>
      <button onClick={() => router.push('/pages/about')} style={{ marginLeft: '1rem' }}>
        About
      </button>
    </nav>
  );
}
