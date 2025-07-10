'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface Interests {
  coding: boolean;
  music: boolean;
  sports: boolean;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  gender: string;
  interests: Interests;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    gender: '',
    interests: {
      coding: false,
      music: false,
      sports: false,
    },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interests: {
          ...prevData.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '24px',
          color: '#333',
        }}
      >
        Registration Form
      </h2>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '15px' }}>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </label>

      <div style={{ marginBottom: '20px' }}>
        <span style={{ display: 'block', marginBottom: '8px' }}>
          Gender:
        </span>
        <label style={{ marginRight: '15px' }}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label style={{ marginRight: '15px' }}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === 'other'}
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong style={{ display: 'block', marginBottom: '8px' }}>
          Interests:
        </strong>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.coding}
            onChange={handleChange}
          />
          Coding
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            name="music"
            checked={formData.interests.music}
            onChange={handleChange}
          />
          Music
        </label>
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.sports}
            onChange={handleChange}
          />
          Sports
        </label>
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontSize: '16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = '#005ac1')
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = '#0070f3')
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
