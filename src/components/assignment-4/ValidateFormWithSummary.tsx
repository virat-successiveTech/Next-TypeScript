'use client';

import React, { useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Alert,
  List,
  ListItem,
} from '@mui/material';

// Define form value types
interface FormValues {
  name: string;
  email: string;
  age: string; // keep as string to simplify number input handling
}

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(18, 'Must be at least 18')
    .max(100, 'Too old'),
});

export default function ValidatedFormWithSummary() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => {
      setSubmitted(true);
      alert('Form submitted successfully!\n' + JSON.stringify(values, null, 2));
      helpers.setSubmitting(false);
    },
  });

  const errorKeys = Object.keys(formik.errors) as (keyof FormValues)[];

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: '2rem auto' }}>
      <Typography variant="h5" gutterBottom>
        User Form
      </Typography>

      {submitted && errorKeys.length > 0 && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Please fix the following errors:</Typography>
          <List dense>
            {errorKeys.map((key) => (
              <ListItem key={key} sx={{ pl: 2, display: 'list-item' }}>
                {formik.errors[key]}
              </ListItem>
            ))}
          </List>
        </Alert>
      )}

      <form
        onSubmit={(e) => {
          setSubmitted(true);
          formik.handleSubmit(e);
        }}
        noValidate
      >
        <TextField
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          id="age"
          name="age"
          label="Age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />

        <Box sx={{ mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={Object.keys(formik.errors).length > 0 && submitted}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
