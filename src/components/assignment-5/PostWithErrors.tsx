"use client";

import React, { useState, useEffect } from "react";

interface Address {
  city: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export default function PostWithRetry() {
  const [posts, setPosts] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error(`Failed to fetch data ${res.status}`);
      }
      const data: User[] = await res.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <div style={{ padding: 20, color: "red", textAlign: "center" }}>
        <p>Error loading data: {error}</p>
        <button
          onClick={fetchData}
          style={{
            marginTop: 10,
            padding: "8px 16px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
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
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <ul
      style={{
        padding: 0,
        listStyleType: "none",
        maxWidth: 600,
        margin: "20px auto",
      }}
    >
      {posts.map((post) => (
        <li
          key={post.id}
          style={{
            marginBottom: 20,
            padding: 15,
            border: "1px solid #ccc",
            borderRadius: 5,
            backgroundColor: "#fefefe",
          }}
        >
          <strong
            style={{ display: "block", fontSize: 18, marginBottom: 8 }}
          >
            Data of: {post.name}
          </strong>
          <p style={{ margin: "4px 0" }}>Username: {post.username}</p>
          <p style={{ margin: "4px 0" }}>Email: {post.email}</p>
          <p style={{ margin: "4px 0" }}>City: {post.address.city}</p>
        </li>
      ))}
    </ul>
  );
}
