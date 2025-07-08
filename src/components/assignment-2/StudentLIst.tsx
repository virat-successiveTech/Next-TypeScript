"use client"
import React, { useState, useMemo } from 'react';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<string[]>(['Alice', 'Bob', 'Charlie']);
  const memoizedStudents = useMemo(() => students, [students]);
  const addStudent = () => {
    const newStudent = `Student${students.length + 1}`;
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {memoizedStudents.map((student, idx) => (
          <li key={idx}>{student}</li>
        ))}
      </ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
