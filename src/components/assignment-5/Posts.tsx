import React from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 0 },
  });

  const posts: Post[] = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <div style={{ margin: 'auto', width: '800px', paddingTop: '20px' }}>
        <h1>Posts from JSONPlaceholder</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: 10 }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
