"use client";
import React, { useState, useMemo } from 'react';

type Employee = {
  name: string;
  salary: number;
};

const EmployeeSalary: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { name: 'Virat', salary: 50000 },
    { name: 'Adi', salary: 60000 },
    { name: 'Lokesh', salary: 55000 },
  ]);

  const [showDetails, setShowDetails] = useState(false);

  const averageSalary = useMemo(() => {
    if (employees.length === 0) return 0;
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return total / employees.length;
  }, [employees]);

  const updateSalaries = () => {
    setEmployees(prev =>
      prev.map(emp => ({
        ...emp,
        salary: emp.salary + Math.floor(Math.random() * 10000 - 5000),
      }))
    );
  };

  const employeeDetails = () => {
    return employees.map((emp, index) => (
      <div key={index}>
        <strong>Name:</strong> {emp.name}, <strong>Salary:</strong> ${emp.salary}
      </div>
    ));
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <button onClick={() => setShowDetails(prev => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <div>{employeeDetails()}</div>}

      <h2>Average Employee Salary</h2>
      <p>${averageSalary.toFixed(2)}</p>

      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
