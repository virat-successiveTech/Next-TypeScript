"use client";

import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostThree() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }

      const data: Post[] = await res.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 20 }}>
        <div
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #1976d2",
            borderRadius: "50%",
            width: 40,
            height: 40,
            margin: "0 auto",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: 20, color: "red" }}>
        <p>Error: {error}</p>
        <button
          onClick={fetchPosts}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main
      style={{
        maxWidth: 700,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1976d2" }}>
        Posts from JSONPlaceholder
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: 5,
              padding: 15,
              marginBottom: 15,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <strong
              style={{ display: "block", fontSize: 18, marginBottom: 8 }}
            >
              {post.title}
            </strong>
            <p style={{ margin: 0, color: "#555" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
