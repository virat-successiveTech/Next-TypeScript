
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const router = useRouter();
  const base = '/pages';

  return (
    <div style={{ display: 'flex', padding: '2rem' }}>
      <nav style={{ marginRight: '2rem' }}>
        <h2>Dashboard Menu</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><Link href={`${base}/dashboard`}>Home</Link></li>
          <li><Link href={`${base}/profile`}>Profile</Link></li>
          <li><Link href={`${base}/settings`}>Settings</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
