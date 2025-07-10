"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  // You can add more user properties if needed, e.g. username, email, etc.
}

export default function AxioFetch2() {
  const [mydata, setMydata] = useState<User[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  const fetchdata = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMydata(response.data);
      setError(false);
    } catch (error) {
      console.error("erorrrr");
      setError(true);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <p style={{ color: "red", fontSize: 18 }}>Failed to fetch data.</p>
        <button
          onClick={fetchdata}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>User List</h2>
      {mydata.map((item) => (
        <div
          key={item.id}
          style={{
            padding: 12,
            marginBottom: 12,
            backgroundColor: "#fff",
            borderRadius: 6,
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            fontSize: 16,
            color: "#333",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
