'use client';

import React, { useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Box,
} from '@mui/material';

interface FormData {
  name: string;
  email: string;
}

export default function ModalDialogWithForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
    handleClose();
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal Dialog
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Contact Information</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please fill out the form below to submit your contact details.
          </DialogContentText>

          <Box
            component="form"
            mt={2}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
