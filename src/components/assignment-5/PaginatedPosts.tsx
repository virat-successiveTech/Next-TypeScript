'use client';

import React, { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PaginatedPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: 50 }}>Loading posts...</p>;
  }

  if (error) {
    return (
      <p style={{ color: 'red', textAlign: 'center', marginTop: 50 }}>
        Error: {error}
      </p>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Paginated Posts</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentPosts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: 20,
              padding: 15,
              border: '1px solid #ccc',
              borderRadius: 5,
              backgroundColor: '#f9f9f9',
            }}
          >
            <strong style={{ fontSize: 18 }}>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          }}
        >
          Previous
        </button>

        <span style={{ alignSelf: 'center' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
