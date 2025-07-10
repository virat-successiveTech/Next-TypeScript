"use client";

import React, { useState, FormEvent } from "react";
import axios from "axios";

export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await axios.post<{ id: number }>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body: content,
        }
      );
      setSuccess("Post submitted successfully! ID: " + res.data.id);
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to submit post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: "#fefefe",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={loading}
          style={{
            width: "100%",
            padding: "8px 10px",
            marginBottom: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />

        <label style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
          Content:
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={loading}
          rows={5}
          style={{
            width: "100%",
            padding: "8px 10px",
            marginBottom: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: 5,
            fontSize: 18,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>

      {success && (
        <p
          style={{
            marginTop: 20,
            color: "green",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {success}
        </p>
      )}

      {error && (
        <p
          style={{
            marginTop: 20,
            color: "red",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </p>
      )}
    </main>
  );
}
