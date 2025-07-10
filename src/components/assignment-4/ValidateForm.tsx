'use client';

import * as React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from '@mui/material';

// Define types for the form values
interface FormValues {
  email: string;
  password: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password should be at least 8 characters')
    .matches(/[A-Z]/, 'At least one uppercase letter is required')
    .matches(/[a-z]/, 'At least one lowercase letter is required')
    .matches(/[0-9]/, 'At least one number is required')
    .required('Password is required'),
});

export default function ValidatedForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: '2rem auto' }}>
      <Typography variant="h5" gutterBottom>
        Registration Form
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Box sx={{ mt: 2 }}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
