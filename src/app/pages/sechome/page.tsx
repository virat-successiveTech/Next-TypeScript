'use client';

import Link from "next/link";

export default function HomePage() {


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      <p>Welcome User !</p>
      <Link href={"/pages/secabout"}>
      <button>Now , Visit About</button>
      </Link>
    </div>
  );
}
