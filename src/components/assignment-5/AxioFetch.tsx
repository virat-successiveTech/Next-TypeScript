import axios from "axios";
import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = res.data;
  } catch (err: any) {
    error = err.message || "Failed to load posts";
  }

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 50 }}>
        Error: {error}
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 700, margin: "30px auto", padding: "0 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: 25,
              padding: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
              backgroundColor: "#fafafa",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <strong
              style={{ fontSize: 18, display: "block", marginBottom: 8 }}
            >
              {post.title}
            </strong>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
